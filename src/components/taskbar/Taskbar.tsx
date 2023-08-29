import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Taskbar: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div className="my-4">
      <Button type="primary" href={`${pathname}/post`} icon={<PlusOutlined />}>
        Thêm mới
      </Button>
    </div>
  );
};

export default Taskbar;
