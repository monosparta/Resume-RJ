import React, { useEffect } from "react";
import {
  Comment,
  Form,
  Button,
  List,
  Input,
  Card,
  Skeleton,
  Divider,
} from "antd";
import moment from "./LocaleMoment";
import axios from "../axios";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(props) => (
      <>
        <Comment
          author={props.user.name}
          content={props.comment}
          datetime={moment(props.createdAt).fromNow()}
        />
        <Divider orientation="left" className="Divider" span></Divider>
      </>
    )}
  />
);

const Editor = ({ onChange, onSubmit, loading, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={loading}
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
      const send = await axios.post("/api/comment", {});
      const { data } = send;
      console.table(data);
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
      console.dir(get);
      console.table(data);
      setComments(data.comments);
      setLoading(false);
    } catch (error) {
      throw new Error(error);
    }
  };

  // setInterval(() => {
  //   getComment();
  // }, 1000 * 3);

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
        />
        <Skeleton
          loading={loading}
          paragraph={{ rows: 1 }}
          style={{ width: 500, marginTop: 10 }}
          active
        />
        {comments.length > 0 && <CommentList comments={comments} />}
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
      </Card>
    </>
  );
}

export default CommentEditor;
