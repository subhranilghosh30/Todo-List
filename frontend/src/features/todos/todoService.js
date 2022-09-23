import axios from 'axios'

const API_URL = '/api/todos/'

// Create new goal
const createToDo = async (todoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, todoData, config)

  return response.data
}

const todoService = {
  createToDo,
  //getGoals,
  //deleteGoal,
}

export default todoService
