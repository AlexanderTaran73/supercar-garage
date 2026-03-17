import { useState } from 'react';
import { Container, Grid, Box, CircularProgress, Typography, Alert } from '@mui/material';
import { SearchBar } from '../components/SearchBar';
import { CarCard } from '../components/CarCard';
import { useNavigate } from 'react-router-dom';
import { getCarsByMakeWithModels } from '../api/carsApi';

const Search = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (make) => {
    try {
      setLoading(true);
      setError(null);
      setSearched(true);
      const response = await getCarsByMakeWithModels(make);
      setCars(response);
    } catch (err) {
      setError(err.message || 'Failed to search cars');
      setCars([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: 'calc(100vh - 64px)', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
          Search Supercars by Brand
        </Typography>

        <Box sx={{ mb: 4 }}>
          <SearchBar onSearch={handleSearch} placeholder="Enter brand (e.g., Ferrari)..." />
        </Box>

        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
            <CircularProgress sx={{ color: '#FFD700' }} />
          </Box>
        )}

        {error && (
          <Alert severity="error" sx={{ mb: 4 }}>
            {error}
          </Alert>
        )}

        {searched && !loading && cars.length === 0 && !error && (
          <Alert severity="info">No cars found for this brand. Try another brand.</Alert>
        )}

        {cars.length > 0 && (
          <>
            <Typography variant="body1" sx={{ mb: 3, color: '#666' }}>
              Found {cars.length} car(s)
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

export default Search;
