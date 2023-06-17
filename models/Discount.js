import mongoose from "mongoose";
const DiscountSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
  },
},
{ timestamps: true }
);

export default mongoose.model("Discount", DiscountSchema)