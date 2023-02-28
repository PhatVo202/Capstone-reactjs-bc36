import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  FormOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  Space,
  theme,
  Dropdown,
  Avatar,
  Button,
} from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("User", "1", <UserOutlined />),
  getItem(
    "Films",
    "sub1",

    <PieChartOutlined />,
    [
      getItem(
        "Films",
        "3",
        <NavLink to="/admin/films">
          <Space>
            <FormOutlined />
          </Space>
        </NavLink>
      ),
      getItem(
        "Addnew",
        "4",
        <NavLink to="/admin/films/addnew">
          <Space>
            <FileAddOutlined />
          </Space>
        </NavLink>
      ),
    ]
  ),
  getItem("ShowTime", "5", <FileOutlined />),
];

export const AdminLayout = () => {
  const stateUser = useSelector((state) => state.userReducer);
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            background: colorBgContainer,
          }}
        >
          <div className="text-right">
            {stateUser.userInfo && (
              <div style={{ textAlign: "right" }}>
                <span>
                  <Dropdown
                    menu={{
                      items,
                    }}
                    trigger={["click"]}
                    placement="bottomRight"
                    arrow
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space size={16} wrap>
                        <Avatar
                          style={{ backgroundColor: "#87d068" }}
                          icon={<UserOutlined />}
                        />
                        {stateUser.userInfo.hoTen}
                      </Space>
                    </a>
                  </Dropdown>
                </span>
              </div>
            )}
          </div>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Films</Breadcrumb.Item>
            <Breadcrumb.Item>Addnew</Breadcrumb.Item>
          </Breadcrumb>

          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
