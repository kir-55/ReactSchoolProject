import styles from './Movie.module.css';

interface MovieProps {
    image: string;
    title: string;
    year: string;
    rating: number;
}

function Movie(props: MovieProps){
    return (
    <div className="card-body" >
        <img className="card-img-top" src={props.image} alt={props.title} height="200" width="150" />
        <div className="card-title">{props.title}{props.rating >= 8 && <div className={styles.recommended}>Recomendowane</div>}</div>
        
        <div className={styles.info}>
            <small className={styles.year}>{props.year}</small>
            <div className={styles.rating}>Ocena: {props.rating}</div>
        </div>
    </div>
    );  
}

export default Movie;
export type { MovieProps };