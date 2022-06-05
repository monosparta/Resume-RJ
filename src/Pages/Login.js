import { Form, Input, Button, Checkbox, Space, message } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "../axios";

const Login = () => {
  const history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      history("/");
    }
  });
  const onFinish = async (values) => {
    try {
      const login = await axios.post("/api/login", values);
      localStorage.setItem("id", login.data["id"]);
      localStorage.setItem("name", login.data["name"]);
      localStorage.setItem("token", login.data["token"]);
      localStorage.setItem("reFreshToken", login.data["reFreshToken"]);
      message.success("登入成功");
      history("/");
    } catch (error) {
      message.error("信箱或密碼錯誤");
      console.log(error.response.data["err"]);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const Signup = (errorInfo) => {
    history("/Signup");
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
        hasFeedback
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
          onClick={Signup}
          style={{ padding: "0" }}
        >
          註冊
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
