import style from './ProductCard.module.css';
import Button from "../Button/Button";
import Text from "../Text/Text";

import {useNavigate} from 'react-router-dom';

export default function ProductCard(product) {
    const navigate = useNavigate()
    return (
        <div className={style.container}>
            <img className={style.image} src={product.image} alt="Product"/>
            <Text type="bold">{product.title}</Text>
            <Text type="bold">{product.price}</Text>
            <Button  onClick={() => navigate(`/products/${product.id}`)}>Купить</Button>
        </div>
    );
}
