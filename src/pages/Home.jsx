import { useState } from 'react';
import { Box, Container, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Alert, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SettingsIcon from '@mui/icons-material/Settings';
import { getApiKey, saveApiKey, clearApiKey, updateApiClient } from '../api/carsApi';

const Home = () => {
  const navigate = useNavigate();
  const [openApiDialog, setOpenApiDialog] = useState(false);
  const [apiKey, setApiKey] = useState(getApiKey());
  const [tempApiKey, setTempApiKey] = useState(apiKey);

  const handleOpenApiSettings = () => {
    setTempApiKey(getApiKey());
    setOpenApiDialog(true);
  };

  const handleCloseApiSettings = () => {
    setOpenApiDialog(false);
  };

  const handleSaveApiKey = () => {
    if (tempApiKey.trim()) {
      saveApiKey(tempApiKey);
      updateApiClient();
      setApiKey(tempApiKey);
      setOpenApiDialog(false);
    }
  };

  const handleClearApiKey = () => {
    clearApiKey();
    updateApiClient();
    setApiKey(getApiKey());
    setTempApiKey(getApiKey());
  };

  const isUsingDefaultKey = apiKey === 'ehJFcylfP6f57s1wSZIM0EWZ7uVASXnhXQHTSR07';

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
      }}
    >
      {/* Settings button in top right */}
      <IconButton
        onClick={handleOpenApiSettings}
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          color: '#FFD700',
          '&:hover': {
            backgroundColor: 'rgba(255, 215, 0, 0.1)',
          },
        }}
      >
        <SettingsIcon />
      </IconButton>

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <DirectionsCarIcon sx={{ fontSize: 80, color: '#FFD700', mb: 2 }} />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #FFD700, #FFA500)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
            }}
          >
            Supercar Garage
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, color: '#ccc' }}>
            Explore the world's most exclusive supercars, search by brand, and build your
            personal garage collection.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: '#aaa', maxWidth: 600, mx: 'auto' }}>
            Discover detailed specifications of legendary supercars from Ferrari, Lamborghini,
            Porsche, and more. Create your dream collection.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/explore')}
            sx={{
              backgroundColor: '#FFD700',
              color: '#1a1a1a',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              px: 4,
              py: 2,
              '&:hover': {
                backgroundColor: '#FFA500',
              },
            }}
          >
            Explore Supercars
          </Button>
        </Box>
      </Container>

      <Dialog 
        open={openApiDialog} 
        onClose={handleCloseApiSettings}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: '#2a2a2a',
            color: 'white',
          },
        }}
      >
        <DialogTitle sx={{ color: '#FFD700', fontWeight: 'bold' }}>API Key Settings</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            {isUsingDefaultKey && (
              <Alert severity="info" sx={{ mb: 2, backgroundColor: 'rgba(33, 150, 243, 0.1)' }}>
                Currently using default API key. Consider adding your own for better stability!
              </Alert>
            )}
            <TextField
              fullWidth
              label="API Key"
              type="password"
              value={tempApiKey}
              onChange={(e) => setTempApiKey(e.target.value)}
              placeholder="Enter your api-ninjas.com API key"
              InputLabelProps={{
                sx: { color: '#FFD700' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: '#FFD700',
                  },
                  '&:hover fieldset': {
                    borderColor: '#FFA500',
                  },
                },
              }}
            />
            <Typography variant="caption" sx={{ mt: 2, display: 'block', color: '#aaa' }}>
              Get your free API key from{' '}
              <Box
                component="a"
                href="https://api-ninjas.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#FFD700', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                api-ninjas.com
              </Box>
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button 
            onClick={handleClearApiKey}
            sx={{ color: '#ff6b6b' }}
          >
            Reset to Default
          </Button>
          <Button 
            onClick={handleCloseApiSettings}
            sx={{ color: '#aaa' }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSaveApiKey}
            variant="contained"
            sx={{
              backgroundColor: '#FFD700',
              color: '#1a1a1a',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#FFA500',
              },
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Home;
