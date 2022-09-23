import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ToDoForm from '../components/ToDoForm'
function Dashboard() {
  return <>
  <section className='heading'>
      <h1>Welcome</h1>
      <p>to your ToDo List Dashboard</p>
    </section>

    <ToDoForm />
  </>
}

export default Dashboard
