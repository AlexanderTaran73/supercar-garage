import { Container, Grid, Box, Typography, Alert } from '@mui/material';
import { useSelector } from 'react-redux';
import { CarCard } from '../components/CarCard';
import { useNavigate } from 'react-router-dom';

const Garage = () => {
  const garage = useSelector((state) => state.garage.cars);
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: 'calc(100vh - 64px)', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
          My Supercar Garage
        </Typography>

        {garage.length === 0 ? (
          <Alert severity="info" sx={{ fontSize: '1.1rem' }}>
            Your garage is empty. Go to Explore or Search to add supercars!
          </Alert>
        ) : (
          <>
            <Typography variant="body1" sx={{ mb: 3, color: '#666' }}>
              You have {garage.length} car(s) in your garage
            </Typography>
            <Grid container spacing={3}>
              {garage.map((car) => (
                <Grid item xs={12} sm={6} md={4} key={car.id}>
                  <CarCard
                    car={car}
                    onViewDetails={() =>
                      navigate(`/car/${car.id}`, { state: { car } })
                    }
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Container>
    </Box>
  );
};

export default Garage;
