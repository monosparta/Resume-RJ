import { useState, useEffect } from "react";
import { Comment, List, Tooltip, Modal } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import axios from "../axios";
import moment from "./LocaleMoment";
import EditModal from "./EditModal.js";

const MyComment = ({ props, refresh }) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState({
    comment: "",
    id: "",
  });

  const showModal = () => {
    setVisible(true);
    setLoading(false);
  };

  useEffect(() => {
    setValue({
      id: props.id,
      comment: props.comment,
    });
  }, [props]);

  const handleEdit = async ({ id, comment }) => {
    setLoading(true);
    console.log(id, comment);
    try {
      await axios.patch(
        `/api/auth/comment/${id}`,
        {
          comment: comment.trim(),
        },
        { headers: { token: localStorage.getItem("token") } }
      );
      refresh();
      setLoading(false);
      setVisible(false);
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }
  };

  const handleDelete = (props) => {
    Modal.confirm({
      title: "確定刪除?",
      icon: <ExclamationCircleOutlined />,
      content: `內容：${props.comment}`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        try {
          axios
            .delete(`/api/auth/comment/${props.id}`, {
              headers: { token: localStorage.getItem("token") },
            })
            .then((response) => {
              refresh();
            });
        } catch (error) {
          setLoading(false);
          throw new Error(error);
        }
      },
      onCancel() {},
    });
  };

  return (
    <List.Item>
      <Comment
        actions={
          props.userId === parseInt(localStorage.getItem("id"))
            ? [
                <Tooltip title="Edit">
                  <span onClick={showModal}>
                    <EditOutlined />
                  </span>
                </Tooltip>,
                <Tooltip title="Delete">
                  <span
                    onClick={() => {
                      handleDelete(props);
                    }}
                  >
                    <DeleteOutlined />
                  </span>
                </Tooltip>,
              ]
            : null
        }
        author={props.user.name}
        content={props.comment}
        datetime={moment(props.createdAt).fromNow()}
      />
      <EditModal
        props={value}
        visible={visible}
        handleEdit={handleEdit}
        onCancel={() => {
          setVisible(false);
        }}
        refresh={refresh}
        loading={loading}
      />
    </List.Item>
  );
};
export default MyComment;
