import { useEffect, useState, useCallback } from 'react';
import Taskbar from '@/components/taskbar/Taskbar';
import { getProjects } from '@/services/project';
import { Button, Popconfirm, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { IImage } from '@/types/upload.type';
import { IProject } from '@/types/project.type';
import ViewModal from '@/components/modal/ViewModal';

interface IColumn {
  id: number;
  name: string;
  images: IImage;
}

const Project = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetch = useCallback(async () => {
    const response = await getProjects();
    setProjects(response.data);
    // setIsLoading(!response.succees);
    // console.log('rrr', response, isLoading);
  }, []);
  useEffect(() => {
    fetch();
  }, [fetch]);

  const handleEdit = (record: any) => {
    console.log(record);
  };
  const handleDelete = (record: any) => {
    console.log(record);
  };

  const columns: ColumnsType<IColumn> = [
    {
      title: 'STT',
      render: (_, __, index) => index + 1,
    },
    {
      title: 'Ảnh',
      dataIndex: 'images',
    },
    {
      title: 'Tên',
      dataIndex: 'name',
    },
    {
      title: 'Thao tác',
      render: (_, record) => (
        <Space wrap>
          <Button type="primary" icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Popconfirm title="Chắc chắn xóa?" onConfirm={() => handleDelete(record)}>
            <Button type="primary" danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Space>
        <Taskbar />
        <Button onClick={handleClick}>Github</Button>
      </Space>
      <ViewModal isOpen={isOpen} onClick={handleClick} />
      <Table columns={columns} rowKey="id" dataSource={projects} />
    </>
  );
};

export default Project;
