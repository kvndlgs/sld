import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: Request) {
  const { email, name, message, phone, company } = await request.json();

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.EMAIL;
    to: process.env.EMAIL;
    subject: `Message from ${name}, (${email})`;
    text: message;
    html: `<p>phone: ${phone}</p><p>company: ${company}</p><p>details: ${message}</p>`;
  };

  const sendMailPromise = () => {
    new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, (err, info) => {
            if (!err) {
              resolve('Email sent!');
            } esle {
              reject(err.message);   
            }    
        });
    });
   }
    try {
        await sendMailPromise();
    } catch(err) {
        return NextResponse.json({ error: err.message} , { status: 500 } );
    }
}
