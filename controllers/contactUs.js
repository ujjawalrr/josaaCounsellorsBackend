import ContactUs from "../models/ContactUs.js";

export const contactUs = async (req, res, next) => {
  try {
    const newUser = new ContactUs(req.body);
    await newUser.save();
    res.status(200).send(`Hey ${req.body.name}!! Thanks for contacting us. We will get back to you within 24 hours. You can mail us on josaacounsellors@gmail.com , if your query is not resolved.`);
  } catch (err) {
    res.status(400).send("Please check all the fields and try again. If the problem persists, mail us on josaacounsellors@gmail.com. We will get back to you within 24 hours.");
  }
};