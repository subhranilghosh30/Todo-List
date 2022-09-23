import axios from 'axios'

const API_URL = '/api/todos/'

// Create new todo
const createToDo = async (todoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL, todoData, config)
  return response.data
}

// Get new todo
const getToDo = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL, config)
  return response.data
}


const todoService = {
  createToDo,
  getToDo,
  //deleteGoal,
}

export default todoService
