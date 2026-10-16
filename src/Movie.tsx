import styles from './Movie.module.css';

interface MovieProps {
    image: string;
    title: string;
    year: string;
}

function Movie(props: MovieProps){
    return (
    <div className={styles.Movie}>
        <img src={props.image} alt={props.title} height="200" width="150" />
        <div className={styles.title}>{props.title}</div>
        <div className={styles.info}>
            <small className={styles.year}>{props.year}</small>
        </div>
    </div>
    );  
}

export default Movie;
export type { MovieProps };