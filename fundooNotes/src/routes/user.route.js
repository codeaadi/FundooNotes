import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import { userAuthForgetPassword } from '../middlewares/auth.middleware';

const router = express.Router();

//route to Register a new user
router.post('', newUserValidator, userController.registerUser);
router.post('/login',userController.loginUser);
router.post('/forgetpassword',userController.forgetPassword);
router.post('/resetpassword/:token',userController.resetPassword);

export default router;
