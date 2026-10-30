import Item from './item/Item';
import styles from './TaskList.module.css';
import { useState } from "react";

interface TaskListProps {
    title: string;  
    items: any[];
    onToggle?: (id: number, checked: boolean) => void;
}

function TaskList(props: TaskListProps){
    return (
        <div className={styles.TaskList}>
            <h2 className={styles.title}>{props.title}</h2>
            <div className={styles.items}>
                {
                    props.items.map(
                        (item) => (<Item key={item.id} id={item.id} title={item.title} checked={item.checked} onToggle={props.onToggle} />)
                    )
                }
            </div>
        </div>
    );  

}

export default TaskList;
export type { TaskListProps };