import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Button from "../Button/Button";

import style from './Header.module.css';

import {useState} from 'react';
import Modal from "../Modal/Modal";
import {useNavigate} from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";

import cartIcon from '../../assets/images/icons/cart.svg'

import Cart from "../Cart/Cart";
import useLocalStorage from "../../hooks/useLocalStorage";

function Header() {
    const navigate = useNavigate()
    const [openLoginForm, setOpenLoginForm] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    const products = [
        {
            id: 1,
            image: 'https://magazin-mebeli-spb.ru/images/detailed/568/oliva3.0_vanil.jpg',
            title: 'Кухонный Гарнитур Техас-NEW МДФ 2000 мм/Разные Цвета',
            price: '24 399'
        },
        {
            id: 2,
            image: 'https://cdn.leroymerlin.ru/lmru/image/upload/dpr_1.0,f_auto,q_auto,w_240,h_240,c_pad,b_white,d_photoiscoming.png/v1675405932/lmcode/SAqJkJ9M-EeIgiM0Qox-IA/90648469.jpg',
            title: 'Комод Моби Нарвик 16.218 6 ящиков 79.9х48х122.9 см ЛДСП цвет белый',
            price: '8 583'
        },
    ]

    return (
        <div className={style.container}>
            <div className={style.menu}>
                <Logo/>
                <Menu/>
            </div>
            <div className={style.navigation}>
                <Button variant="nav" onClick={() => navigate('/catalog')}>Каталог</Button>
                <Button variant="nav">Наше производство</Button>
                <Button variant="nav">О компании</Button>
                <Button variant="nav">Контакты</Button>
                <Button onClick={() => setOpenLoginForm(true)}>Войти</Button>
                <Button variant="icon" icon={cartIcon} onClick={() => {
                    setOpenCart(true)
                }}/>
            </div>
            <Modal open={openLoginForm} setOpen={setOpenLoginForm}>
                <LoginForm active={openLoginForm} setActive={setOpenLoginForm}/>
            </Modal>
            <Modal variant="full" open={openCart} setOpen={setOpenCart}>
                <Cart products={products}/>
            </Modal>
        </div>

    );
}

export default Header;