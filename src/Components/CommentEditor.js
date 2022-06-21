import React, { useState } from "react";
import { Comment, Form, Button, Input, message, Card } from "antd";
import axios from "../axios";
import CommentList from "./CommentList.js";
import "./CommentEditor.css";

const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={3} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
);

const CommentEditor = () => {
  const [loading, setLoading] = useState(false);
  const [LoadComment, setLoadComment] = useState(true);
  const [value, setValue] = useState("");

  const handleSubmit = async () => {
    if (!value) {
      return;
    }
    setLoading(true);
    try {
      await axios.post(
        "/api/auth/comment",
        {
          comment: value.trim(),
        },
        { headers: { token: localStorage.getItem("token") } }
      );
      setLoadComment(true);
      setValue("");
    } catch (error) {
      setLoading(false);
      message.error("請登入");
      throw new Error(error);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Card>
        <CommentList loading={LoadComment} setLoading={setLoadComment} />
      </Card>
      <Comment
        // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={loading}
            value={value}
          />
        }
      />
    </>
  );
};

export default CommentEditor;
