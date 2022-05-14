import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    multiply: (state) => {
      state.count *= 7;
    },
    divide: (state) => {
      state.count /= 2;
    },
    reset: (state, action) => {
      state.count = action.payload;
    },

  },
});
export const {
  increment, decrement, incrementByAmount, multiply, divide, reset,
} = counterSlice.actions;

export default counterSlice.reducer;
