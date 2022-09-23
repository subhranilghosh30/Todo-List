import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import todoService from './todoService'

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

//Create a new To do
export const createToDo = createAsyncThunk(
  'todos/create', async (todoData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await todoService.createGoal(todoData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  })


//Get User To do
export const getToDo = createAsyncThunk(
  'todos/getAll', async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await todoService.getToDo(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  })




export const todoSlice = createSlice({
  name: 'todo',
  initialState,

  reducers: {
    reset: (state) => initialState,
  },

  extraReducers: (builder) => {
   builder
     .addCase(createToDo.pending, (state) => {
       state.isLoading = true
     })
     .addCase(createToDo.fulfilled, (state, action) => {
       state.isLoading = false
       state.isSuccess = true
       state.todos.push(action.payload)
     })
     .addCase(createToDo.rejected, (state, action) => {
       state.isLoading = false
       state.isError = true
       state.message = action.payload
     })

     .addCase(getToDo.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getToDo.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.todos = action.payload
      })
      .addCase(getToDo.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
   },
})

export const { reset } = todoSlice.actions
export default todoSlice.reducer
