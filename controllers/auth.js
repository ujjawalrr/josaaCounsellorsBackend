import User from "../models/User.js";
import Discount from "../models/Discount.js";
import nodemailer from 'nodemailer';

export const discount = async (req, res, next) => {
  try {
    const discount = await Discount.findOne({ code: req.body.code });
    if (discount === null) {
      res.status(400).send(`Invalid code!`)
    }
    else {
      res.status(200).send(discount);
    }
  } catch (err) {
    res.status(400).send(`Invalid code!`);
  }
};

export const register = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    const user = await User.findOne({ email: req.body.email });
    if (user === null) {
      await newUser.save();
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'josaacounsellors@gmail.com',
          pass: process.env.MAIL
        }
      })
      const mailOptions = {
        from: 'josaacounsellors@gmail.com',
        to: req.body.email,
        subject: `Registration Successful`,
        html: `<p> Hey ${req.body.name}! Thanks for choosing us. You have successfully registered for JOSAA Counselling Helpdesk. We are verifying your payment details. You will receive confirmation mail soon.<p>`
      }
      transporter.sendMail(mailOptions, (error, info) => {
        res.status(200).send(`Hey ${req.body.name}!! We are verifying your payment. We will get back to you within 24 hours. In case of any queries, raise your query in Contact Us Section or you can mail us on josaacounsellors@gmail.com .`);
      })
       }
    else {
      res.status(400).send(`This email is already registered with name ${req.body.name}.`);
    }
  } catch (err) {
    res.status(400).send("Your registration was not completed. Please check all the fields and try again. If the problem persists contact us or mail us on josaacounsellors@gmail.com .");
  }
};