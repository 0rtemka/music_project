import { Link, NavLink } from "react-router-dom";
import styles from './Navbar.module.css'
import { useAppSelector } from "../../hooks/reduxHooks";
import AuthService from "../../http/AuthService";
import { useDispatch } from "react-redux";
import { setAuth, setUser } from "../../store/reducers/userReducer";
import { User } from "../../models/models";

const setActive = (isActive: boolean) => isActive ? styles.active : '';

export default function Navbar() {
    const { user, isAuth } = useAppSelector(state => state.user)
    const dispatch = useDispatch();

    const logoutFunc = () => [
        AuthService.logout().then(() => {
            localStorage.removeItem("token");
            dispatch(setAuth(false));
            dispatch(setUser({} as User))
        })
    ]

    return (
        <header className={styles.navbar}>
            <div className={styles.mainMenu}>
                <NavLink to={'/'} className={({ isActive }) => setActive(isActive)}>Главная</NavLink>
                {user.roles && user.roles.includes("ADMIN") ?
                    <NavLink to={'/addData'} className={({ isActive }) => setActive(isActive)}>Добавить</NavLink>
                    :
                    null
                }
                <NavLink to={'/search'} className={({ isActive }) => setActive(isActive)}>Поиск</NavLink>
            </div>
            <div className={styles.extMenu}>
                <NavLink to={isAuth ? '/me' : '/login'} className={({ isActive }) => styles.profileMenu + ' ' + setActive(isActive)}>
                    {isAuth ? <span>{user.login}</span> : null}
                    <img className={styles.userIcon} src="/user.png" alt="user profile"></img>
                </NavLink>
                <Link to={''} className={styles.logout} onClick={logoutFunc}>
                    {isAuth ? <img className={styles.logoutIcon} src="/logout.png" alt="logout"></img> : null}
                </Link>
            </div>
        </header>
    )
}