import style from './Counter.module.css';

import Button from '../Button/Button';
import {useState} from 'react';

export default function Counter({handle, min= 0, max= 99}) {
    let [count, setCount] = useState(min);
    return (
        <div className={style.container}>
            <Button onClick={() => {
                if (count >= min) {
                    setCount(count--)
                }
            }}>-</Button>
            <Button>{count}</Button>
            <Button onClick={() => {
                if (count <= max) {
                    setCount(count++)
                }
            }}>+</Button>
        </div>
    );
}