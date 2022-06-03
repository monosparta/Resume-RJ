import { Form, Input, Button, Checkbox, Space } from "antd";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  let history = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const Singup = (errorInfo) => {
    history("/singup");
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

      <Form.Item
        label="密碼"
        name="password"
        hasFeedback
        rules={[{ required: true, message: "請輸入密碼" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button className="submit" type="primary" htmlType="submit">
          登入
        </Button>
        <Space style={{ paddingLeft: "10px" }}>尚未註冊?</Space>
        <Button
          type="link"
          htmlType="button"
          onClick={Singup}
          style={{ padding: "0" }}
        >
          註冊
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
