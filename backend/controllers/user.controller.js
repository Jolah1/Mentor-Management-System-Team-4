import httpStatus from 'http-status';
import ApiError from '../utils/ApiError';
import catchAsync from '../utils/catchAsync';
import { userService } from '../services';

const createProfile = catchAsync(async (req, res) => {
  const user = await userService.createProfile(req);
  res.status(httpStatus.CREATED).json({ success: true, data: user });
});

const getUsers = catchAsync(async (req, res) => {
  const { limit = 10, page = 1 } = req.query;
  const result = await userService.queryUsers(limit, page);

  res.status(httpStatus.OK).json({ success: true, data: result });
});

const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  res.status(httpStatus.OK).json({ success: true, data: user });
});

export { createProfile, getUsers, getUser };
