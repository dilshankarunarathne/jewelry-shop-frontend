import nodemailer from 'nodemailer';

export async function sendEmail(to: string, subject: string, html: string): Promise<void> {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-password'
      }
    });
  
    let mailOptions = {
      from: 'your-email@gmail.com',
      to: to,
      subject: subject,
      html: html
    };
  
    let info = await transporter.sendMail(mailOptions);
  
    console.log('Message sent: %s', info.messageId);
}
