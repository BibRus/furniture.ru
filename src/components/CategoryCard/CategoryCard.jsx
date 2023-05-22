import style from "./CategoryCard.module.css";
import Text from "../Text/Text";

export default function CategoryCard({title, image, ...attributes}) {
    return (
        <div className={style.container} {...attributes}>
            <Text type="label">{title}</Text>
            <img className={style.image} src={image} alt="Category"/>
        </div>
    );
}