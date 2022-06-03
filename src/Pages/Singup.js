import { Form, Input, Button, Space, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import "./Singup.css";
const Login = () => {
  let history = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const Singup = (errorInfo) => {
    history("/login");
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{
        minheight: "280px",
        margin: "30px 0",
        padding: "24px",
        background: "#fff",
      }}
    >
      <Form.Item
        label="名字"
        name="username"
        hasFeedback
        rules={[{ required: true, message: "請輸入名字" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="電子信箱"
        rules={[
          {
            type: "email",
            message: "電子信箱格式有誤",
          },
          {
            required: true,
            message: "請輸入電子信箱",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Row gutter={24}>
        <Col span={24} sm={12}>
          <Form.Item
            label="密碼"
            name="password"
            hasFeedback
            rules={[{ required: true, message: "請輸入密碼" }]}
          >
            <Input.Password />
          </Form.Item>
        </Col>
        <Col span={24} sm={12}>
          <Form.Item
            name="confirm"
            label="確認密碼"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "請再次輸入密碼",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("兩次密碼輸入不一致"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button className="submit" type="primary" htmlType="submit">
          註冊
        </Button>
        <Space style={{ paddingLeft: "10px" }}>已有帳號?</Space>
        <Button
          type="link"
          htmlType="button"
          onClick={Singup}
          style={{ padding: "0" }}
        >
          登入
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
