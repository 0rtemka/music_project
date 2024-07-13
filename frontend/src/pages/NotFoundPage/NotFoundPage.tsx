import { ErrorCard } from "../../components/ErrorCard/ErrorCard";

export default function ErrorPage() {
    return (
        <div style={{marginTop: "100px", display: "flex", justifyContent: "center"}}>
            <ErrorCard text="По вашему запросу ничего не найдено :(" />
        </div>
    )
}