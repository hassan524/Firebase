import { configureStore } from '@reduxjs/toolkit';
import UpdateReducer from './updateSlice'; 

const store = configureStore({
  reducer: {
    updatingStudent: UpdateReducer, 
  },
});

export default store;
