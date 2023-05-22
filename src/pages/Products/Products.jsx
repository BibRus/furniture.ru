import style from './Products.module.css';
import ProductBanner from "../../components/ProductBanner/ProductBanner";
import {useNavigate, useParams} from "react-router-dom";
import Header from "../../components/Header/Header";
import Text from "../../components/Text/Text";
import Dignity from "../../components/Dignity/Dignity";
import service from "../../assets/images/icons/service.svg";
import delivery from "../../assets/images/icons/delivery.svg";
import guarantee from "../../assets/images/icons/guarantee.svg";
import {useState} from "react";
import Modal from "../../components/Modal/Modal";
import LoginForm from "../../components/LoginForm/LoginForm";
import Cart from "../../components/Cart/Cart";


export default function Products() {

    const navigate = useNavigate()
    const [openCart , setOpenCart] = useState(false);

    const params = useParams();
    const product = {
        image: 'https://magazin-mebeli-spb.ru/images/detailed/568/oliva3.0_vanil.jpg',
        title: 'Кухонный Гарнитур Техас-NEW МДФ 2000 мм/Разные Цвета',
        price: '24 399 ₽'
    }
    return (
        <>
            <div className={style.header}>
                <Header/>
                <div className={style.container}>
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
                    <div className={style.info}>
                        <div className={style.product}>
                            <ProductBanner active={openCart} setActive={setOpenCart} product={product}/>
                        </div>
                        <div className={style.description}>
                            <Text type="title">Описание {params.productId}</Text>
                            <Text>
                                Крыши домов дрожат под тяжестью дней,
                                Небесный пастух пасет облака,
                                Город стреляет в ночь дробью огней,
                                Но ночь сильней, ее власть велика.

                                Тем, кто ложится спать -
                                Спокойного сна.
                                Спокойная ночь.

                                Я ждал это время, и вот это время пришло,
                                Те, кто молчал, перестали молчать.
                                Те, кому нечего ждать, садятся в седло,
                                Их не догнать, уже не догнать.

                                Тем, кто ложится спать -
                                Спокойного сна.
                                Спокойная ночь.

                                Соседи приходят, им слышится стук копыт,
                                Мешают уснуть, тревожат их сон.
                                Те, кому нечего ждать, отправляются в путь
                                Те, кто спасен, те, кто спасен.

                                Тем, кто ложится спать -
                                Спокойного сна.
                                Спокойная ночь.
                            </Text>
                        </div>
                    </div>
                    <Modal variant="full" open={openCart} setOpen={setOpenCart}>
                        <Cart product={product}/>
                    </Modal>
                </div>
            </div>
        </>
    );
}