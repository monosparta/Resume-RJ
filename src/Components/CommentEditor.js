import React from "react";
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
  const [state, setState] = React.useState({
    comments: [],
    submitting: false,
  });
  const [value, setValue] = React.useState("");

  const handleSubmit = () => {
    if (!value) {
      return;
    }

    setState({
      ...state,
      submitting: true,
    });

    setTimeout(() => {
      getComment();
      setState({
        submitting: false,
        comments: [...state.comments],
      });
      setValue("");
    }, 1000);
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
      setState({
        ...state,
        comments: data.comments,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const sendComment = async () => {
    try {
      const send = await axios.post("/api/comment",{});
      const { data } = send;
      console.table(send.status);
      console.table(data);
      
    } catch (error) {
      throw new Error(error);
    }
  };
  // setInterval(() => {
  //   getComment();
  // }, 1000 * 3);

  return (
    <>
      <Card>
        <Skeleton
          loading={true}
          paragraph={{ rows: 2 }}
          style={{ width: 500, marginTop: 10 }}
          active
        />
        <Skeleton
          loading={true}
          paragraph={{ rows: 1 }}
          style={{ width: 500, marginTop: 10 }}
          active
        />
        {state.comments.length > 0 && <CommentList comments={state.comments} />}
        <Comment
          // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
          content={
            <Editor
              onChange={handleChange}
              onSubmit={handleSubmit}
              submitting={state.submitting}
              value={value}
            />
          }
        />
      </Card>
    </>
  );
}

export default CommentEditor;
