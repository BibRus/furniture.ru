import style from './Footer.module.css';
import Text from '../Text/Text';
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

import instagram from '../../assets/images/icons/instagram.svg'
import youtube from '../../assets/images/icons/youtube.svg'

export default function Footer({icon, title, content}) {
    return (
       <div className={style.container}>
           <div className={style.header}>
               <Logo/>
               <hr/>
           </div>
           <div className={style.body}>
              <div>
                  <div className={style.contacts}>
                      <Text type="title">ул. Орлова, 27А, Ульяновск, Ульяновская обл., 432071</Text>
                      <Text type="title">+7 (937) 757-32-02</Text>
                      <Text type="title">support@furniture.com</Text>
                  </div>
                  <div className={style.media}>
                      <Button>Whatsapp</Button>
                      <Button>Telegram</Button>
                  </div>
                  <div className={style.subscription}>
                      <img src={instagram} alt="Instagram"/>
                      <img src={youtube} alt="Youtube"/>
                      <Text>Подписывайтесь на нас в социальных сетях</Text>
                  </div>
              </div>
               <div className={style.clients}>
                   <Text type="label">Клиентам</Text>
                   <Text type="bold">Использование купонов и бонусов</Text>
                   <Text type="bold">Подарочные карты</Text>
                   <Text type="bold">3D-конструктор онлайн</Text>
                   <Text type="bold">Обратная связь</Text>
                   <Text type="bold">Кредитный калькулятор</Text>
                   <Text type="bold">Советы по выбору мебели</Text>
               </div>
               <div className={style.info}>
                   <Text type="label">Информация</Text>
                   <Text type="bold">Доставка и оплата</Text>
                   <Text type="bold">Гарантия</Text>
                   <Text type="bold">Служба контроля качества</Text>
                   <Text type="bold">Наше производство</Text>
                   <Text type="bold">О компании</Text>
                   <Text type="bold">Контакты</Text>
               </div>
           </div>
           <div className={style.footer}>
               <hr/>
               <div className={style.policy}>
                   <Text>Интернет магазин "Furniture" © 2023 Все права защищены</Text>
                   <Text>Политика конфиденциальности</Text>
               </div>
           </div>
       </div>
    );
}