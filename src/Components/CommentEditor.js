import React, { useEffect } from "react";
import {
  Comment,
  Form,
  Button,
  List,
  Input,
  Card,
  Skeleton,
  Space,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import moment from "./LocaleMoment";
import axios from "../axios";
import "./CommentEditor.css"

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
  className="commentList"
    size="small"
    dataSource={comments}
    header={`${comments.length} 則留言`}
    itemLayout="horizontal"
    renderItem={(props) => (
      <List.Item>
        <Comment
          author={props.user.name}
          content={props.comment}
          datetime={moment(props.createdAt).fromNow()}
        />
        <Space>
          <EditOutlined />
          <DeleteOutlined />
        </Space>
      </List.Item>
    )}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
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

function CommentEditor() {
  const [comments, setComments] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [value, setValue] = React.useState("");

  const handleSubmit = async () => {
    if (!value) {
      return;
    }

    setLoading(true);

    try {
      const send = await axios.post("/api/auth/comment", {
        comment: value.trim(),
      });
      const { data } = send;
      console.log(data.err);
      setValue("");
    } catch (error) {
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
      setComments(data.comments);
      setLoading(false);
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
    if (loading) {
      setTimeout(() => {
        get();
      }, 1000);
    }
  }, [loading]);

  return (
    <>
      <Card>
        <Skeleton
          loading={loading}
          paragraph={{ rows: 2 }}
          style={{ width: 500, marginTop: 10 }}
          active
        >
          {comments.length > 0 && <CommentList comments={comments} />}
        </Skeleton>
        <Skeleton
          loading={loading}
          paragraph={{ rows: 1 }}
          style={{ width: 500, marginTop: 10 }}
          active
        />
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
}

export default CommentEditor;
