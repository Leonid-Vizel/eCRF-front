import React, {useEffect, useState} from 'react';
import NavbarAuth from "../../components/navbar_auth/NavbarAuth";
import {Navigate, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/redux-hook";
import { authLogin } from "../../store/authSlice/authSlice";
import Cookies from "js-cookie";
import './login.scss';
import {authSelector} from "../../store/authSlice/authSelector";

export function defaultRedirect(href:string) {
    window.location.href = href;
  }

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {status, data} = useAppSelector(authSelector)

    //проверка на авторизацию
    // useEffect(() => {
    //     const cookieName = Cookies.get('token_name');
    //     const cookieCenterId = Cookies.get('token_centerId');
    //     const cookieId = Cookies.get('token_id');
    //     const cookieRole = Cookies.get('token_role');
    //
    //     if (cookieName && cookieCenterId && cookieId && cookieRole) {
    //         navigate('/main/filter=0');
    //     }
    // }, [navigate]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await dispatch<any>(authLogin({ email, password }))
    };

    if (data) {
       defaultRedirect('https://ecrf.bioequivalencetrials.ru/api/net/Protocols');
        window.location.reload()
    }

    return (
        <div className='login'>
            <NavbarAuth />
            <form className="login-block">
                <span>Вход</span>
                <input
                    type="email"
                    placeholder='Логин'
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Пароль'
                    onChange={e => setPassword(e.target.value)}
                />
                <button onClick={(e: any) => handleSubmit(e)}>Войти</button>
                {status === 'error' && <div className="error-message">Неверный имейл или пароль. Пожалуйста, попробуйте снова.</div>}
            </form>
            <div className="login-logo">
                <img src="/logo.png" alt="" />
                <span>Developed and designed by Nabla Lab.</span>
            </div>
        </div>
    );
};

export default Login;
