import { Link } from 'react-router-dom'
import styles from './RegistrationForm.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuth, setUser } from '../../store/reducers/userReducer';
import AuthService from '../../http/AuthService';
import { AuthError } from '../AuthError/AuthError';

export function RegistrationForm() {
    const [userLogin, setUserLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [errMessage, setErrorMessage] = useState<string>("");
    const dispatch = useDispatch();

    const registerFunc = () => {
        if (password !== passwordConfirm) {
            setErrorMessage("Пароли не совпадают");
            return;
        }
        AuthService.registration(userLogin, password)
            .then((res) => {
                localStorage.setItem("token", res.data.access_token);
                dispatch(setAuth(true));
                dispatch(setUser(res.data.user));
            })
            .catch((err) => {
                setErrorMessage(err.response.data.message);
            });
    }

    return (
        <div className={styles.registrationForm}>
            <div className={styles.banner}>
                <span className={styles.bannerHeader}>Создайте аккаунт</span>
                <span className={styles.bannerText}>Почувствуйте себя настоящим музыкальным критиком</span>
            </div>
            <div className={styles.formDiv}>
                <span className={styles.formHeader}>Регистрация</span>
                <form className={styles.formBody}>
                    {errMessage ?
                        <AuthError message={errMessage} /> :
                        null
                    }
                    <input type="text" placeholder="Логин" value={userLogin} onChange={e => setUserLogin(e.target.value)}></input>
                    <input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)}></input>
                    <input type="password" placeholder="Подтверждения пароля" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)}></input>
                    <button className={styles.registrationButton} onClick={(e) => {
                        e.preventDefault();
                        registerFunc();
                    }
                    }>Создать</button>
                    <span className={styles.formFooter}>Уже есть аккаунт?
                        <Link to='/login' className={styles.footerColor}> Войдите</Link>
                    </span>
                </form>
            </div>
        </div>
    )
}