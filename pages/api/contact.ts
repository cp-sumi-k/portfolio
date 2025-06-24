import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sumichotaliya2015@gmail.com',
      pass: 'ipsx fwpz sloq zlpj',
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'sumichotaliya2015@gmail.com',
      subject: `Portfolio Contact from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Failed to send email', error });
  }
}
