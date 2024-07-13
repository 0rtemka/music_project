import { AddArtistForm } from "../../components/AddArtistForm/AddArtistForm";
import { AddSongForm } from "../../components/AddSongForm/AddSongForm";
import { useAppSelector } from "../../hooks/reduxHooks";
import ErrorPage from "../NotFoundPage/NotFoundPage";

export default function AddContentPage() {
    const {user, isAuth} = useAppSelector(state => state.user);
    
    if (isAuth && user && user.roles.includes("ADMIN")) {
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
}