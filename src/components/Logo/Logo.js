import {useNavigate} from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import style from './Logo.module.css';

function Logo({...attributes}) {
    const navigate = useNavigate()
    return (
        <div className={style.container} {...attributes} onClick={() => navigate('/')}>
            <img src={logo} alt="Furniture" className={style.image} />
            <h1 className={style.text}>Furniture</h1>
        </div>
    );
}

export default Logo;