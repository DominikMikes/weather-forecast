import { useContext } from 'react';
import { ThemeContext } from '../../../App';
import './navbar.css';

export default function NavBar() {
    const {theme, setTheme} = useContext(ThemeContext);
    const toggleTheme = () => {
        setTheme((theme === 'dark') ? 'light' : 'dark');
    }
    return <nav className="navbar">
        <div>
            <input type='text' placeholder="Location..."></input>
        </div>
        <div className='theme-wrapper' onClick={toggleTheme}>
            { theme === 'dark'
                ? <>🌛</>
                : <>🌞</>
            }
        </div>
    </nav>
}