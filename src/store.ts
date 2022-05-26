import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './components/Counter/counterSlice';
import toDoSlice from './components/ToDoList/toDoSlice';
import pokemonApi from './components/Slices/pokemonSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todos: toDoSlice,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
