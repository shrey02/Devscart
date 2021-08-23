import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import {persistStore} from 'redux-persist'
export const store = configureStore({
  reducer: {
   user : userReducer
  },
});

export const persist = persistStore(store)
