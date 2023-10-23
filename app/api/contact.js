import { Resend } from 'resend'
import Email  from 'components/email/Email'

const resend = new Resend(process.env.RESEND_API_KEY);

resend.sendEmail({
  from: 'info@shieldsignalisation.com',
  to: 'kvndesloges@gmail.com',
  subject: 'Application',
  react: <Email firstName='kevin' product="Shield signalisation" />,
})