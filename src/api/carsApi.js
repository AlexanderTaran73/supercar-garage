import axios from 'axios';

const API_BASE_URL = 'https://api.api-ninjas.com/v1';
const DEFAULT_API_KEY = 'ehJFcylfP6f57s1wSZIM0EWZ7uVASXnhXQHTSR07';

export const getApiKey = () => {
  const storedKey = localStorage.getItem('apiKey');
  return storedKey || import.meta.env.VITE_API_KEY || DEFAULT_API_KEY;
};

export const saveApiKey = (key) => {
  localStorage.setItem('apiKey', key);
};

export const clearApiKey = () => {
  localStorage.removeItem('apiKey');
};

const createApiClient = () => {
  return axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'X-Api-Key': getApiKey(),
    },
  });
};

let apiClient = createApiClient();

export const updateApiClient = () => {
  apiClient = createApiClient();
};

const BRAND_MODELS = {
  ferrari: ['f8', 'f430', '812', 'testarossa', '360', 'f50', 'ff', 'portofino'],
  lamborghini: ['huracan', 'aventador', 'gallardo', 'murciélago', 'countach', 'diablo', 'reventon'],
  porsche: ['911', '918', 'cayman', 'boxster', '944', 'carrera', 'gt2'],
  bugatti: ['chiron', 'veyron', 'bolide', 'eb110'],
  mclaren: ['p1', 'f1', '765lt', 'senna', '720s', 'mp4-12c'],
  pagani: ['zonda', 'huayra', 'bc', 'imola'],
  lotus: ['emira', 'exige', 'elise', 'evora'],
  koenigsegg: ['agera', 'jesko', 'ccx', 'regera'],
  Ferrari: ['f8', 'f430', '812', 'testarossa', '360', 'f50', 'ff', 'portofino'],
  Lamborghini: ['huracan', 'aventador', 'gallardo', 'murciélago', 'countach', 'diablo', 'reventon'],
  Porsche: ['911', '918', 'cayman', 'boxster', '944', 'carrera', 'gt2'],
  Bugatti: ['chiron', 'veyron', 'bolide', 'eb110'],
  McLaren: ['p1', 'f1', '765lt', 'senna', '720s', 'mp4-12c'],
  Pagani: ['zonda', 'huayra', 'bc', 'imola'],
  Lotus: ['emira', 'exige', 'elise', 'evora'],
  Koenigsegg: ['agera', 'jesko', 'ccx', 'regera'],
};

export const getCarsByMake = async (make) => {
  try {
    const response = await apiClient.get('/cars', {
      params: {
        make: make.toLowerCase(),
      },
    });
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error(`Error fetching cars for ${make}:`, error);
    return [];
  }
};

export const getCarsByMakeWithModels = async (make) => {
  try {
    const normalizedMake = make.toLowerCase();
    let models = BRAND_MODELS[normalizedMake] || BRAND_MODELS[make];
    if (!models) {
      console.warn(`No known models for ${make}, trying single query...`);
      return await getCarsByMake(make);
    }

    const allCars = [];
    for (const model of models) {
      try {
        const cars = await getCarsByMakeAndModel(make, model);
        if (cars && Array.isArray(cars) && cars.length > 0) {
          allCars.push(...cars.slice(0, 3));
        }
      } catch (e) {
        console.warn(`Failed to fetch ${make} ${model}:`, e);
      }
    }

    return allCars.length > 0 ? allCars : [];
  } catch (error) {
    console.error(`Error fetching cars for ${make} with models:`, error);
    return [];
  }
};

export const getCarsByMakeAndModel = async (make, model) => {
  try {
    const response = await apiClient.get('/cars', {
      params: {
        make: make.toLowerCase(),
        model: model.toLowerCase(),
      },
    });
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error(`Error fetching cars for ${make} ${model}:`, error);
    return [];
  }
};

export const getPopularCars = async () => {
  try {
    const popularBrands = [
      { make: 'Ferrari', models: ['f8', 'f430', '812', 'testarossa'] },
      { make: 'Lamborghini', models: ['huracan', 'aventador', 'gallardo', 'murciélago'] },
      { make: 'Porsche', models: ['911', '918', 'cayman', 'boxster'] },
      { make: 'Bugatti', models: ['chiron', 'veyron', 'bolide'] },
      { make: 'McLaren', models: ['p1', 'f1', '765lt', 'senna'] },
      { make: 'Pagani', models: ['zonda', 'huayra', 'bc'] },
    ];

    const allCars = [];

    for (const brand of popularBrands) {
      try {
        const selectedModels = brand.models.slice(0, 2);
        
        for (const model of selectedModels) {
          try {
            const cars = await getCarsByMakeAndModel(brand.make, model);
            if (cars && Array.isArray(cars) && cars.length > 0) {
              allCars.push(...cars.slice(0, 2));
            }
          } catch (e) {
            console.warn(`Failed to fetch ${brand.make} ${model}:`, e);
          }
        }
      } catch (e) {
        console.warn(`Failed to fetch models for ${brand.make}:`, e);
      }
    }

    return allCars.length > 0 ? allCars : [];
  } catch (error) {
    console.error('Error fetching popular cars:', error);
    return [];
  }
};
