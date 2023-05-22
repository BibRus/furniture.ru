import style from './CartCard.module.css';

import Text from "../Text/Text";
import Counter from "../Counter/Counter";
import Button from "../Button/Button";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function CartCard({remove, product}) {
    return (
        <div className={style.container}>
                <div className={style.header}>
                    <Text type="bold">{product.title}</Text>
                </div>
                <div className={style.body}>
                    <img className={style.image} src={product.image} alt="Product"/>
                    <Text className={style.price} type="bold">{product.price}</Text>
                </div>
                <div className={style.footer}>
                    <Counter/>
                    <Button onClick={() => remove(product)}>Убрать</Button>
                </div>
        </div>
    );
}