import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';


export async function POST(request: NextRequest) {
    const { email, name, message, phone, role, company } = await request.json();
  
    const transport = nodemailer.createTransport({
      host: 'web-smtp-oxcs.hostingplatform.com',
      port: 587,
      debug: true,
      logger: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    transport.verify(function(error, success) {
      if(error) {
        console.log(error);
      } else {
        console.log('Server is ready to take your messages.');
      }
    })
  
    const mailOptions: Mail.Options = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Message de ${name} Courriel: (${email}) Téléphone: ${phone}, Travaille comme ${role} pour l'enntreprise: ${company}.`,
      text: message,
    };
  
    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve('Merci! Votre message a bien été envoyer.');
          } else {
            reject(err.message);
          }
        });
      });
  
    try {
      await sendMailPromise();
      return NextResponse.json({ message: 'Merci! Votre message a bien été envoyer.' });
    } catch (err) {
      return NextResponse.json({ error: err }, { status: 500 });
    }
  }
