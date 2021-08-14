import asyncHandler from "express-async-handler";
import User from "../Models/userModel.js";

// @desc       Auth user & get a token
// @route      POST /api/users/login
// @access     Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.send({ email, password });
});

export { authUser };

// 7
