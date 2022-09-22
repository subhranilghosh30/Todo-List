const asyncHandler = require('express-async-handler')
const ToDo=require('../models/todoModel')

const getToDo=asyncHandler(async(req, res) => {
  const todos = await ToDo.find()
  res.status(200).json({ todos })
})

const setToDo=asyncHandler(async(req, res) => {
  if(!req.body.text){
    res.status(400)
    throw new Error('Please add ToDo')
  }
  const todo = await ToDo.create({
    text: req.body.text
  })
  res.status(200).json(todo)
})

const updateToDo=asyncHandler(async(req, res) => {
  const todo = await ToDo.findById(req.params.id)

  if(!todo){
    res.status(400)
    throw new Error('To Do not Found')
  }
  const updatedToDo = await ToDo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
res.status(200).json(updatedToDo)
})

const deleteToDo=asyncHandler(async(req, res) => {
res.status(200).json({ message: `Delete ToDo ${req.params.id}` })
})

module.exports={
  getToDo,
  setToDo,
  updateToDo,
  deleteToDo,
}
