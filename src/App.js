import './App.css';
import { Weather } from './features/weather/index';
import NavBar from './features/navbar/components/navbar';
import { createContext, useState } from 'react';

export const ThemeContext = createContext()
export const LocationContext = createContext()

function App() {
  const [theme, setTheme] = useState('dark');
  const [searchLocation, setSearchLocation] = useState('');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="App">
      <div style={{backgroundImage: (theme==='dark') ? "url('/images/background.jpg')" : "url('/images/sunrise.jpg')"}} className="background-image"></div>
        <LocationContext.Provider value={{searchLocation, setSearchLocation}}>
          <NavBar></NavBar>
          <Weather></Weather>
        </LocationContext.Provider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
