import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { GarageButton } from './GarageButton';
import garageReducer from '../store/garageSlice';

const createMockStore = (initialState = { cars: [] }) => {
  return configureStore({
    reducer: {
      garage: garageReducer,
    },
    preloadedState: {
      garage: initialState,
    },
  });
};

const mockCar = {
  make: 'Ferrari',
  model: '488 GTB',
  year: 2023,
  engine: '3.9L Twin-Turbocharged V8',
};

export default {
  title: 'Components/GarageButton',
  component: GarageButton,
  decorators: [
    (Story) => (
      <Provider store={createMockStore()}>
        <Story />
      </Provider>
    ),
  ],
};

export const AddToGarage = {
  args: {
    car: mockCar,
  },
};

export const RemoveFromGarage = {
  args: {
    car: mockCar,
  },
  decorators: [
    (Story) => (
      <Provider
        store={createMockStore({
          cars: [{ ...mockCar, id: 'test-id' }],
        })}
      >
        <Story />
      </Provider>
    ),
  ],
};
