import styles from "./Header.module.scss";
import cookchef from "../../assets/images/cookchef.png";
import { useContext, useState } from "react";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context";
import { useSetRecoilState } from "recoil";
import { wishtlistDisplayState } from "state";

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const { user , signout} = useContext(AuthContext);
    const setWishlistDisplay = useSetRecoilState(wishtlistDisplayState);
    return (
        <header className={`${styles.header} d-flex flex-row align-items-center`}>
            {/* <i className="fa-solid fa-bars mr-15"></i> */}
            <div className="flex-fill">
                <NavLink to="/">
                <img
                    src={cookchef} alt="logo cookchef"
                />
                </NavLink>
            </div>
            { user ?
            (
                <ul className={styles.headerList}>
                <NavLink to="admin">
                    <button
                    className="btn btn-primary mr-15">
                    Admin</button>
                </NavLink>

                <button onClick={() => setWishlistDisplay(true)} className="mr-15 btn btn-reverse-primary">
                    <i className="fa-solid fa-heart mr-5"></i>
                    <span>Wishlist</span>
                </button>
                <NavLink to="profile">
                    <button
                    className="btn btn-primary mr-15">
                    Profile</button>
                </NavLink>
                <NavLink to="/">
                    <button
                    onClick={ () => signout()}
                    className="btn btn-primary mr-15">
                    Déconnexion</button>
                </NavLink>
            </ul>
            ) : (
                <ul className={styles.headerList}>
                <NavLink to="signup">
                    <button
                    className="btn btn-primary mr-15">
                    Inscription</button>
                </NavLink>
                <NavLink to="signin">
                    <button
                    className="btn btn-primary mr-15">
                    Connexion</button>
                </NavLink>
            </ul>
            )}
            <i
                onClick={() => setShowMenu(true)}
                className={`fa-solid fa-bars ${styles.headerXs}`}
            ></i>
            {showMenu && (
                <>
                    <div onClick={() => setShowMenu(false)} className="calc"></div>
                    <HeaderMenu setWishlistDisplay={ () => setWishlistDisplay(true)} hideMenu= {() => setShowMenu(false)}/>
                </>
            )}
        </header>
    );
}

export default Header;