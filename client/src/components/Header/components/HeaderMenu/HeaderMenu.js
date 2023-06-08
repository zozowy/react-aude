import { NavLink } from 'react-router-dom';
import styles from './HeaderMenu.module.scss';
import { AuthContext } from 'context';
import { useContext } from 'react';

function HeaderMenu({setWishlistDisplay, hideMenu}) {
    const { user, signout } = useContext(AuthContext);
    return (
        <>

            {user ? (
                <ul onClick={hideMenu} className={`${styles.MenuContainer} card p-20`}>
                    <li>
                        <NavLink to="admin">
                            Admin
                        </NavLink>
                    </li>
                    <li onClick = { () => setWishlistDisplay(true)}>Wishlist</li>
                    <NavLink to="admin">
                        <li onClick={() => signout()} >
                            Déconnexion
                        </li>
                    </NavLink>
                </ul>
            ) : (
                <ul className={`${styles.MenuContainer} card p-20`}>
                    <li>
                        <NavLink to="signup">
                            Inscription
                        </NavLink>
                    </li>
                    <li>Wishlist</li>
                    <li >
                        <NavLink to="signin">
                            Connexion
                        </NavLink>
                    </li>
                </ul>
            )}


        </>
    );

}

export default HeaderMenu;