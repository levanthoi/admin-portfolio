import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface IBreadCrumb {
  href: string;
  title: React.ReactNode;
}

const BreadCrumb = () => {
  const location = useLocation();
  const [breadCrumbs, setBreadCrumbs] = useState<IBreadCrumb[]>([]);

  const getBreadCrumb = useCallback(() => {
    const bcArr = Array.from(new Set(location.pathname.split('/')));
    // const urlItem = bcArr?.map((item: any) => `/${item}`);

    const x: IBreadCrumb[] = bcArr?.map((item: any) => {
      return {
        href: `/${item}`,
        title: item === '' ? <HomeOutlined /> : <span className="capitalize">{item}</span>,
      };
    });
    setBreadCrumbs(x);
    console.log(location.pathname);
    console.log(bcArr);
  }, [location]);

  useEffect(() => {
    getBreadCrumb();
  }, [location, getBreadCrumb]);

  return <Breadcrumb className="px-6 py-4" items={breadCrumbs} />;
};

export default BreadCrumb;
