import { useContext, useState } from 'react';
import { ThemeContext, LocationContext } from '../../../App';
import './navbar.css';

export default function NavBar() {
    const {theme, setTheme} = useContext(ThemeContext);
    const {searchLocation, setSearchLocation} = useContext(LocationContext);
    const [searchValue, setSearchValue] = useState('');

    const toggleTheme = () => {
        setTheme((theme === 'dark') ? 'light' : 'dark');
    }

    function changeLocationHandler(e) {
        setSearchValue(e.target.value);
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            searchWeatherForLocation();
        }
    }

    function searchWeatherForLocation() {
        console.log('trigger API', searchLocation);
        setSearchLocation(searchValue);
    }

    return <nav className="navbar">
        <div className='search-wrapper'>
            <input type='text' placeholder="Location..." value={searchValue} onKeyDown={handleKeyPress} onChange={changeLocationHandler}></input>
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