import User from "../models/User.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const user = await User.find({}, { _id: 0 })
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};