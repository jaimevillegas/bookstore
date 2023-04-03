import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    booklist: 0,
    categories: 0,
  },
});

export default store;
