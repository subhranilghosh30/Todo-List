const getToDo = (req, res) => {
  res.status(200).json({ message: 'Get ToDo'})
}

module.exports={
  getToDo,
}
