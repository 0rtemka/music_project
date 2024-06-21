import SongCard from "../../components/SongCard/SongCard";

const song = {title: 'deepfake', artist: {name: 'brakence'}, year: 2022, cover: '/images/hypochondriac.jpg', 
    rating: {rating: 86, relevance: 1, structure: 2, realization: 3, lyrics: 4, beat: 5}}

export default function SongPage() {
    return (
        <SongCard song={song}></SongCard>
    )
}