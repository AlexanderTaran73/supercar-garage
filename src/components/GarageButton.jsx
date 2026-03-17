import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addCar, removeCar } from '../store/garageSlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const GarageButton = ({ car }) => {
  const dispatch = useDispatch();
  const garage = useSelector((state) => state.garage.cars);

  const isInGarage = garage.some(
    (garCar) =>
      garCar.make === car.make &&
      garCar.model === car.model &&
      garCar.year === car.year
  );

  const handleClick = () => {
    if (isInGarage) {
      const carToRemove = garage.find(
        (garCar) =>
          garCar.make === car.make &&
          garCar.model === car.model &&
          garCar.year === car.year
      );
      dispatch(removeCar(carToRemove.id));
    } else {
      dispatch(addCar(car));
    }
  };

  return (
    <Button
      fullWidth
      variant="outlined"
      onClick={handleClick}
      endIcon={isInGarage ? <RemoveIcon /> : <AddIcon />}
      sx={{
        borderColor: isInGarage ? '#d32f2f' : '#FFD700',
        color: isInGarage ? '#d32f2f' : '#FFD700',
        fontWeight: 'bold',
        '&:hover': {
          backgroundColor: isInGarage ? 'rgba(211, 47, 47, 0.1)' : 'rgba(255, 215, 0, 0.1)',
          borderColor: isInGarage ? '#d32f2f' : '#FFA500',
        },
      }}
    >
      {isInGarage ? 'Remove from Garage' : 'Add to Garage'}
    </Button>
  );
};
