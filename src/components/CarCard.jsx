import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
} from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { GarageButton } from './GarageButton';

export const CarCard = ({ car, onViewDetails }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',
        border: '2px solid #ddd',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
          transform: 'translateY(-4px)',
          borderColor: '#FFD700',
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: '#1a1a1a',
          color: 'white',
          padding: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <DirectionsCarIcon sx={{ fontSize: 32 }} />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {car.make}
          </Typography>
          <Typography variant="body2" sx={{ color: '#FFD700' }}>
            {car.model}
          </Typography>
        </Box>
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box>
            <Typography variant="body2" sx={{ color: '#666' }}>
              Year
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              {car.year}
            </Typography>
          </Box>

          {car.engine && (
            <Box>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Engine
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {car.engine}
              </Typography>
            </Box>
          )}

          {car.transmission && (
            <Box>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Transmission
              </Typography>
              <Chip label={car.transmission} size="small" />
            </Box>
          )}

          {car.fuel_type && (
            <Box>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Fuel Type
              </Typography>
              <Chip label={car.fuel_type} size="small" />
            </Box>
          )}

          {car.mpg && (
            <Box>
              <Typography variant="body2" sx={{ color: '#666' }}>
                MPG
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {car.mpg}
              </Typography>
            </Box>
          )}
        </Box>
      </CardContent>

      <CardActions
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          padding: 2,
        }}
      >
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: '#FFD700',
            color: '#1a1a1a',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#FFA500',
            },
          }}
          onClick={onViewDetails}
        >
          View Details
        </Button>
        <GarageButton car={car} />
      </CardActions>
    </Card>
  );
};
