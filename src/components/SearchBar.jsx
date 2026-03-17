import { TextField, Button, Box } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = ({ onSearch, placeholder = 'Search by brand...' }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    if (searchValue.trim()) {
      onSearch(searchValue);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
      <TextField
        fullWidth
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyPress={handleKeyPress}
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#FFD700',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FFD700',
            },
          },
        }}
      />
      <Button
        variant="contained"
        endIcon={<SearchIcon />}
        onClick={handleSearch}
        sx={{
          backgroundColor: '#FFD700',
          color: '#1a1a1a',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#FFA500',
          },
        }}
      >
        Search
      </Button>
    </Box>
  );
};
