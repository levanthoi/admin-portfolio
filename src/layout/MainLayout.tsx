import BreadCrumb from '@/components/breadcrumb';
import MenuLayout from '@/components/menu';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import React, { useState } from 'react';

const { Header, Sider, Content } = Layout;

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout hasSider>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="dark"
        className="min-h-full h-screen"
      >
        <div className="text-2xl text-white text-center">----------------</div>
        <MenuLayout />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: 'white' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <BreadCrumb />
        <Content
          style={{
            padding: '16px 24px',
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
