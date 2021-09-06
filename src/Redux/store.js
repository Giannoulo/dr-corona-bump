import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import livesReducer from "./livesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    lives: livesReducer,
  },
});
