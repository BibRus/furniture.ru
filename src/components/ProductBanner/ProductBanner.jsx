import style from './ProductBanner.module.css';
import Button from "../Button/Button";
import Text from "../Text/Text";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function ProductBanner({product, active, setActive}) {
    const [cart, setCart] = useLocalStorage('cart');

    function add(product) {
        setCart([...cart, product]);
    }

    return (
        <div className={style.container}>
            <div className={style.title}>
                <Text type="title">{product.title}</Text>
            </div>
            <div className={style.content}>
                <img className={style.image} src={product.image} alt="Product"/>
                <Text type="title">{product.price}</Text>
            </div>
            <Button onClick={() => {
                setActive(true);
                add(product);
            }}>Добавить в корзину</Button>
            <div className={style.support}>
                <Text>Связаться со специалистом</Text>
                <Text>+7 (963) 656-66-26</Text>
            </div>
        </div>
    );
}