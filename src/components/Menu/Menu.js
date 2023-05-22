import style from './Menu.module.css';
import MenuItem from "../MenuItem/MenuItem";

export default function Menu() {
    return (
        <div className={style.container}>
            <MenuItem title="support@furniture.com"></MenuItem>
            <MenuItem title="+7 (937) 757-32-02"></MenuItem>
            <MenuItem title="Доставка и оплата"></MenuItem>
            <MenuItem title="Гарантия"></MenuItem>
        </div>
    );
}