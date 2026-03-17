# Supercar Garage

A modern React single-page application that allows users to explore supercars, search for cars by brand, view car specifications, and save cars to a personal garage collection.

## Features

- **Explore**: Browse a comprehensive list of supercars from the API
- **Search**: Search for supercars by brand/make
- **Details**: View detailed specifications of each car
- **Garage**: Save and manage your personal supercar collection
- **Persistence**: Save your garage to localStorage
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **React 19** - UI library
- **React Router 7** - Client-side routing
- **Redux Toolkit** - State management
- **Material-UI 7** - Component library
- **Axios** - HTTP client
- **Vite** - Build tool
- **Storybook** - Component documentation
- **ESLint & Prettier** - Code quality and formatting

## Project Structure

```
src/
├── api/
│   └── carsApi.js              # API client using Axios
├── components/
│   ├── Header.jsx              # Navigation header
│   ├── CarCard.jsx             # Car display card
│   ├── SearchBar.jsx           # Search input component
│   ├── GarageButton.jsx        # Add/remove from garage
│   ├── CarCard.stories.jsx     # Storybook stories
│   ├── SearchBar.stories.jsx   # Storybook stories
│   └── GarageButton.stories.jsx # Storybook stories
├── pages/
│   ├── Home.jsx                # Landing page
│   ├── Explore.jsx             # Browse all cars
│   ├── Search.jsx              # Search by brand
│   ├── Garage.jsx              # Saved cars
│   └── CarDetails.jsx          # Car details page
├── store/
│   ├── store.js                # Redux store configuration
│   └── garageSlice.js          # Garage reducer
├── utils/
│   └── localStorage.js         # localStorage utilities
├── App.jsx                     # Main app with routing
├── main.jsx                    # Entry point
└── index.css                   # Global styles
```

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm run dev
```
The app will open at `http://localhost:5173` (or `http://localhost:5174` if port is in use)

3. **Configure API Key (Optional but Recommended):**
   - Get a free API key from [api-ninjas.com](https://api-ninjas.com/)
   - Click the ⚙️ **Settings** button on the Home page
   - Paste your API key in the dialog
   - Click **Save** - your key is stored in localStorage
   - Or use the default key included (with rate limits)

## Features in Detail

### 🏠 Home Page
- Landing page with introduction to the app
- Settings button (⚙️) to configure your API key
- Quick access to Explore Supercars

### 🚗 Explore Page
- Browse popular supercars from multiple brands (Ferrari, Lamborghini, Porsche, Bugatti, McLaren, Pagani, Lotus, Koenigsegg)
- View cars from multiple models per brand
- Click "View Details" to see full specifications
- "Add to Garage" button to save your favorites

### 🔍 Search Page
- Search by brand name (e.g., "Ferrari", "Lamborghini")
- Returns all available models for that brand
- View detailed specifications for each car
- Save cars to your personal garage

### 📋 Garage Page
- View all saved supercars
- Manage your personal collection
- Click on any car to view full details
- Remove cars from garage as needed

### 🎯 Car Details Page
- Full specifications including:
  - Engine type
  - Transmission
  - Fuel type
  - MPG
  - Drive type
  - Vehicle class
  - Year and more

## Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module reloading

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder

### Lint
```bash
npm run lint
```
Runs ESLint to check code quality and fix formatting

## API Configuration

The app uses [api-ninjas.com Cars API](https://api-ninjas.com/api/cars)

**Free Tier Features:**
- `/v1/cars?make=<brand>&model=<model>` - Search cars by brand and model
- Rate limit: 50 requests per month

**How to Get More Requests:**
1. Visit [api-ninjas.com](https://api-ninjas.com/)
2. Sign up for a free account
3. Generate an API key
4. Click Settings (⚙️) on the Home page and add your key
5. Your key is saved automatically to localStorage

## Troubleshooting

### Port Already in Use
If port 5173 is occupied, Vite will automatically use 5174 (or the next available port)

### No Cars Loading
- Check your API key is valid (if using custom key)
- The API has rate limits - wait a moment and refresh
- Try a different brand name

### Garage Data Not Persisting
- Check that localStorage is enabled in your browser
- The app automatically saves your garage state locally

## API Integration

The app uses the [API Ninjas Cars API](https://api-ninjas.com/api/cars) to fetch supercar data.

**Endpoints used:**
- `GET /v1/cars?make={brand}` - Get cars by brand/make
- `GET /v1/cars?limit=100` - Get multiple cars

## State Management

### Redux Store
The app uses Redux Toolkit for managing the garage state:

**State Structure:**
```javascript
{
  garage: {
    cars: [
      {
        id: string,
        make: string,
        model: string,
        year: number,
        engine: string,
        transmission: string,
        fuel_type: string,
        mpg: string,
        ...
      }
    ]
  }
}
```

**Actions:**
- `addCar(car)` - Add a car to garage
- `removeCar(id)` - Remove a car from garage
- `clearGarage()` - Clear all cars
- `setGarage(cars)` - Set garage from localStorage

## Data Persistence

The app automatically saves your garage to localStorage and loads it on startup. The `utils/localStorage.js` module handles this:

- `saveGarageToLocalStorage(garageData)` - Save garage state
- `loadGarageFromLocalStorage()` - Load garage state

## Components

### Header
Navigation bar with links to all pages. Active links are highlighted.

### CarCard
Displays car information with specs and action buttons:
- View Details button
- Add/Remove from Garage button

### SearchBar
Search input with button for finding cars by brand.

### GarageButton
Redux-connected button for adding/removing cars from garage. Shows different states based on whether the car is in the garage.

## Pages

### Home
Landing page with app introduction and call-to-action button.

### Explore
Displays all available supercars from the API with loading and error states.

### Search
Search interface for finding supercars by brand/make.

### Garage
Shows all saved supercars from the personal collection.

### CarDetails
Detailed view of a single car with full specifications and garage controls.

## Best Practices Implemented

- ✅ Functional components with hooks
- ✅ Proper separation of concerns
- ✅ Reusable components
- ✅ Error handling for API requests
- ✅ Loading states
- ✅ Redux for state management
- ✅ LocalStorage persistence
- ✅ Material-UI for consistent design
- ✅ Responsive design
- ✅ Component documentation with Storybook

## License

MIT
