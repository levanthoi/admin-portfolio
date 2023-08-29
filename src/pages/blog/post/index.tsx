import MyEditor from '@/components/MyEditor/MyEditor';
import Tags from '@/components/tags/Tags';
import { Input, Space } from 'antd';
import React from 'react';

const Post: React.FC = () => {
  return (
    <Space direction="vertical" className="w-full">
      <Input placeholder="Tiêu đề ..." />
      <Tags />
      <MyEditor />
    </Space>
  );
};

export default Post;
