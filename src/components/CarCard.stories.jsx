import { CarCard } from './CarCard';

export default {
  title: 'Components/CarCard',
  component: CarCard,
};

const mockCar = {
  make: 'Ferrari',
  model: '488 GTB',
  year: 2023,
  engine: '3.9L Twin-Turbocharged V8',
  transmission: 'Automatic',
  fuel_type: 'Gasoline',
  mpg: '12',
};

export const Ferrari488 = {
  args: {
    car: mockCar,
    onViewDetails: () => console.log('View Details clicked'),
  },
};

export const Lamborghini = {
  args: {
    car: {
      make: 'Lamborghini',
      model: 'Huracán',
      year: 2023,
      engine: '5.2L Naturally Aspirated V10',
      transmission: 'Automatic',
      fuel_type: 'Gasoline',
      mpg: '11',
    },
    onViewDetails: () => console.log('View Details clicked'),
  },
};

export const Porsche = {
  args: {
    car: {
      make: 'Porsche',
      model: '911 Turbo',
      year: 2023,
      engine: '3.7L Twin-Turbocharged Flat-6',
      transmission: 'Automatic',
      fuel_type: 'Gasoline',
      mpg: '14',
    },
    onViewDetails: () => console.log('View Details clicked'),
  },
};
