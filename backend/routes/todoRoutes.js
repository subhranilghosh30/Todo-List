const express= require('express')
const router= express.Router()
const {getToDo}= require('../controllers/todoController')

router.get('/', getToDo)

router.post('/', (req, res)=> {
  res.status(200).json({ message: 'Set ToDo' })
})

router.put('/:id', (req, res)=> {
  res.status(200).json({ message: `Update ToDo ${req.params.id}` })
})

router.delete('/:id', (req, res)=> {
  res.status(200).json({ message: `Delete ToDo ${req.params.id}` })
})

module.exports = router
