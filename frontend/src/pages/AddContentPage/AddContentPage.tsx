import { AddArtistForm } from "../../components/AddArtistForm/AddArtistForm";
import { AddSongForm } from "../../components/AddSongForm/AddSongForm";

export default function AddContentPage() {
    return (
        <div style={{marginTop: "100px", display: "flex", flexDirection: "column", gap: "30px"}}>
            <AddArtistForm />
            <AddSongForm />
        </div>
    )
}