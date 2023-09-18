import { configureStore } from '@reduxjs/toolkit';
import upload from './module/upload';

const store = configureStore({
  devTools: import.meta.env.DEV,
  reducer: {
    upload,
  },
});

export default store;
