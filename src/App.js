import logo from './logo.svg';
import './App.css';
import { Weather } from './features/weather/index';

function App() {
  return (
    <div className="App">
      <div style={{backgroundImage: "url('/images/background.jpg')"}} className="background-image"></div>
      <Weather></Weather> 
    </div>
  );
}

export default App;
