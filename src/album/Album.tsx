import styles from './Album.module.css';

interface AlbumProps {
    image: string;
    title: string;
    year: string;
    rating: number;
    songs: {
        title: string;
        duration: string;
    }[];
}

function Album(props: AlbumProps){
    return (
    <div className={styles.Album}>
        <img className="card-img-top" src={props.image} alt={props.title} height="200" width="150" />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
                <small className={styles.year}>{props.year}</small>
                <div className={styles.rating}>Ocena: {props.rating}</div>
            </p>
        </div>
        {
        props.songs.length > 0 ?
            <div className={styles.songs}>
                <h3>Piosenki:</h3>
                <ul>
                    {props.songs.map((song, index) => (
                        <li key={index}>
                            {song.title} - {song.duration}
                        </li>
                    ))}
                </ul>
            </div>
            : <p>Brak utworów</p>
        }
        
    </div>
    );  
}

export default Album;
export type { AlbumProps };