const getToDo=(req, res) => {
  res.status(200).json({ message: 'Get Todo' })
}

const setToDo=(req, res) => {
  if(req.body.text){
    
  }
  res.status(200).json({ message: 'Set Todo' })
}

const updateToDo=(req, res) => {
res.status(200).json({ message: `Update ToDo ${req.params.id}` })
}

const deleteToDo=(req, res) => {
res.status(200).json({ message: `Delete ToDo ${req.params.id}` })
}

module.exports={
  getToDo,
  setToDo,
  updateToDo,
  deleteToDo,
}
