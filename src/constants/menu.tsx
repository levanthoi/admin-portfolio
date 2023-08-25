import { MenuProps } from 'antd';
import { AppstoreAddOutlined, FileDoneOutlined, ProjectOutlined } from '@ant-design/icons';
// export interface IMenu{
//     key: React.Key;
//     icon?: React.ReactNode;
//     label: React.ReactNode;
//     children?: IMenu[];
//     type?: 'group'
// }

type MenuItem = Required<MenuProps>['items'][number];

const menus: MenuItem[] = [
  {
    key: '',
    label: 'Dashboard',
    icon: <AppstoreAddOutlined />,
  },
  {
    key: 'blog',
    label: 'Blog',
    icon: <FileDoneOutlined />,
  },
  {
    key: 'project',
    label: 'Project',
    icon: <ProjectOutlined />,
  },
];

export default menus;
