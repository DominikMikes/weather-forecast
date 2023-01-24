import { useContext, useState } from 'react';
import { ThemeContext } from '../../../App';
import './navbar.css';

export default function NavBar() {
    const {theme, setTheme} = useContext(ThemeContext);
    const [searchLocation, setSearchLocation] = useState('');

    const toggleTheme = () => {
        setTheme((theme === 'dark') ? 'light' : 'dark');
    }

    function changeLocationHandler(e) {
        setSearchLocation(e.target.value);
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            searchWeatherForLocation();
        }
    }

    function searchWeatherForLocation() {
        console.log('trigger API', searchLocation);
    }

    return <nav className="navbar">
        <div className='search-wrapper'>
            <input type='text' placeholder="Location..." value={searchLocation} onKeyDown={handleKeyPress} onChange={changeLocationHandler}></input>
            <button className="search-button" onClick={searchWeatherForLocation}>🔍</button>
        </div>
        <div className='theme-wrapper' onClick={toggleTheme}>
            { theme === 'dark'
                ? <>🌛</>
                : <>🌞</>
            }
        </div>
    </nav>
}