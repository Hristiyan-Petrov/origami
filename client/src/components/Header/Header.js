import style from './Header.module.css';
import NavigationItem from './NavigationItem';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <li className="listItem"><img src="/white-origami-bird.png" alt="white origami" /></li>
                

                <Link to="/"><NavigationItem>Home</NavigationItem></Link>
                <Link to="/about"><NavigationItem>About</NavigationItem></Link>
                <Link to="/contact-us"><NavigationItem>Contact Us</NavigationItem></Link>
                <Link to="/about/pesho"><NavigationItem>Peshkata</NavigationItem></Link>
                <Link to="/about/aleks"><NavigationItem>Going to 5</NavigationItem></Link>
                <Link to="/about/vladi"><NavigationItem>Going to 6</NavigationItem></Link>
                <NavLink activeClassName="active-navigation-item" to="/about/joro"><NavigationItem>Going to 7</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" to="/about/hriska"><NavigationItem>Going to 8</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" to="/about/naska"><NavigationItem>Going to 9</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" to="/about/krisko"><NavigationItem>Going to 10</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" to="/about/stef"><NavigationItem>Going to 11</NavigationItem></NavLink>

                <Link to="/about">ABOUT</Link>
            </ul>
        </nav>
    );
};

export default Header;