const nodemailer = require('nodemailer');
const {google} = require('googleapis');

const  CLIENT_ID = '595507806922-2eg1gpkebuh793oavt79h9nup5sahlt2.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//046j1NNSfRJBtCgYIARAAGAQSNwF-L9IrEKrkLaHG30aUeFq_q_5omOQ1SblNKU_F9QXOYZwT_1bM9du4IFxFP_1VhV8j4YYLASo';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI);
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

 export async function emailSender(email,token){
    console.log("Email--------",email);
    try {
        const accessToken = await oAuth2Client.getAccessToken()
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth : {
                type: 'OAuth2',
                user: 'adityadubey362@gmail.com',
                clientId : CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken, 
            }
        })

        const mailOptions = {
            from: 'AdityaDubey<adityadubey362@gmail.com>',
            to:email,
            subject: "Reset Password",
            text: "this mail is sent to reset your password",
            html: `<h1>Hello,<br><br>Click on given link to reset your password!
            </h1><br><h1>Link:><a href=" http://localhost:3000/api/v1/users/resetPassword/${token}">click here</a></h1>`
        };
        const result = await transport.sendMail(mailOptions)
        return result
    } catch (error) {
       return error
    }

}
