import { useEffect, useState } from 'react';
import { Container, Grid, Box, CircularProgress, Typography, Alert } from '@mui/material';
import { CarCard } from '../components/CarCard';
import { useNavigate } from 'react-router-dom';
import { getPopularCars } from '../api/carsApi';

const Explore = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        setError(null);
        const allCars = await getPopularCars();
        
        if (allCars.length === 0) {
          setError('No cars found. Try again later.');
        } else {
          setCars(allCars);
        }
      } catch (err) {
        setError(err.message || 'Failed to fetch cars');
        setCars([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress sx={{ color: '#FFD700' }} />
          <Typography sx={{ mt: 2, color: '#666' }}>
            Loading supercars...
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: 'calc(100vh - 64px)', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
          Explore Supercars
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 4 }}>
            {error}
          </Alert>
        )}

        {cars.length === 0 && !error ? (
          <Alert severity="info">No cars found. Please try again later.</Alert>
        ) : (
          <>
            <Typography variant="body1" sx={{ mb: 3, color: '#666' }}>
              Found {cars.length} car(s) with full specifications
            </Typography>
            <Grid container spacing={3}>
              {cars.map((car, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <CarCard
                    car={car}
                    onViewDetails={() =>
                      navigate(`/car/${index}`, { state: { car } })
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

export default Explore;
