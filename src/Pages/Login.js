import {
  Form,
  Input,
  Button,
  Space,
  message,
  // Checkbox
} from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "../axios";
// const DeviceInfo = require('device-info');
// const hw = new DeviceInfo({
//   manufacturer,
//   model,
//   revision,
//   deviceClass,
//   deviceId,
// });
// console.log(hw,deviceId);
const Login = () => {
  const history = useNavigate();
  useEffect(() => {
    console.log("1");
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

  const anonymouslogin = async () => {
    if (localStorage.getItem("guestToken")) {
      localStorage.setItem("token", localStorage.getItem("guestToken"));
    } else {
      try {
        const login = await axios.get("/api/anonymouslogin");
        localStorage.setItem("id", login.data["id"]);
        localStorage.setItem("name", login.data["name"]);
        localStorage.setItem("token", login.data["guestToken"]);
        localStorage.setItem("guestToken", login.data["guestToken"]);
        message.success("登入成功");
        history("/");
      } catch (error) {
        message.error(error.response.data["err"]);
        console.log(error.response.data["err"]);
      }
    }
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

      {/* <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item>
        <Button
          className="submit"
          type="primary"
          htmlType="submit"
          style={{ marginRight: "5px" }}
        >
          登入
        </Button>
        <span style={{ whiteSpace: "nowrap" }}>
          <Space
            style={{
              paddingRight: "5px",
              whiteSpace: "nowrap",
            }}
          >
            未有帳號?
          </Space>
          <Button
            type="link"
            htmlType="button"
            onClick={Signup}
            style={{ padding: "0", paddingRight: "5px" }}
          >
            註冊
          </Button>
          <Space style={{ paddingRight: "5px" }}>或</Space>
          <Button
            type="link"
            htmlType="button"
            onClick={anonymouslogin}
            style={{ padding: "0" }}
          >
            匿名登入
          </Button>
        </span>
      </Form.Item>
    </Form>
  );
};

export default Login;
