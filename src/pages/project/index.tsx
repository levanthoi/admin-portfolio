import { useEffect } from 'react';
import Taskbar from '@/components/taskbar/Taskbar';
import { getProjects } from '@/services/project';
import { Table } from 'antd';

const Project = () => {
  // const { response, isLoading } = useFetch(getProjects());
  // console.log(response);
  // const [projects, setProjects] = useState(null);

  const fetch = async () => {
    const response = await getProjects();
    // setProjects(response.data);
    console.log('rrr', response);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Taskbar />
      <Table />
    </>
  );
};

export default Project;
