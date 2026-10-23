import styles from './List.module.css';
import { useState } from "react";

interface ListProps {
    title: string;  
    list: any[];
}

function List(props: ListProps){
    const [isOpen, setIsOpen] = useState(true);

    if (isOpen) {
        return (
            <div className={styles.List}>
                <button onClick={() => setIsOpen(false)}><h2 className={styles.Title}>{props.title} </h2>⏷</button>
                <div className={styles.items}>
                    {props.list}
                </div>
            </div>
        );  
    } else {
        return (
            <div className={styles.List}>
                <button onClick={() => setIsOpen(true)}><h2 className={styles.Title}>{props.title} </h2>⏵</button>
            </div>
        );  
    }
}

export default List;
export type { ListProps };