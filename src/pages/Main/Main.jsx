import Header from "../../components/Header/Header";
import Text from "../../components/Text/Text";
import Dignity from "../../components/Dignity/Dignity";
import Footer from "../../components/Footer/Footer";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

import style from './Main.module.css';

import service from '../../assets/images/icons/service.svg'
import experience from '../../assets/images/icons/experience.svg'
import settings from '../../assets/images/icons/settings.svg'
import delivery from '../../assets/images/icons/delivery.svg'
import rent from '../../assets/images/icons/rent.svg'
import guarantee from '../../assets/images/icons/guarantee.svg'

import kitchens from '../../assets/images/category/kitchens.png'
import wardrobes from '../../assets/images/category/wardrobes.png'
import sofas from '../../assets/images/category/sofas.png'
import chairs from '../../assets/images/category/chairs.png'
import beds from '../../assets/images/category/beds.png'
import other from '../../assets/images/category/other.png'




export default function Main() {
    return (
        <div className={style.container}>
            <Header/>
            <div className={style.slogan}>
                <Text type="title">Ваш рост – наш интерес, ведь тогда нам будет к чему стремиться</Text>
            </div>
            <div className={style.dignities}>
                <Dignity icon={service}
                         title={'Всегда на связи'}
                         content={'Консультируем при покупке и вдальнейшем при использовании нашей мебели'}/>
                <Dignity icon={experience}
                         title={'Опыт в сфере'}
                         content={'Большой опыт в создании мебели позволяет глубоко изучать проблемы и находить лучшие решения'}/>
                <Dignity icon={settings}
                         title={'Наличие запчастей'}
                         content={'Преимуществом производства своими силами является замена любых комплектующих и ремонт при поломке'}/>
                <Dignity icon={delivery}
                         title={'Доставка по всей России'}
                         content={'Отправим товар транспортной компанией или почтовым отправлением (оплата при получении)'}/>
                <Dignity icon={rent}
                         title={'Конструирование мебели'}
                         content={'На нашем сайте вы сможете собрать мебели вышей мечты'}/>
                <Dignity icon={guarantee}
                         title={'Гарантия на всё'}
                         content={'Предоставляется гарантия сроком до 1 года со дня приобретения товара'}/>
            </div>
            <div className={style.appeal}>
                <Text type="title">Кухни, шкафы, диваны и кресла</Text>
                <Text>Мы на связи всегда и разберемся с любыми вопросами возникшими при использовании нашей мебели</Text>
            </div>
            <div className={style.categories}>
                <CategoryCard title={'Кухни'} image={kitchens}/>
                <CategoryCard title={'Шкафы'} image={wardrobes}/>
                <CategoryCard title={'Диваны'} image={sofas}/>
                <CategoryCard title={'Кресла'} image={chairs}/>
                <CategoryCard title={'Кровати'} image={beds}/>
                <CategoryCard title={'Другое'} image={other}/>
            </div>
            <Footer/>
        </div>
    );
}