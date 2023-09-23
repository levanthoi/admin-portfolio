import { useEffect, useState, useCallback } from 'react';
import Taskbar from '@/components/taskbar/Taskbar';
import { deleteProject, getProjects } from '@/services/project';
import { Button, Image, Popconfirm, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
// import { IImage } from '@/types/upload.type';
import { IProject } from '@/types/project.type';
import ViewModal from '@/components/modal/ViewModal';
import { IImage } from '@/types/upload.type';
import { useNavigate } from 'react-router-dom';

const Project = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<IProject[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    const response = await getProjects();
    setProjects(response.data);
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetch();
  }, [fetch]);

  const handleEdit = (record: any) => {
    navigate(`/project/${record._id}`);
  };
  const handleDelete = async (record: IProject) => {
    await deleteProject(record._id);
    fetch();
  };

  const columns: ColumnsType<any> = [
    {
      title: 'STT',
      render: (_, __, index) => index + 1,
    },
    {
      title: 'Ảnh',
      dataIndex: 'images',
      render: (text) =>
        text?.map((image: IImage) => (
          <Image key={image.uid} src={image.url} alt="anh" crossOrigin="anonymous" />
        )),
      width: '30%',
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
        <Taskbar fetchList={fetch} />
        <Button onClick={handleClick}>Github</Button>
      </Space>
      <ViewModal isOpen={isOpen} onClick={handleClick} projects={projects} />
      <Table columns={columns} rowKey="_id" dataSource={projects} loading={isLoading} />
    </>
  );
};

export default Project;
