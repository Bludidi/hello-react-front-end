/* eslint-disable no-sequences */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/v1/greetings';
const GET_GREETINGS = 'get_greetings';

export const fetchGreeting = createAsyncThunk(GET_GREETINGS, async () => {
  const response = await axios.get(url);
  return response.data;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: { text: '' },
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => ({
      ...state,
      text: action.payload.greetings,
    }));
  },
});

export default greetingSlice.reducer;
