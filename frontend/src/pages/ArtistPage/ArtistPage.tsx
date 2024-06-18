import ArtistCard, { ArtistProps } from "../../components/ArtistCard/ArtistCard";
import { CardProps } from "../../components/Card/Card";
import CardsScroll from "../../components/CardsScroll/CardsScroll";

const artist: ArtistProps = { name: 'brakence', profile_cover: '/images/brakence.jpg', rating: 81 }

const songs: CardProps[] = [
    { img: '/images/hypochondriac.jpg', alt: 'song cover', artist: 'brakence', song: 'hypochondriac', rating: 78, artist_slug: 'brakence' },
    { img: '/images/astrid.jpg', alt: 'song cover', artist: 'glaive', song: 'astrid', rating: 78, artist_slug: 'glaive' },
    { img: '/images/narcotic.jpg', alt: 'song cover', artist: '9mice', song: 'narcotic', rating: 78, artist_slug: '9mice' },
    { img: '/images/alldogsgotoheaven.jpg', alt: 'song cover', artist: 'glaive', song: 'synopsis', rating: 78, artist_slug: 'glaive' },
];

export default function ArtistPage() {
    return (
        <>
            <ArtistCard name={artist.name} profile_cover={artist.profile_cover} rating={artist.rating} />
            <CardsScroll arr={songs} title='Популярное'></CardsScroll>
        </>
    )
}