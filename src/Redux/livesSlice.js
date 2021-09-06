import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lives: 3,
};

export const livesSlice = createSlice({
  name: "lives",
  initialState,
  reducers: {
    incrementLives: (state) => {
      state.lives += 1;
    },
    decrementLives: (state) => {
      state.lives -= 1;
    },
    resetLives: (state) => {
      state.lives = 3;
    },
  },
});

export const { incrementLives, decrementLives, resetLives } = livesSlice.actions;

export const selectLives = (state) => state.lives.lives;

export default livesSlice.reducer;
