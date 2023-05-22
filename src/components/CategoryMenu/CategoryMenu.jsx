import style from './CategoryMenu.module.css';
import Button from "../Button/Button";

export default function CategoryMenu() {
    return (
        <div className={style.container}>
            <Button variant="menu">Вся категории</Button>
            <Button variant="menu">Скидки</Button>
            <Button variant="menu">Кухни</Button>
            <Button variant="menu">Спальни</Button>
            <Button variant="menu">Шкафы</Button>
        </div>
    );
}