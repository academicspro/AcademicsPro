import nodemailer from "nodemailer";

export const sendRegistrationEmail = async (email: string, password: string) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  const emailTemplate = `
    <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(145deg, #6e7fd4, #4b57a0);
            color: #333;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          .container {
            max-width: 600px;
            margin: 50px auto;
            padding: 40px;
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
            text-align: center;
          }
          .header img {
            max-width: 180px;
            margin-bottom: 30px;
            background-color: #170E38;
          }
          .content {
            font-size: 18px;
            line-height: 1.7;
            margin-bottom: 30px;
            color: #444;
            
          }
          .content h2 {
            font-size: 24px;
            font-weight: bold;
            color: #4b57a0;
            margin-bottom: 15px;
          }
          .password-box {
            display: inline-block;
            background-color: #f8f9fa;
            padding: 15px 25px;
            border-radius: 8px;
            font-size: 20px;
            color: #333;
            letter-spacing: 1px;
            margin: 20px 0;
            font-family: 'Courier New', monospace;
          }
          .button {
            display: inline-block;
            padding: 15px 30px;
            margin: 20px 0;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            font-weight: bold;
            border-radius: 50px;
            text-align: center;
            cursor: pointer;
            font-size: 18px;
            transition: background-color 0.3s ease, transform 0.2s ease-in-out;
          }
          .button:hover {
            background-color: #0056b3;
            transform: translateY(-5px);
          }
          .footer {
            font-size: 14px;
            color: #777;
            margin-top: 30px;
          }
          .footer a {
            color: #007bff;
            text-decoration: none;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://academics-pro.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.50cb0b86.png&w=1920&q=75" alt="Logo" />
          </div>
          <div class="content">
            <h2>Welcome To Academocis Pro!</h2>
            <p>We are thrilled to have you on board. Your temporary password is:</p>
            <div class="password-box">
              ${password}
            </div>
            <p>Please use this password to log in and reset your password to ensure the security of your account.</p>
            <a href="https://academics-pro.vercel.app" class="button">Reset Password</a>
          </div>
          <div class="footer">
            <p>If you have any questions, feel free to <a href="https://academics-pro.vercel.app">contact us</a>.</p>
            <p>&copy; ${new Date().getFullYear()} Academocis Pro. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_SERVER_USER,
    to: email,
    subject: "Your Registration Details",
    html: emailTemplate,
  });
};



export async function sendResetEmail(email: string, resetLink: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
      user: process.env.EMAIL_SERVER_USER,  
      pass: process.env.EMAIL_SERVER_PASSWORD,  
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Password Reset Request",
    html: `
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Password Reset Request</title>
        </head>
        <body>
          <div style="max-width:600px;margin:0 auto;padding:20px;background-color:#fff;border-radius:8px;">
            <h2>Password Reset Request</h2>
            <p>Hello,</p>
            <p>We received a request to reset your password. If you made this request, please click the button below to reset your password:</p>
            <a href="${resetLink}" style="padding:10px 20px;background-color:#4CAF50;color:white;text-decoration:none;border-radius:5px;">Reset Password</a>
            <p>If you did not request this, please ignore this email. Your password will not be changed.</p>
            <p>This link will expire in 1 hour.</p>
            <div style="font-size:12px;color:#888;text-align:center;">
              <p>If you have any issues, feel free to contact our support team.</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Password reset email sent successfully");
  } catch (error) {
    console.error("Error sending reset email:", error);
  }
}