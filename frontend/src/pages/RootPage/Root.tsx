import { CardProps } from '../../components/Card/Card';
import CardsScroll from '../../components/CardsScroll/CardsScroll';
import styles from './Root.module.css';

const songs: CardProps[] = [
    {img: 'images/hypochondriac.jpg', alt: 'song cover', artist: 'brakence', song: 'hypochondriac', rating: 78, artist_slug: 'brakence'},
    {img: 'images/astrid.jpg', alt: 'song cover', artist: 'glaive', song: 'astrid', rating: 78, artist_slug: 'glaive'},
    {img: 'images/narcotic.jpg', alt: 'song cover', artist: '9mice', song: 'narcotic', rating: 78, artist_slug: '9mice'},
    {img: 'images/alldogsgotoheaven.jpg', alt: 'song cover', artist: 'glaive', song: 'synopsis', rating: 78, artist_slug: 'glaive'},
    {img: 'images/hypochondriac.jpg', alt: 'song cover', artist: 'brakence', song: 'hypochondriac', rating: 78, artist_slug: 'brakence'},
    {img: 'images/astrid.jpg', alt: 'song cover', artist: 'glaive', song: 'astrid', rating: 78, artist_slug: 'glaive'},
    {img: 'images/narcotic.jpg', alt: 'song cover', artist: '9mice', song: 'narcotic', rating: 78, artist_slug: '9mice'},
    {img: 'images/alldogsgotoheaven.jpg', alt: 'song cover', artist: 'glaive', song: 'synopsis', rating: 78, artist_slug: 'glaive'},
    {img: 'images/hypochondriac.jpg', alt: 'song cover', artist: 'brakence', song: 'hypochondriac', rating: 78, artist_slug: 'brakence'},
    {img: 'images/astrid.jpg', alt: 'song cover', artist: 'glaive', song: 'astrid', rating: 78, artist_slug: 'glaive'},
    {img: 'images/narcotic.jpg', alt: 'song cover', artist: '9mice', song: 'narcotic', rating: 78, artist_slug: '9mice'},
    {img: 'images/alldogsgotoheaven.jpg', alt: 'song cover', artist: 'glaive', song: 'synopsis', rating: 78, artist_slug: 'glaive'},
];

export default function Root() {
    return (
        <div className={styles.root}>
            <CardsScroll arr={songs} title='Новинки'></CardsScroll>
        </div>
    )
}