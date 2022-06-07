import React, { useState } from "react";
import { Comment, Form, Button, Input, Card } from "antd";
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
  const [loading, setLoading] = useState(true);
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
      // await getComment();
      setValue("");
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Card>
        <CommentList loading={loading} setLoading={setLoading} />
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
