import { Layout, Menu, Dropdown, Space, Row, Col } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyLayout.css";

const { Header, Content } = Layout;

function MyLayout({ children }) {
  const [refresh, setRefresh] = useState(true);
  let history = useNavigate();
  const menu = (
    <Menu
      items={[
        {
          label: (
            <a onClick={handleLogout} rel="" href>
              <Space
                direction="horizontal"
                style={{ width: "100%", justifyContent: "center" }}
              >
                登出
              </Space>
            </a>
          ),
        },
      ]}
    />
  );
  function handleLogin() {
    history("/login");
  }
  function handleLogout() {
    localStorage.setItem("id", "");
    localStorage.setItem("name", "");
    localStorage.setItem("token", "");
    setRefresh(!refresh);
  }
  function home() {
    history("/");
  }
  const User = (refresh) => {
    if (!localStorage.getItem("token")) {
      return (
        <a onClick={handleLogin} href>
          Login
        </a>
      );
    } else {
      const name = localStorage.getItem("name");
      return (
        <Dropdown overlay={menu} placement="bottom" arrow>
          <a href>
            <Space>{name}</Space>
          </a>
        </Dropdown>
      );
    }
  };
  return (
    <Layout className="layout">
      <Header
        style={{
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <a onClick={home} href>
          劉爾捷個人網站
        </a>
        <User refresh={refresh} />
      </Header>
      <Content className="Content">
        <Row justify="center" align="middle">
          <Col className="site-layout-content">{children}</Col>
        </Row>
      </Content>
    </Layout>
  );
}
export default MyLayout;
