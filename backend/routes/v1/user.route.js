import express from 'express';
import verifyToken from '../../middlewares/auth';
import validate from '../../middlewares/validate';
import userValidation from '../../validations/user.validation';
import * as userController from '../../controllers/user.controller';

const router = express.Router();

router.route('/').get(verifyToken, validate(userValidation.getUsers), userController.getUsers);
router.route('/profile').put(verifyToken, validate(userValidation.createProfile), userController.createProfile);
router.route('/:userId').get(verifyToken, validate(userValidation.getUser), userController.getUser);

export default router;
