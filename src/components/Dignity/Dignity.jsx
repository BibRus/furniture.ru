import style from './Dignity.module.css';
import Text from '../Text/Text';

export default function Dignity({icon, title, content}) {
    return (
        <div className={style.container}>
            <img className={style.icon} src={icon} alt="Icon"/>
            <div>
                <Text type='label'>{title}</Text>
                <Text>{content}</Text>
            </div>
        </div>
    );
}