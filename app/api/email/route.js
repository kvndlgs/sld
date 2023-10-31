// import {NextRequest, NextResponse} from 'next/server'
import nodemailer from 'nodemailer'

export default async function EmailApi(req, res) {
    const { fullname, email, message } = req.body;

    const user = process.env.user;

    const data = {
        fullname,
        email,
        message,
    }



const transporter = nodemailer.createTransport({
    host: 'smtp.domain.ext.webcommail.net',
    port: 587,
    secret: true,
    auth: {
        user: process.env.SHIELD_EMAIL,
        pass: process.env.EMAIL_PASSWORD
    },

});

try {
    const mail = await transporter.sendMail({
        from: user,
        to: "info@shieldsignalisation.com",
        replyTo: email,
        subject: 'Vous avez un nouveau message',
        html: `
         <p>Nom: ${fullname}</p>
         <p>Courriel:${email}</p>
         <p>Message: ${message} </p>
        `,
    });

    console.log("Message sent!", mail.messageId)
    return res.status(200).json({message: 'success'});
} catch(error) {
     res.status(500).json({
            message: "Oops, votre message n'as pas pu etre envoyer."
        })
    } 
};