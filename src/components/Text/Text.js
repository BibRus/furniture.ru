import style from "./Text.module.css";

export default function Text({type = 'text', children, ...attributes}) {
    return (
        <p className={style[type]} {...attributes}>{children}</p>
    );
}