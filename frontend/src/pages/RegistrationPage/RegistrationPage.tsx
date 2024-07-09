import { useNavigate } from "react-router-dom";
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";
import { useAppSelector } from "../../hooks/reduxHooks";

export function RegistrationPage() {
    const { isAuth } = useAppSelector(state => state.user);
    const navigate = useNavigate();

    console.log(isAuth);

    if (isAuth) {
        navigate("/me");
    }

    return (
        <RegistrationForm />
    )
}