import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: [],
};

const garageSlice = createSlice({
  name: 'garage',
  initialState,
  reducers: {
    addCar: (state, action) => {
      const carExists = state.cars.some(
        (car) =>
          car.make === action.payload.make &&
          car.model === action.payload.model &&
          car.year === action.payload.year
      );
      if (!carExists) {
        state.cars.push({
          ...action.payload,
          id: `${action.payload.make}-${action.payload.model}-${action.payload.year}-${Date.now()}`,
        });
      }
    },
    removeCar: (state, action) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
    clearGarage: (state) => {
      state.cars = [];
    },
    setGarage: (state, action) => {
      state.cars = action.payload;
    },
  },
});

export const { addCar, removeCar, clearGarage, setGarage } = garageSlice.actions;
export default garageSlice.reducer;
