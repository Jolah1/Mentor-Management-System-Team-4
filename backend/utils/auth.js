import bcrypt from 'bcryptjs';

/**
 * @description - hashes password
 * @param {string} password
 * @returns {string} hashedPassword - returns hashed password
 */
const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));
  return hashedPassword;
};

export default {
  hashPassword,
};
