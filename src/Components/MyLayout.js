import { Layout, Menu, Dropdown, Space } from "antd";
import "./MyLayout.css";

const { Header, Content, Footer } = Layout;

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
function handleLogin() {}
function handleLogout() {}
const User = () => {
  if (localStorage.getItem("token") == null) {
    return (
      <a
        onClick={handleLogin}
        style={{
          color: "#fff",
          fontSize: "20px",
        }}
        href
      >
        Login
      </a>
    );
  } else {
    return (
      <Dropdown overlay={menu} placement="bottom" arrow>
        <a href>
          <Space
            style={{
              color: "#fff",
              fontSize: "20px",
            }}
          >
            name
          </Space>
        </a>
      </Dropdown>
    );
  }
};
function MyLayout({ children }) {
  return (
    <Layout className="layout">
      <Header
        style={{
          color: "#fff",
          fontSize: "20px",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        劉爾捷個人網站
        <User />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
}
export default MyLayout;
