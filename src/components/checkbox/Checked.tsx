import { IProject } from '@/types/project.type';
import { Checkbox } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import React from 'react';

interface Props {
  repositories: IProject[];
  postProjects: (values: any) => void;
}

const Checked: React.FC<Props> = ({ repositories, postProjects }) => {
  const handleChange = (checkedValues: CheckboxValueType[]) => {
    postProjects(checkedValues);
  };

  return (
    <Checkbox.Group onChange={handleChange}>
      {repositories?.map((repo: IProject) => (
        <Checkbox key={repo.id} value={repo.id}>
          {repo.name}
        </Checkbox>
      ))}
    </Checkbox.Group>
  );
};

export default Checked;
