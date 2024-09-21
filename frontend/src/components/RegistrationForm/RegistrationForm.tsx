import { Link } from 'react-router-dom'
import styles from './RegistrationForm.module.css'
import { useState } from 'react';
import AuthService from '../../services/AuthService';
import { AuthError } from '../AuthError/AuthError';
import { userDataStore } from '../../store/mobx/userDataStore';
import { observer } from 'mobx-react-lite';

export const RegistrationForm = observer(() => {
    const [userLogin, setUserLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [errMessage, setErrorMessage] = useState<string>("");

    const registerFunc = () => {
        if (password !== passwordConfirm) {
            setErrorMessage("Пароли не совпадают");
            return;
        }
        AuthService.registration(userLogin, password)
            .then((res) => {
                localStorage.setItem("token", res.data.access_token);
                userDataStore.setAuth(true);
                userDataStore.setUser(res.data.user);
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
                <form className={styles.formBody} onSubmit={(e) => {
                    e.preventDefault();
                    registerFunc();
                }
                }>
                    {errMessage ?
                        <AuthError message={errMessage} /> :
                        null
                    }
                    <input required type="text" placeholder="Логин" value={userLogin} onChange={e => setUserLogin(e.target.value)}></input>
                    <input required type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)}></input>
                    <input required type="password" placeholder="Подтверждения пароля" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)}></input>
                    <button className={styles.registrationButton}>Создать</button>
                    <span className={styles.formFooter}>Уже есть аккаунт?
                        <Link to='/login' className={styles.footerColor}> Войдите</Link>
                    </span>
                </form>
            </div>
        </div>
    )
})