import { App, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import Checked from '../checkbox/Checked';
import { addProjects, getProjectsGithub } from '@/services/project';
import { IProject } from '@/types/project.type';
// import { message } from '@/store/storeApp';

interface Props {
  isOpen: boolean;
  projects: IProject[];
  onClick: () => void;
}

const ViewModal: React.FC<Props> = ({ isOpen, projects, onClick }) => {
  const [repositories, setRepositories] = useState<IProject[]>([]);
  const [checkedRepositories, setCheckedRepositories] = useState<IProject[]>([]);

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
    const checkedRepo = repositories?.filter((repo: IProject) => values.includes(repo.id));
    setCheckedRepositories(checkedRepo);
  };

  const handleSubmit = async () => {
    // const addNew = checkedRepositories?.filter((repo) => repo.id === )
    const res = await addProjects(checkedRepositories);
    console.log(res);

    // if (res.success) {
    //   console.log('message', message);

    //   message.success(res.message);
    //   onClick();
    // }
  };

  {
    console.log('=== render VIEWMODAL ===');
  }

  return (
    <App>
      <Modal title="Dự án trên Github" open={isOpen} onCancel={onClick} onOk={handleSubmit}>
        <Checked repositories={repositories} projects={projects} postProjects={postProjects} />
      </Modal>
    </App>
  );
};

export default ViewModal;
