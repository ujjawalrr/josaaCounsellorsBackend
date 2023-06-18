import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    homeState: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    pwd: {
      type: String,
      required: true,
    },
    mainsRank: {
      type: String,
      required: true,
    },
    mainsCategoryRank: {
      type: String,
      required: true,
    },
    advRank: {
      type: String,
    },
    advCategoryRank: {
      type: String,
    },
    code: {
      type: String,
    },
    paymentID: {
      type: String,
      required: true,
      unique: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
