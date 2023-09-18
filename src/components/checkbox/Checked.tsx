import { IProject } from '@/types/project.type';
import { Checkbox } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import React, { memo, useMemo } from 'react';

interface Props {
  repositories: IProject[];
  projects: IProject[];
  postProjects: (values: any) => void;
}

const Checked: React.FC<Props> = memo(({ repositories, projects, postProjects }) => {
  const handleChange = (checkedValues: CheckboxValueType[]) => {
    postProjects(checkedValues);
  };

  const selectedValues = useMemo(() => {
    return projects?.map((project) => project.id);
  }, [projects]);
  const isDisabled = (id: number) => {
    return selectedValues?.includes(id) || false;
  };

  {
    console.log('render CHECKED');
  }

  return (
    <Checkbox.Group onChange={handleChange}>
      {repositories?.map((repo: IProject) => (
        <Checkbox key={repo.id} value={repo.id} disabled={isDisabled(repo.id)}>
          {repo.name}
        </Checkbox>
      ))}
    </Checkbox.Group>
  );
});

export default Checked;
