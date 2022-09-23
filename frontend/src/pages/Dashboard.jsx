import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ToDoForm from '../components/ToDoForm'
//import ToDoItem from '../components/ToDoItem'
import Spinner from '../components/Spinner'
import { getToDo, reset } from '../features/todos/todoSlice'


function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return <>
  <section className='heading'>
      <h1>Welcome</h1>
      <p>to your ToDo List Dashboard</p>
    </section>

    <ToDoForm />

  </>
}

export default Dashboard
