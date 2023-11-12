import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <NavLink className={css.headerLink} to="/">
        Home
      </NavLink>
      <NavLink className={css.headerLink} to="/movies">
        Movies
      </NavLink>
    </header>
  );
};

export default Header;
