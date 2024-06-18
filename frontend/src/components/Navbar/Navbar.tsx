import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css'

const setActive = (isActive: boolean) => isActive ? styles.active : '';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.mainMenu}>
                <NavLink to={'/'} className={({ isActive }) => setActive(isActive)}>Главная</NavLink>
                <NavLink to={'/awards'} className={({ isActive }) => setActive(isActive)}>Премии</NavLink>
                <NavLink to={'/search'} className={({ isActive }) => setActive(isActive)}>Поиск</NavLink>
            </div>
            <div className={styles.profileMenu}>
                <NavLink to={'/me'}>
                    <img className={styles.userIcon} src="/user.png" alt="user profile"></img>
                </NavLink>
            </div>
        </div>
    )
}