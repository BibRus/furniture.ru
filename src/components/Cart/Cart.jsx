import style from './Cart.module.css';

import Text from "../Text/Text";
import Button from "../Button/Button";
import CartCard from "../CartCard/CartCard";

import useLocalStorage from "../../hooks/useLocalStorage";
import {useEffect} from "react";

export default function Cart({products, actions}) {

    const [cart, setCart] = useLocalStorage('cart', [...products]);

    useEffect(() => {
        setCart(cart);
    }, []);

    function add(product) {
        setCart([...cart, product]);
    }

    function remove(product) {
        setCart(cart.filter(item => item.id !== product.id));
    }

    return (
        <div className={style.container}>
            <div className={style.header}>
                <Text type="title">Ваш заказ</Text>
            </div>
            <div className={style.body}>
                {cart.map(product => <CartCard key={product.id} remove={remove} product={product}/>)}
            </div>
            <div className={style.footer}>
                <Button>Оформить заказ</Button>
                <Text type="bold">Итого {cart.reduce((total, product) => Number(total) + Number(product.price), 0)}</Text>
            </div>
        </div>
    );
}