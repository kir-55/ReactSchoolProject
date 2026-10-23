import styles from './Book.module.css';

interface BookProps {
    image: string;
    title: string;
    year: string;
    rating: number;
}

function Book(props: BookProps){
    return (
    <div className={styles.Book}>
        <img className="card-img-top" src={props.image} alt={props.title} height="200" width="150" />
        <div className="card-body">
            <h5 className="card-title">{props.title}{props.rating >= 8 && <span className={styles.recommended}>Klasyka</span>}</h5>
            <p className="card-text">
                <small className={styles.year}>{props.year}</small>
                <div className={styles.rating}>Ocena: {props.rating}</div>
            </p>
        </div>
    </div>
    );  
}

export default Book;
export type { BookProps };