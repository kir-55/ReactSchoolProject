import { useState } from 'react';
import styles from './Item.module.css';

interface ItemProps {
    id: number;
    title: string;
    key: number;
    checked: boolean;
    onToggle?: (id: number, checked: boolean) => void;
}

function Item(props: ItemProps){
    const [checked, setChecked] = useState(props.checked);

    function toggle(){
        console.log(`test`);
        setChecked(!checked); 
        console.log(`Item ${props.id} is now ${checked ? "checked" : "unchecked"}`);
        props.onToggle?.(props.id, !checked);
       
    }

    return (
        <div className={styles.item}>
            <button onClick={toggle}>{props.title + (checked ? "✅" : "❌")}</button>
        </div>
    );  
}

export default Item;
export type { ItemProps };