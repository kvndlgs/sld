import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
    try {
        await sendgrid.send({
            to: "info@shieldsignalisation.com",
            from : "info@shieldsignalisation.com",
            subject: "Nouveau message",
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html lang="fr">
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
                    <h3>Vous avez un nouveau message de la part de ${req.body.fullname}, provenant de l'adesse courriel: ✉️${req.body.email} </h3>
                    <h3> Il agis en tant que ${req.body.role} au pres de l'entreprise  ${req.body.company}.</h3>
                    <h4> Vous pouvez le rejoindre au ${req.body.phone} </h4>  
                    <div style="font-size: 16px;">
                    <p> telecharger la piece jointe ici <a href=${req.body.file}> télécharger </p>
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