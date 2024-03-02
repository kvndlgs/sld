import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
    const { email, name, message, phone, role, company, staff, region } = await request.json();
  
    const transport = nodemailer.createTransport({
      host: "web-smtp-oxcs.hostingplatform.com",
      port: 587,
      secure: true,
      debug: true,
      logger: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
  
    const mailOptions: Mail.Options = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      // cc: email, (uncomment this line if you want to send a copy to the sender)
      subject: `Message de ${name} Courriel: ${email}`,
      text: message,
      html: `Soumission de la part de ${name}.${role} pour l'entreprise ${company}. Nombre d'équipes requise: ${staff} dans la region de ${region}. Rejoindre au numero
    suivant: ${phone}. Ou par courriel au ${email}. Spécification: ${message}`
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
