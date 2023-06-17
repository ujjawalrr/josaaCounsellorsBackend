import mongoose from "mongoose";
const ContactUsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  message: {
    type: String,
  },
  purchased: {
    type: String,
    required: true,
  },
},
{ timestamps: true }
);

export default mongoose.model("ContactUs", ContactUsSchema)