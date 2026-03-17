const GARAGE_KEY = 'supercar_garage_data';

export const saveGarageToLocalStorage = (garageData) => {
  try {
    localStorage.setItem(GARAGE_KEY, JSON.stringify(garageData));
  } catch (error) {
    console.error('Error saving garage data to localStorage:', error);
  }
};

export const loadGarageFromLocalStorage = () => {
  try {
    const data = localStorage.getItem(GARAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading garage data from localStorage:', error);
    return [];
  }
};
