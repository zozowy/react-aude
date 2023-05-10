import { NavLink } from 'react-router-dom';
import styles from './HeaderMenu.module.scss';

function HeaderMenu() {
  return (
    <ul className={`${styles.MenuContainer} card p-20`}>
      <li>
        <NavLink to="admin">
         Ajouter une recette
        </NavLink>
        </li>
      <li>Wishlist</li>
      <li >
      <NavLink to="admin">
        Connexion
      </NavLink>
      </li>
    </ul>
  );
}

export default HeaderMenu;