import { Link, useNavigate } from "react-router-dom"
import styles from "./LoginForm.module.css"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { setAuth, setUser } from "../../store/reducers/userReducer";
import AuthService from "../../http/AuthService";
import { AuthError } from "../AuthError/AuthError";

export function LoginForm() {
    const [userLogin, setUserLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errMessage, setErrMessage] = useState<string>("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginFunc = () => {
        setErrMessage("");
        AuthService.login(userLogin, password)
            .then((res) => {
                localStorage.setItem("token", res.data.access_token);
                dispatch(setAuth(true));
                dispatch(setUser(res.data.user));
                navigate("/")
            }).catch((err) => {
                setErrMessage(err.response.data.message);
            })
    };


    return (
        <div className={styles.loginForm}>
            <div className={styles.banner}>
                <span className={styles.bannerHeader}>Войдите в аккаунт</span>
                <span className={styles.bannerText}>Почувствуйте себя настоящим музыкальным критиком</span>
            </div>
            <div className={styles.formDiv}>
                <span className={styles.formHeader}>ВХОД</span>
                <form className={styles.formBody}>
                    {errMessage ?
                        <AuthError message={errMessage} /> :
                        null
                    }
                    <input type="text" placeholder="Логин" value={userLogin} onChange={e => setUserLogin(e.target.value)}></input>
                    <input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)}></input>
                    <button className={styles.loginButton} onClick={(e) => {
                        e.preventDefault();
                        loginFunc();
                    }
                    }>Войти</button>
                    <span className={styles.formFooter}>Нет аккаунта?
                        <Link to='/registration' className={styles.footerColor}> Зарегистрируйтесь</Link>
                    </span>
                </form>
            </div>
        </div>
    )
}