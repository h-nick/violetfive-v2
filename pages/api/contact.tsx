import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  sgMail.setApiKey(process.env.SG_API_KEY as string);
  const data = JSON.parse(req.body);

  const text = `
    ${data.organization}
    ${data.referral}
    ${data.message}
  `;

  const msg = {
    to: process.env.SG_RECV_EMAIL as string,
    from: data.email,
    subject: 'VioletFive Web: New Contact Message',
    text,
  };

  sgMail.send(msg)
    .then(() => {
      res.json({
        ok: true,
      });
    })
    .catch((error) => {
    // Console log with error gets stored on non-volatile file.
    /* eslint-disable-next-line no-console */
      console.log(error);
      res.status(500).json({
        ok: false,
      });
    });
};
