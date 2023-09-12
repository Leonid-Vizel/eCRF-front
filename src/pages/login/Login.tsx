import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginForm } from 'features/authentication/login';
import { useAuth } from 'app/providers/AccessProviders/lib/AuthContext';
import cls from './Login.module.scss';
// import { defaultRedirect } from 'shared/lib/defaultRedirect';

const Login = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      // defaultRedirect('api/net/Protocols');
      navigate('/document/1');
    }
  }, [isAuth, navigate]);

  return (
    <div className={cls.Login}>
      <LoginForm />
    </div>
  );
};

export default Login;
