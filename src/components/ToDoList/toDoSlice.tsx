import { createSlice } from '@reduxjs/toolkit';

export const toDoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [] as string[],
  },
  reducers: {
    create: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    remove: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { create, remove } = toDoSlice.actions;

export default toDoSlice.reducer;
