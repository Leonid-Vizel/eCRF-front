import { Form, Typography } from 'antd';
import { Input } from 'shared/ui/Input';
import { useAppDispatch } from 'store/redux-hook';
import { Button } from 'shared/ui/Button';
import { userLogin } from '../model/login';
import cls from './LoginForm.module.scss';

interface FieldType {
  login: string;
  password: string;
}

const { Title } = Typography;

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const onFinish = (values: FieldType) => {
    dispatch(userLogin(values));
  };

  return (
    <Form
      name="login"
      onFinish={onFinish}
      className={cls.LoginForm}
    >
      <Form.Item>
        <Title level={1}>Вход</Title>
      </Form.Item>
      <Form.Item<FieldType>
        name="login"
        rules={[{ required: true, message: 'Введите логин' }]}
      >
        <Input placeholder="Логин" />
      </Form.Item>
      <Form.Item<FieldType>
        name="password"
        rules={[{ required: true, message: 'Введите пароль' }]}
      >
        <Input placeholder="Пароль" type="password" />
      </Form.Item>
      <Form.Item>
        <Button className={cls.LoginForm} type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};
