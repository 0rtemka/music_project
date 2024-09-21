import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { observer } from "mobx-react-lite";
import { userDataStore } from "../../store/mobx/userDataStore";

export const LoginPage = observer(() => {
    
    const navigate = useNavigate();    

    if (userDataStore.isAuth) {
        navigate("/");
    }

    return (
        <LoginForm></LoginForm>
    )
})