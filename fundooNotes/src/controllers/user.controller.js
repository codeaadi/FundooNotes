import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const registerUser = async (req, res, next) => {
  try {
    const data = await UserService.registerUser(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });
  } catch (error) {
    next(error);
  }
};
// login user
export const loginUser = async (req, res, next) => {
  try {
    const data = await UserService.loginUser(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User login  successfully'
    });
  } catch (error) {
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      message:'Invalid email'
      })
  }
};
// // forgot password
export const forgetPassword = async (req, res, next) => {
  try {
    const data = await UserService.forgetPassword(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Please check  Your mail to reset Password'
    });
  } catch (error) {
    res.status(HttpStatus.CREATED).json({
    code: HttpStatus.CREATED,
    message:'Invalid email for password reset'
    })
  }
};

// // reset password
// export const resetPassword = async (req,res) => {
//   try {
//     console.log('reset password', req.body);
//     const data = await UserService.resetPassword(req.body);
//     res.status(HttpStatus.CREATED).json({
//       code: HttpStatus.CREATED,
//       data: data,
//       message: 'Password had been reset'
//     });
//   } catch (error) {
//     res.status(HttpStatus.CREATED).json({
//     code: HttpStatus.CREATED,
//     message:'Cannot reset'
//     })
//   }
// }

