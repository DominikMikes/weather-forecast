import logo from './logo.svg';
import './App.css';
import { Weather } from './features/weather/index';
import NavBar from './features/navbar/components/navbar';
import { createContext, useState } from 'react';

export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="App">
        <NavBar></NavBar>
        <div style={{backgroundImage: (theme==='dark') ? "url('/images/background.jpg')" : "url('/images/sunrise.jpg')"}} className="background-image"></div>
        <Weather></Weather> 
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
