import { IProject } from '@/types/project.type';
import { App, Button, Form, Input } from 'antd';
import React from 'react';
import MyUpload from '../upload/MyUpload';
import { addProjects, updateProject } from '@/services/project';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface Props {
  project: IProject | any;
}

const FormProject: React.FC<Props> = ({ project }) => {
  const [form] = Form.useForm();
  const { Item } = Form;
  const navigate = useNavigate();

  const { message } = App.useApp();

  const images = useSelector((state: any) => state.upload.data);

  // handleSubmit
  const handleSubmit = async (values: any) => {
    try {
      //   const addItem = { ...values, images };
      let res;
      if (project) res = await updateProject(project._id, { ...project, ...values, images });
      else res = await addProjects({ ...values, images });
      message.success(res.message);
      navigate('/project');
    } catch (err: any) {
      message.error(err);
    }
  };

  React.useEffect(() => {
    if (project) form.setFieldsValue(project);
  }, [form, project]);

  return (
    <Form form={form} initialValues={project} onFinish={handleSubmit} layout="vertical">
      <Item name="name" label="Tiêu đề">
        <Input />
      </Item>
      <Item name="description" label="Mô tả">
        <Input.TextArea rows={5} />
      </Item>
      <Item valuePropName="fileList">
        <MyUpload name="images" images={project?.images} />
      </Item>
      <Item>
        <Button type="primary" htmlType="submit">
          Gửi
        </Button>
      </Item>
    </Form>
  );
};

export default FormProject;
