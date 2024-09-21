import { observer } from "mobx-react-lite";
import { AddArtistForm } from "../../components/AddArtistForm/AddArtistForm";
import { AddSongForm } from "../../components/AddSongForm/AddSongForm";
import { userDataStore } from "../../store/mobx/userDataStore";
import ErrorPage from "../NotFoundPage/NotFoundPage";

const AddContentPage = observer(() => {

    if (userDataStore.isAuth && userDataStore.user && userDataStore.user.roles.includes("ADMIN")) {
        return (
            <div style={{marginTop: "100px", display: "flex", flexDirection: "column", gap: "30px"}}>
                <AddArtistForm />
                <AddSongForm />
            </div>
        )
    }    

    return (
        <ErrorPage />
    )
})

export default AddContentPage;