import { IProject } from '@/types/project.type';
import { Form, Input, Modal } from 'antd';
import React from 'react';

interface Props {
  openEdit: boolean;
  project: IProject | any;
  onClick: () => void;
}

const EditModalProject: React.FC<Props> = ({ openEdit, project, onClick }) => {
  const { Item } = Form;
  const [form] = Form.useForm();
  const handleSubmit = async (value: IProject) => {
    console.log(value);
  };
  const handleOk = () => {
    form
      .validateFields()
      .then((value) => {
        handleSubmit(value);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };
  return (
    <Modal open={openEdit} onCancel={onClick} onOk={handleOk}>
      {project?.name}
      <Form>
        <Item>
          <Input />
        </Item>
      </Form>
    </Modal>
  );
};

export default EditModalProject;
