import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../components/features/car/carSlice"

export const store = configureStore({
  reducer: {
    car:carReducer,
  },
});
