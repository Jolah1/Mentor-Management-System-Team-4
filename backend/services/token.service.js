import jwt from 'jsonwebtoken';
import moment from 'moment';
import config from '../config/config';
import tokenTypes from '../config/tokens';

/**
 * @description Generates jwt token from user info
 * @param {object} user
 * @returns {string} JWT token
 */

const generateToken = (user, expires = config.jwt.expires) => jwt.sign(user, config.jwt.secret, expires);

/**
 * Generate verify email token
 * @param {User} user
 * @returns {Promise<string>}
 */
const generateVerifyEmailToken = async (user) => {
  const expires = moment().add(config.jwt.verifyEmailExpirationMinutes, 'minutes');
  const verifyEmailToken = generateToken(user.id, expires, tokenTypes.VERIFY_EMAIL);
  return verifyEmailToken;
};

export { generateToken, generateVerifyEmailToken };
