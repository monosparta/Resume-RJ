import { Layout, Menu, Dropdown, Space, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import "./MyLayout.css";

const { Header, Content } = Layout;

function MyLayout({ children }) {
  let history = useNavigate();
  const menu = (
    <Menu
      items={[
        {
          label: (
            <a onClick={handleLogout} rel="" href>
              登出
            </a>
          ),
        },
      ]}
    />
  );
  function handleLogin() {
    history("/login");
  }
  function handleLogout() {}
  function home() {
    history("/");
  }
  const User = () => {
    if (localStorage.getItem("token") == null) {
      return (
        <a onClick={handleLogin} href>
          Login
        </a>
      );
    } else {
      return (
        <Dropdown overlay={menu} placement="bottom" arrow>
          <a href>
            <Space>name</Space>
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
        <User />
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