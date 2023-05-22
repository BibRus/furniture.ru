import style from './MenuItem.module.css';

function MenuItem(props) {
    return (
        <a href={props.link} target="_blank" className={style.text}>{props.title}</a>
    );
}

export default MenuItem;