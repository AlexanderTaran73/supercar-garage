import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Container, Box, Paper, Typography, Grid, Button, Chip } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { GarageButton } from '../components/GarageButton';

const CarDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;

  if (!car) {
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
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ textAlign: 'center' }}>
            Car details not found.
          </Typography>
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Button
              variant="contained"
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate('/explore')}
              sx={{
                backgroundColor: '#FFD700',
                color: '#1a1a1a',
                fontWeight: 'bold',
              }}
            >
              Back to Explore
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: 'calc(100vh - 64px)', py: 4 }}>
      <Container maxWidth="lg">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{
            mb: 3,
            color: '#1a1a1a',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: 'rgba(255, 215, 0, 0.1)',
            },
          }}
        >
          Back
        </Button>

        <Paper
          elevation={3}
          sx={{
            backgroundColor: '#fff',
            p: 4,
            borderLeft: '4px solid #FFD700',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
            <DirectionsCarIcon sx={{ fontSize: 48, color: '#FFD700' }} />
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                {car.make}
              </Typography>
              <Typography variant="h5" sx={{ color: '#FFD700' }}>
                {car.model}
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography variant="body2" sx={{ color: '#666', fontWeight: 'bold' }}>
                    YEAR
                  </Typography>
                  <Typography variant="h6">{car.year}</Typography>
                </Box>

                {car.engine && (
                  <Box>
                    <Typography variant="body2" sx={{ color: '#666', fontWeight: 'bold' }}>
                      ENGINE
                    </Typography>
                    <Typography variant="h6">{car.engine}</Typography>
                  </Box>
                )}

                {car.transmission && (
                  <Box>
                    <Typography variant="body2" sx={{ color: '#666', fontWeight: 'bold' }}>
                      TRANSMISSION
                    </Typography>
                    <Chip label={car.transmission} sx={{ mt: 1 }} />
                  </Box>
                )}

                {car.fuel_type && (
                  <Box>
                    <Typography variant="body2" sx={{ color: '#666', fontWeight: 'bold' }}>
                      FUEL TYPE
                    </Typography>
                    <Chip label={car.fuel_type} sx={{ mt: 1 }} />
                  </Box>
                )}
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {car.mpg && (
                  <Box>
                    <Typography variant="body2" sx={{ color: '#666', fontWeight: 'bold' }}>
                      MPG
                    </Typography>
                    <Typography variant="h6">{car.mpg}</Typography>
                  </Box>
                )}

                {car.drive && (
                  <Box>
                    <Typography variant="body2" sx={{ color: '#666', fontWeight: 'bold' }}>
                      DRIVE TYPE
                    </Typography>
                    <Chip label={car.drive} sx={{ mt: 1 }} />
                  </Box>
                )}

                {car.class && (
                  <Box>
                    <Typography variant="body2" sx={{ color: '#666', fontWeight: 'bold' }}>
                      CLASS
                    </Typography>
                    <Typography variant="h6">{car.class}</Typography>
                  </Box>
                )}

                {car.cylinders && (
                  <Box>
                    <Typography variant="body2" sx={{ color: '#666', fontWeight: 'bold' }}>
                      CYLINDERS
                    </Typography>
                    <Typography variant="h6">{car.cylinders}</Typography>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid #ddd' }}>
            <Typography variant="body2" sx={{ color: '#666', mb: 2, fontWeight: 'bold' }}>
              ACTIONS
            </Typography>
            <GarageButton car={car} />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default CarDetails;
