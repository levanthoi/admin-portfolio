import FormProject from '@/components/form/FormProject';
import { getProject } from '@/services/project';
import { IProject } from '@/types/project.type';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Props {}

const EditProject: React.FC<Props> = () => {
  const { id } = useParams();
  const [project, setProject] = useState<IProject>();
  useEffect(() => {
    const fetch = async () => {
      const res = await getProject(id);
      if (res.success) setProject(res.data);
    };
    fetch();
  }, [id]);
  return <FormProject project={project} />;
};

export default EditProject;
