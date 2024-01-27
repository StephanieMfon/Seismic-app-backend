import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

const sendEmail = async (email, subject, payload) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      service: process.env.NODEMAILER_SERVICE,
      port: 587,
      secure: false,
      debug: true,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASSWORD,
      },
      from: process.env.NODEMAILER_USER,
    });

    const options = () => {
      return {
        from: process.env.NODEMAILER_USER,
        to: email,
        subject: subject,
        html: payload,
      };
    };

    // Send email
    transporter.sendMail(options(), (error) => {
      if (error) {
        console.log(error);
      } else {
        return res.status(200).json({
          success: true,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
