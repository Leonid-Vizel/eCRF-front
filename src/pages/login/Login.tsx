import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from 'features/authentication/login';
import { useAuth } from 'app/providers/AccessProviders/lib/AuthContext';
import { defaultRedirect } from 'shared/lib/defaultRedirect';
import cls from './Login.module.scss';

const Login = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      if (!__IS_LOCAL__) defaultRedirect('api/net/Protocols');
      if (__IS_LOCAL__) navigate('/document/1');
    }
  }, [isAuth, navigate]);

  return (
    <div className={cls.Login}>
      <LoginForm />
    </div>
  );
};

export default Login;
