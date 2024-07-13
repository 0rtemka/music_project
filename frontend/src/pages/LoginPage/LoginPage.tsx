import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { useAppSelector } from "../../hooks/reduxHooks";

export function LoginPage() {
    const { isAuth } = useAppSelector(state => state.user);
    const navigate = useNavigate();    

    if (isAuth) {
        navigate("/");
    }

    return (
        <LoginForm></LoginForm>
    )
}