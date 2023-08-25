import menus from '@/constants/menu';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const MenuLayout = () => {
  const navigate = useNavigate();
  const handleClick = (e: any) => {
    console.log(e);

    navigate(`/${e.key}`);
  };
  return <Menu mode="inline" theme="dark" onClick={handleClick} items={menus} />;
};

export default MenuLayout;
