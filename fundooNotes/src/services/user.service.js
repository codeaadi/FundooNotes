import User from '../models/user.model';
import bcrypt from 'bcrypt'
import { emailSender } from '../utils/send.mail';
import { Jwt } from 'jsonwebtoken';
import randomstring  from 'randomstring';
import { error } from 'winston';

//create new user
export const registerUser = async (body) => {
  const presentUser = await User.findOne({ email: body.email });
  if (presentUser) {
    throw new Error('Already Registered');
  } else {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(body.password, salt);
    body.password = hash
    const data = await User.create(body);
    let result = (({ firstName,lastName, email}) => ({ firstName, lastName,email  }))(data);
    return result;
  }
};
// login User
// export const loginUser = async (body) => {
//   const searchUser = await User.findOne({email:body.email});
//   if (searchUser) {
//     if (bcrypt.compareSync(body.password,searchUser.password)) {
//       let jwt = require('jsonwebtoken');
//       let token = jwt.sign({email:searchUser.email,_id:searchUser._id}, process.env.secretkey);
//       return token
//     } else {
//       throw new Error('Invalid password');
//     }
//   } else {
//     throw new Error(res.status(404).sent({success:false,msg:"User Not Found"} ));
//   }
// };
// // forgetpassword
// export const forgetPassword = async (body) => {
//   const searchUser = await User.findOne({email:body.email});
//   const email = searchUser.email;
//   if(searchUser) {
//     let randomString = randomstring.generate();
//     const data = await User.updateOne({email:email},{$set:{token:randomString}})
//     emailSender(email,randomString)
//     res.status(200).send({success:true,msg:"Mail sent successfully"})
//   }else {
//     throw new error(res.status(404).sent({success:false,msg:"User not found"}))
//   }
// }

// // reset Password
// export const resetPassword = async (body) => {
//   const token = body.params.token;
//    const tokenData = await User.findOne({token:token})
//    if(tokenData){
//         const password = tokenData.password
//         const hash = bcrypt.hashSync(password, salt);
//             password = hash
//         const newPassword = password
//         const userData = await User.findByIdAndUpdate({_id:tokenData.id},{$set:{password:newPassword,token:''}},{new:true})
//         return userData
//    }else
//    {throw new error(res.status(404).sent({success:true,msg:"User not found"}))}
//   }


