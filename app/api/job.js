import { resend } from 'resend'

async function sendEmail(req, res) {
  try {
    await resend.email({
      to: "info@shieldsignalisation.com",
      from: `${req.body.email}`,
      subject: "Application",
      html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <title>Shield signalisation</title>
              <meta name="description" content="Shield signalisation">
              <meta name="author" content="Shield">
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
            
              <link rel="stylesheet" href="css/styles.css?v=1.0">
            
            </head>
            
            <body>
              <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
                    </div>
                    <div class="container" style="margin-left: 20px;margin-right: 20px;">
                    <h3>Vous avez un application de la part de ${req.body.fullname}, provenant de l'adesse courriel: ✉️${req.body.email} </h3>
                    <h3> Vous pouvez consulter son CV ci-joint ${req.body.file} </h3>
                    <div style="font-size: 16px;">
                    <p>Message:</p>
                    <p>${req.body.message}</p>
                    <br>
                    </div>
                    </div>
            </body>
            </html>`,
    });
  } catch (error) {
    console.log(error);
    res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail