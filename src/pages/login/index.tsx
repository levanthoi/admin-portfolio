import { login } from '@/services/auth';
import { IUser } from '@/types/user.type';
import { setCookie } from '@/utils/cookie';
import { Button, Card, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const naviagate = useNavigate();
  const [form] = Form.useForm();
  const { Item } = Form;

  const onSubmit = async (values: IUser) => {
    const res = await login(values);
    if (res.success) {
      setCookie(res.data);
      naviagate('/project');
    }
  };
  return (
    <div className="bg-[url('/background.png')] relative h-screen w-full bg-no-repeat bg-cover overflow-hidden">
      <div className="flex items-center justify-center h-full">
        <Card className="shadow-md shadow-gray-500" bodyStyle={{ textAlign: 'center' }}>
          <b className="text-2xl text-purple-700 text-center">Đăng nhập</b>
          <Form form={form} name="login" initialValues={{}} onFinish={onSubmit} className="mt-8">
            <Item name="email">
              <Input placeholder="Tài khoản: username" />
            </Item>
            <Item name="password">
              <Input.Password placeholder="Mật khẩu: password" />
            </Item>
            <Item>
              <Button type="primary" className="w-full" htmlType="submit">
                Đăng nhập
              </Button>
            </Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
