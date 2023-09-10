import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.scss';
import { LoginForm } from 'features/authentication/login';
import { useAuth } from 'app/providers/AccessProviders/lib/AuthContext';
// import { defaultRedirect } from 'shared/lib/defaultRedirect';
import { Footer } from 'shared/ui/Footer';
import NavbarAuth from '../../components/navbar_auth/NavbarAuth';

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
    <div className="login">
      <NavbarAuth />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
