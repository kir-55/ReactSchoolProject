import styles from './List.module.css';

interface ListProps {
    title: string;  
    list: any[];
}

function List(props: ListProps){
    return (
        <div className={styles.List}>
            <h1 className={styles.Title}>{props.title}</h1>
            <div className={styles.items}>
                {props.list}
            </div>
        </div>
    );  
}

export default List;
export type { ListProps };