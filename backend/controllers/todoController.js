const asyncHandler = require('express-async-handler')
const ToDo=require('../models/todoModel')
const User = require('../models/userModel')

//Get ToDo
const getToDo = asyncHandler(async (req, res) => {
  const todos = await ToDo.find({ user: req.user.id })
  res.status(200).json(todos)
})

//Set ToDo
const setToDo=asyncHandler(async(req, res) => {
  if(!req.body.text){
    res.status(400)
    throw new Error('Please add ToDo')
  }

  const todo = await ToDo.create({
    text: req.body.text,
    user: req.user.id,
  })
  res.status(200).json(todo)
})

//Update ToDo
const updateToDo=asyncHandler(async(req, res) => {
  const todo = await ToDo.findById(req.params.id)

  if(!todo){
    res.status(400)
    throw new Error('To Do not Found')
  }


  const user = await User.findById(req.user.id)

  //Check for user
  if(!user){
    res.status(401)
    throw new Error('user not found')
  }

  //onlylogged in user matched todo user
  if(goal.user.toString() !== user.id) {

     res.status(401)
     throw new Error('User not authorized')
  }


  const updatedToDo = await ToDo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
res.status(200).json(updatedToDo)
})


//Delete ToDo
const deleteToDo=asyncHandler(async(req, res) => {
  const todo = await ToDo.findById(req.params.id)

  if(!todo){
    res.status(400)
    throw new Error('To Do not Found')
  }

  const user = await User.findById(req.user.id)

  //Check for user
  if(!user){
    res.status(401)
    throw new Error('user not found')
  }

  //onlylogged in user matched todo user
  if(goal.user.toString() !== user.id) {

     res.status(401)
     throw new Error('User not authorized')
  }


  await todo.remove()


res.status(200).json({ id: req.params.id })
})

module.exports={
  getToDo,
  setToDo,
  updateToDo,
  deleteToDo,
}
