import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import Checked from '../checkbox/Checked';
import { getProjectsGithub } from '@/services/project';
import { IProject } from '@/types/project.type';

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const ViewModal: React.FC<Props> = ({ isOpen, onClick }) => {
  const [repositories, setRepositories] = useState<IProject[]>([]);

  useEffect(() => {
    const params = {
      visibility: 'public',
      sort: 'pushed',
    };
    const fetch = async () => {
      const res = await getProjectsGithub(params);
      setRepositories(res.data);
    };
    fetch();
  }, []);

  const postProjects = (values: any) => {
    console.log(values);
  };

  return (
    <Modal title="Dự án trên Github" open={isOpen} onCancel={onClick}>
      <Checked repositories={repositories} postProjects={postProjects} />
    </Modal>
  );
};

export default ViewModal;
