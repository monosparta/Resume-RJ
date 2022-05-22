import { Layout, Menu } from "antd";
import "./MyLayout.css";
const { Header, Content, Footer } = Layout;
const items=[
  { label: "item 1", key: "1" }, // remember to pass the key prop
  { label: "item 2", key: "2" },
];
function MyLayout({ children }) {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
        />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
}
export default MyLayout;
