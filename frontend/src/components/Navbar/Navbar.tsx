import { Link, NavLink } from "react-router-dom";
import styles from './Navbar.module.css'
import AuthService from "../../services/AuthService";
import { User } from "../../models/models";
import { userDataStore } from "../../store/mobx/userDataStore";
import { observer } from "mobx-react-lite";
import { searchStore } from "../../store/mobx/searchStore";

const setActive = (isActive: boolean) => isActive ? styles.active : '';

const Navbar = observer(() => {

    const logoutFunc = () => [
        AuthService.logout().then(() => {
            localStorage.removeItem("token");
            userDataStore.setAuth(false);
            userDataStore.setUser({} as User);
            searchStore.clearSearch();
        })
    ]

    return (
        <header className={styles.navbar}>
            <div className={styles.mainMenu}>
                <NavLink to={'/'} className={({ isActive }) => setActive(isActive)}>Главная</NavLink>
                {userDataStore.user.roles && userDataStore.user.roles.includes("ADMIN") ?
                    <NavLink to={'/addData'} className={({ isActive }) => setActive(isActive)}>Добавить</NavLink>
                    :
                    null
                }
                <NavLink to={'/search'} className={({ isActive }) => setActive(isActive)}>Поиск</NavLink>
            </div>
            <div className={styles.extMenu}>
                <NavLink to={userDataStore.isAuth ? '/me' : '/login'} className={({ isActive }) => styles.profileMenu + ' ' + setActive(isActive)}>
                    {userDataStore.isAuth ? <span>{userDataStore.user.login}</span> : null}
                    <img className={styles.userIcon} src="/user.png" alt="user profile"></img>
                </NavLink>
                <Link to={''} className={styles.logout} onClick={logoutFunc}>
                    {userDataStore.isAuth ? <img className={styles.logoutIcon} src="/logout.png" alt="logout"></img> : null}
                </Link>
            </div>
        </header>
    )
})

export default Navbar;