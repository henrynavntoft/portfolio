import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.simply.com',
    port: 587,
    secure: false,
    auth: {
      user: 'info@henrynavntoft.dk',
      pass: process.env.SIMPLY_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: 'info@henrynavntoft.dk',
    subject: `Contact form submission from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error sending email', error }), { status: 500 });
  }
}
