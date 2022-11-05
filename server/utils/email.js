const { compareSync } = require('bcrypt')
const nodemialer= require('nodemailer')

module.exports= async(email,subject,text)=>{
    try {
        const transporter= nodemialer.createTransport({
            host:process.env.HOST,
            service:process.env.SERVICE,
            port:Number( process.env.EMAIL_PORT),
            secure:Boolean(process.env.SECURE),
            auth:{
                user:process.env.USER,
                pass:process.env.PASS
            }
        })
        await transporter.sendMail({
            from:process.env.USER,
            to:email,
            subject:subject,
            text:text
        })
      console.log('Emailsend:success')
        
    } catch (error) {
        console.log(error)
        console.log('email  not send')
        
    }
}