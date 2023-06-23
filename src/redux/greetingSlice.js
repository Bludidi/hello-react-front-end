import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GETGREETINGDATA = 'greeting/webapp/GETGREETINGDATA';
const URL = 'http://localhost:3000/api/v1/greetings';

const initialState = {
  greetingData: [],
  isLoading: false,
  error: null,
};

export const getApiData = createAsyncThunk(GETGREETINGDATA, async () => {
  const response = await axios.get(URL);
  return response.data;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: [{
    getApiDataStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getApiDataSuccess(state, action) {
      state.isLoading = false;
      state.greetingData = action.payload;
    },
    getApiDataFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }],
});

export default greetingSlice.reducer;
