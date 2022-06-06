import React, { useEffect, useState } from "react";
import { Comment, Form, Button, List, Input, Card } from "antd";
import axios from "../axios";
import MyComment from "./MyComment.js";
import "./CommentEditor.css";

const { TextArea } = Input;

const CommentList = ({ comments, refresh }) => (
  <List
    className="commentList"
    size="small"
    dataSource={comments}
    header={`${comments.length} 則留言`}
    itemLayout="horizontal"
    renderItem={(props) => {
      return props.comment ? (
        <MyComment props={props} refresh={refresh} />
      ) : null;
    }}
  />
);

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
  const [comments, setComments] = useState([]);
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
      await getComment();
      setValue("");
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const getComment = async () => {
    try {
      const get = await axios.get("/api/comment");
      const { data } = get;
      setTimeout(() => {
        setComments(data.comments);
        // console.log(data.comments);
        setLoading(false);
      }, 200);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    setInterval(() => {
      getComment();
    }, 1000 * 5);
  }, []);

  useEffect(() => {
    const get = async () => {
      await getComment();
    };
    get();
  }, []);

  return (
    <>
      <Card>
        {comments.length > 0 && (
          <CommentList comments={comments} refresh={getComment} />
        )}
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
