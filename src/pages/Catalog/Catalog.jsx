import Header from '../../components/Header/Header';
import Dignity from '../../components/Dignity/Dignity';
import Footer from '../../components/Footer/Footer';

import style from './Catalog.module.css';

import service from '../../assets/images/icons/service.svg'
import delivery from '../../assets/images/icons/delivery.svg'
import guarantee from '../../assets/images/icons/guarantee.svg'
import CategoryMenu from "../../components/CategoryMenu/CategoryMenu";
import Text from "../../components/Text/Text";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Catalog() {
    const product = {
        id: 1024,
        image: 'http://localhost/images/products/0c8d0490aa29fea7.png',
        title: 'Кухонный Гарнитур Техас-NEW МДФ 2000 мм/Разные Цвета',
        price: 24399
    }

    return (
        <div className={style.container}>
            <Header/>
            <div className={style.dignities}>
                <Dignity icon={service}
                         title={'Всегда на связи'}
                         content={'Консультируем при покупке и вдальнейшем при использовании нашей мебели'}/>
                <Dignity icon={delivery}
                         title={'Доставка по всей России'}
                         content={'Отправим товар транспортной компанией или почтовым отправлением (оплата при получении)'}/>
                <Dignity icon={guarantee}
                         title={'Гарантия на всё'}
                         content={'Предоставляется гарантия сроком до 1 года со дня приобретения товара'}/>
            </div>

            <div className={style.body}>
                <div className={style.catalog}>
                    <div>
                        <Text type="title">Категории</Text>
                    </div>
                    <CategoryMenu/>
                </div>
                <div className={style.products}>
                    <ProductCard {...product}></ProductCard>
                    <ProductCard {...product}></ProductCard>
                    <ProductCard {...product}></ProductCard>
                    <ProductCard {...product}></ProductCard>
                    <ProductCard {...product}></ProductCard>
                    <ProductCard {...product}></ProductCard>
                    <ProductCard {...product}></ProductCard>
                    <ProductCard {...product}></ProductCard>
                    <ProductCard {...product}></ProductCard>
                </div>
            </div>
            <Footer/>
        </div>
    );
}