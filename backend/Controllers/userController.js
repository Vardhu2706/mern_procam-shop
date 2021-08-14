import asyncHandler from "express-async-handler";
import User from "../Models/userModel.js";

// @desc       Auth user & get a token
// @route      POST /api/users/login
// @access     Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  res.send(email, password);
});

// 5:14