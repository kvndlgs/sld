const API_KEY = process.env.MAILGUN_API_KEY;
 const DOMAIN = 'shieldsignalisation.com';

 import formData from 'form-data';
 import Mailgun from 'mailgun.js';

 const mailgun = new Mailgun(formData);
 const client = mailgun.client({username: 'api', key: API_KEY});

 const data = {
   from: 'Excited User <me@samples.mailgun.org>',
   to: ['alice@example.com', 'bob@example.com'],
   subject: 'Hey %recipient.name%',
   text: 'If you wish to unsubscribe, click http://mailgun/unsubscribe/%recipient.recipientId%',
   'recipient-variables': JSON.stringify({
     'alice@example.com': {
       name: 'Alice',
       recipientId: 1
     },
     'bob@example.com':
     {
       name: 'Bob',
       recipientId: 2
     }
   })
 };

client.messages.create(DOMAIN, data)
 .then((res) => {
   console.log(res);
 })
 .catch((err) => {
   console.error(err);
 });