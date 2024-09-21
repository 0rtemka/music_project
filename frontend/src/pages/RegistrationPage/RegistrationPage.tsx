import { useNavigate } from "react-router-dom";
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";
import { observer } from "mobx-react-lite";
import { userDataStore } from "../../store/mobx/userDataStore";

const RegistrationPage = observer(() => {
    const navigate = useNavigate();

    if (userDataStore.isAuth) {
        navigate("/");
    }

    return (
        <RegistrationForm />
    )
})

export default RegistrationPage;