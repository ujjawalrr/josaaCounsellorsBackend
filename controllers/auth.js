import User from "../models/User.js";
import nodemailer from 'nodemailer';



export const register = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    const user = await User.findOne({ email: req.body.email });
    if(user === null){
      await newUser.save();
      res.status(200).send(`Hey ${req.body.name}!! . We are verifying your payment. We will get back to you within 24 hours. In case of any queries, raise your query in Contact Us Section or you can mail us on josaacounsellors@gmail.com .`);
    }
    else{
      res.status(400).send(`This email is already registered with name ${req.body.name}.`);
    }
    
    // const user = await User.findOne({ email: req.body.email });
    
    
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
    res.status(400).send("Your registration was not completed. Please check all the fields and try again. If the problem persists contact us or mail us on josaacounsellors@gmail.com .");
    // res.status(500).send(err);
  }
};