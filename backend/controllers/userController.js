const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const registerUser= asyncHandler(async(req, res) =>{
  res.json({ message: 'Register User' })
})

const loginUser= asyncHandler(async(req, res) =>{
  res.json({ message: 'Login User' })
})

const getMe= asyncHandler(async(req, res) =>{
  res.json({ message: 'User data' })
})

module.exports = {
  registerUser,
  loginUser,
  getMe,
}
