const asyncHandler = require('express-async-handler')

const getToDo=asyncHandler(async(req, res) => {
  res.status(200).json({ message: 'Get Todo' })
})

const setToDo=asyncHandler(async(req, res) => {
  if(!req.body.text){
    res.status(400)
    throw new Error('Please add ToDo')
  }
  res.status(200).json({ message: 'Set Todo' })
})

const updateToDo=asyncHandler(async(req, res) => {
res.status(200).json({ message: `UpdateToDo ${req.params.id}` })
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
