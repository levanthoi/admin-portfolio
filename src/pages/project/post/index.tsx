import { PlusOutlined } from '@ant-design/icons';
import { Form, Input, Upload } from 'antd';
import React from 'react';

const Post: React.FC = () => {
  const [form] = Form.useForm();
  const { Item } = Form;

  // handleSubmit
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Form form={form} initialValues={{}} onFinish={handleSubmit} layout="vertical">
      <Item name="name" label="Tiêu đề">
        <Input disabled defaultValue="ass" />
      </Item>
      <Item valuePropName="file">
        <Upload listType="picture-card">{uploadButton}</Upload>
      </Item>
    </Form>
  );
};

export default Post;
