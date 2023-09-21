import { PlusOutlined, ReloadOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
  fetchList: () => Promise<void>;
}

const Taskbar: React.FC<Props> = ({ fetchList }) => {
  const { pathname } = useLocation();
  const handleClickLoad = () => {
    fetchList();
  };
  return (
    <Space className="my-4">
      <Button
        type="primary"
        icon={<ReloadOutlined />}
        onClick={handleClickLoad}
        className="bg-green-600 hover:!bg-green-500"
      />
      <Button type="primary" href={`${pathname}/post`} icon={<PlusOutlined />}>
        Thêm mới
      </Button>
    </Space>
  );
};

export default Taskbar;
