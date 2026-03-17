import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Search from './pages/Search';
import Garage from './pages/Garage';
import CarDetails from './pages/CarDetails';
import { setGarage } from './store/garageSlice';
import { loadGarageFromLocalStorage } from './utils/localStorage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const savedGarage = loadGarageFromLocalStorage();
      if (savedGarage && Array.isArray(savedGarage) && savedGarage.length > 0) {
        dispatch(setGarage(savedGarage));
      }
    } catch (error) {
      console.error('Error loading garage:', error);
    }
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/search" element={<Search />} />
        <Route path="/garage" element={<Garage />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
