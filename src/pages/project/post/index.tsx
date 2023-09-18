import MyUpload from '@/components/upload/MyUpload';
import { addProjects } from '@/services/project';
import { Button, Form, Input, message } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

const Post: React.FC = () => {
  const [form] = Form.useForm();
  const { Item } = Form;

  const images = useSelector((state: any) => state.upload.data);

  // handleSubmit
  const handleSubmit = async (values: any) => {
    // console.log(values);
    // console.log('images', images);
    const res = await addProjects({ ...values, images });
    if (res.success) message.success(res.message);
  };

  return (
    <Form form={form} initialValues={{}} onFinish={handleSubmit} layout="vertical">
      <Item name="name" label="Tiêu đề">
        <Input />
      </Item>
      <Item name="description" label="Mô tả">
        <Input.TextArea rows={5} />
      </Item>
      <Item valuePropName="fileList">
        <MyUpload name="images" />
      </Item>
      <Item>
        <Button type="primary" htmlType="submit">
          Gửi
        </Button>
      </Item>
    </Form>
  );
};

export default Post;
