import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getUserByEmail, getUserById } from './user.service';
import { sendResetPasswordEmail } from './email.service';
import { generateToken } from './token.service';
import utils from '../utils/auth';
import models from '../database/models';
import config from '../config/config';

const { User, Credential } = models;
const { hashPassword } = utils;

/**
 * Create a user
 * @param {Object} userBody
 * @param {Object} transaction
 * @returns {Promise<User>}
 */
const registerUser = async (userBody, transaction) => {
  const { body, query } = userBody;
  const { email, password, loginType } = body;
  const { userType } = query;

  // insert into users table
  const t = transaction;
  let payload;

  const [{ dataValues }, created] = await User.findOrCreate({
    where: { email },
    includes: { model: Credential },
    defaults: { email, user_type: userType || 'admin' },
    transaction: t,
  });

  let user = dataValues;

  if (created) {
    if (loginType) {
      payload = {
        user_id: user.user_id,
        login_type: loginType,
      };
    } else {
      const hashedPassword = await hashPassword(password);

      payload = {
        user_id: user.user_id,
        hashed_password: hashedPassword,
        login_type: 'local',
      };
    }

    const credentials = await Credential.create(payload, {
      transaction: t,
    });

    // remove password from credential data
    delete credentials.dataValues.hashed_password;
    user = { ...user, ...credentials.dataValues };
  }

  return user;
};

/**
 * @description - calls function that request for password reset
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} Response object
 */
const loginUser = async (body) => {
  const { password, email } = body;

  const user = await getUserByEmail(email);

  if (user && user.Credential.login_type !== 'local') {
    return {
      status: 400,
      success: false,
      error: 'please sign in through your google account',
    };
  }

  if (!user) {
    return {
      status: 401,
      success: false,
      error: 'invalid email or password',
    };
  }

  const { user_id: id, Credential: credential } = user;

  // check password
  const validPassword = await bcrypt.compare(password, credential.hashed_password);

  if (!validPassword) {
    return {
      status: 401,
      success: false,
      error: 'invalid email or password',
    };
  }

  const token = await generateToken({
    id,
    email,
  });

  delete user.Credential;

  return {
    success: true,
    token,
    data: user,
  };
};

/**
 * @description - Function to update credentials table
 * @param {Object} payload
 * @param {Integer} userId
 */
const updateCredential = async (payload, userId) => {
  await Credential.update(payload, {
    where: {
      user_id: userId,
    },
    returning: true,
    raw: true,
  });
};

/**
 * @description - calls function that request for password reset
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} Response object
 */
const requestPasswordReset = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'No user found',
      });
    }

    const { user_id: userId } = user;

    const passToken = generateToken({ userId });

    await sendResetPasswordEmail(email, passToken);

    return res.status(201).json({
      success: true,
      passToken,
      message: 'you will receive a mail, if you signed up with this email',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'something went wrong',
    });
  }
};

/**
 * @description - calls function that request for password reset
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} Response object
 */
const resetPassword = async (req, res) => {
  const { password } = req.body;
  const { token } = req.query;

  try {
    if (!token) {
      return res.status(401).json({
        status: 401,
        success: false,
        message: 'Action not permitted',
      });
    }

    const { userId } = await jwt.verify(token, config.jwt.secret);

    if (!userId) {
      return res.status(401).json({
        status: 401,
        success: false,
        message: 'Invalid token provided',
      });
    }

    const user = await getUserById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'No such user',
      });
    }

    const newPassword = await hashPassword(password);

    // if user, update the password
    await updateCredential({ hashed_password: newPassword }, userId);

    return res.status(200).json({
      success: true,
      message: 'Password updated successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'something went wrong',
    });
  }
};

export { registerUser, requestPasswordReset, loginUser, updateCredential, resetPassword };
