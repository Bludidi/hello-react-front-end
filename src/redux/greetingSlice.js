/* eslint-disable no-sequences */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3000/api/v1/greetings';
const GET_GREETINGS = 'get_greetings';
const initialState = {
  greetingText: [],
  isLoading: true,
};

export const fetchGreeting = createAsyncThunk(GET_GREETINGS, async () => {
  const response = await axios.get(url);
  return response.data;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: [],
  extraReducers: {
    [fetchGreeting.fulfilled]: (state, action) => {
      state.greetingText = action.payload;
      state.isLoading = false;
    },
    [fetchGreeting.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchGreeting.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default greetingSlice.reducer;
