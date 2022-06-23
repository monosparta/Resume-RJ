import { Form, Input, Button, Space, Row, Col, message } from "antd";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "../axios";

const Signup = () => {
  let history = useNavigate();
  const onFinish = async (values) => {
    try {
      console.log(JSON.stringify(values));
      const Signup = await axios.post("/api/signup", values);
      localStorage.setItem("id", Signup.data["id"]);
      localStorage.setItem("name", Signup.data["name"]);
      localStorage.setItem("token", Signup.data["token"]);
      message.success("註冊成功");
      history("/");
    } catch (error) {
      message.error(error.response.data.err);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
        name="name"
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
        <Button type="link" htmlType="button" style={{ padding: "0" }}>
          登入
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Signup;
