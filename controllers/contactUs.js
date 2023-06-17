import ContactUs from "../models/ContactUs.js";
import nodemailer from 'nodemailer';



export const contactUs = async (req, res, next) => {
  try {
    const newUser = new ContactUs(req.body);
    await newUser.save();
    res.status(200).send(`Hey ${req.body.name}!! Thanks for contacting us. We will get back to you within 24 hours. You can mail us on josaacounsellors@gmail.com , if your query is not resolved.`);
    
    
    // mailing
    // const transporter = nodemailer.createTransport({
    //   host: 'smtp.gmail.com',
    //   port: 465,
    //   secure: true,
    //   auth: {
    //     user: 'ujjawalkgp@gmail.com',
    //     pass: 'oyvziqntqpvlpdti'
    //   }
    // })

    // const mailOptions = {
    //   from: 'ujjawalkgp@gmail.com',
    //   to: req.body.email,
    //   subject: `Registration Successful`,
    //   html: `<h1> Hey ${req.body.name}!! Greetings from COMPOSIT, IIT KHARAGPUR. You have been successfully registered for COMPOSIT. Your registration id is ${req.body.regID} .<h1>`
    // }

    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.log(error);
    //     res.send('error in mailing');
    //   } else {
    //     // res.redirect('/contact')
    //     res.status(200).send("User has been created and mailed");
    //   }
    // })
    // res.status(200).send("User has been created.");
  } catch (err) {
    res.status(400).send("Please check all the fields and try again. If the problem persists, mail us on josaacounsellors@gmail.com. We will get back to you within 24 hours.");
    // res.status(500).send(err);
  }
};