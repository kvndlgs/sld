import { NextApiRequest, NextApiResponse } from 'next'
import { resend } from '@/app/lib/resend'
import * as React from 'react';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['info@shieldsignalisation.com'],
        subject: 'Fuck a bitch',
        html: '<body><h1> hey </h1></body>',
      });
  
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  };

