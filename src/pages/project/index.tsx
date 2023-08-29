import Taskbar from '@/components/taskbar/Taskbar';
import { Table } from 'antd';

const Project = () => {
  console.log(import.meta.env);

  return (
    <>
      <Taskbar />
      <Table />
    </>
  );
};

export default Project;
