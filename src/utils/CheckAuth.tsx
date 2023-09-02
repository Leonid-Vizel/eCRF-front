import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {cookiesData} from "./cookies/getCookies";

const CheckAuth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isAuth = cookiesData.cookieId || cookiesData.cookieName
        if(!isAuth) {
            navigate('/')
        }
    }, [])
};

export default CheckAuth;