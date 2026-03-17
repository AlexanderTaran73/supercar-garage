import { configureStore } from '@reduxjs/toolkit';
import garageReducer from './garageSlice';
import { saveGarageToLocalStorage } from '../utils/localStorage';

export const store = configureStore({
  reducer: {
    garage: garageReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  saveGarageToLocalStorage(state.garage.cars);
});
