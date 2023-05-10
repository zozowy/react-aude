import { NavLink } from "react-router-dom";
import styles from "./AdminNav.module.scss";

export default function AdminNav() {
    return (
        <ul className={`${styles.list} d-flex flex-column`}>
            <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to="users"> Utilisteurs </NavLink>
            <NavLink className={({ isActive }) => isActive ?  styles.active : ""} to="recipes"> Recettes </NavLink>
        </ul>
    );
}