import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import { authService } from '../services';

const register = catchAsync(async (req, res) => {
  const user = await authService.registerUser(req);
  res.status(httpStatus.CREATED).json({ success: true, user });
});

const login = catchAsync(async (req, res) => {
  const user = await authService.loginUser(req.body);

  res.status(httpStatus.OK).json({ user });
});

const forgotPassword = catchAsync(async (req, res) => {
  const user = await authService.requestPasswordReset(req, res);

  return user;
});

const resetPassword = catchAsync(async (req, res) => {
  const user = await authService.resetPassword(req, res);

  return user;
});

export { register, login, forgotPassword, resetPassword };
