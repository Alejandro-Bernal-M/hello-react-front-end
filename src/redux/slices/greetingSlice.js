import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting' , async () => {
    const response = await fetch('http://localhost:3000/api/v1/greetings');
    const data = await response.json();
    const greeting = data.message;
    return greeting;
} )

const initialState = {
    message: '',
    loading: false
}

const greetingSlice = createSlice({
    name: 'greeting',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchGreeting.pending, (state) => {
        state.loading = true;
      })
      builder.addCase(fetchGreeting.fulfilled, (state, action) => {
        state.message = action.payload;
        state.loading = false;
      })
      builder.addCase(fetchGreeting.rejected, (state) => {
        state.loading = false;
        state.message = 'Error';
      })
      }
})

export default greetingSlice.reducer;