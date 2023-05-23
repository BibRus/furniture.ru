import style from './LoginForm.module.css';

import {useForm} from "react-hook-form";
import Button from "../Button/Button";
import Text from "../Text/Text";

import AuthService from "../../services/AuthService";

export default function LoginForm({active, setActive}) {



    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        setActive(false);
        new AuthService().login(data);
    };


    return (
        <form className={style.container} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.header}>
                <Text type="title">Вход в аккаунт</Text>
                <Text type="bold">Сможете быстро оформлять заказы, использовать бонусы</Text>
            </div>
            <label className={style.label}>Логин</label>
            <input className={style.input} placeholder="Введите логин"
                {...register("login", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z0-9]+$/i
                })}
            />
            {errors?.login?.type === "required" && (
                <p className={style.error}>Это поле обязательно</p>
            )}
            {errors?.login?.type === "maxLength" && (
                <p className={style.error}>Длина не больше 20 символов</p>
            )}
            {errors?.login?.type === "pattern" && (
                <p className={style.error}>Только латинские символы</p>
            )}

            <label className={style.label}>Пароль</label>
            <input type="password" className={style.input} placeholder="Введите пароль"
                   {...register("password", {
                       required: true,
                       minLength: 4,
                       maxLength: 20,
                       pattern: /^[A-Za-z0-9]+$/i
                   })}
            />
            {errors?.password?.type === "required" && (
                <p className={style.error}>Это поле обязательно</p>
            )}
            {errors?.password?.type === "maxLength" && (
                <p className={style.error}>Длина не больше 20 символов</p>
            )}
            {errors?.password?.type === "minLength" && (
                <p className={style.error}>Длина не меньше 4 символов</p>
            )}
            {errors?.password?.type === "pattern" && (
                <p className={style.error}>Только латинские символы</p>
            )}
            <Button type="submit">Войти</Button>
            <div className={style.footer}>
                <Text>Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением</Text>
            </div>
        </form>
    );
}

