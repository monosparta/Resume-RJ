import { useEffect, useState } from "react";
import { Modal, Form, Input } from "antd";

const EditModal = ({ props, visible, handleEdit, onCancel, loading }) => {
  const [form] = Form.useForm();
  const [value, setValue] = useState({
    comment: "",
    id: "",
  });
  const onChange = (e) => {
    setValue({
      ...value,
      comment: e.target.value,
    });
  };
  useEffect(() => {
    setValue({
      comment: props.comment,
      id: props.id,
    });
    console.log(props.comment);
  }, [props, visible]);
  return (
    <Modal
      destroyOnClose={true}
      confirmLoading={loading}
      visible={visible}
      title="編輯留言"
      okText="確認"
      cancelText="取消"
      onCancel={onCancel}
      onOk={() => {
        form.submit();
      }}
    >
      <Form
        preserve={false}
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ id: value.id }}
        onFinish={handleEdit}
        onFinishFailed={(err) => {
          console.log(err);
        }}
      >
        <Form.Item
          name="comment"
          initialValue={value.comment}
          rules={[
            {
              required: true,
              message: "請輸入留言",
            },
            () => ({
              validator(_, value) {
                if (!(props.comment === value)) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("內容未修改"));
              },
            }),
          ]}
        >
          <Input onChange={onChange} />
        </Form.Item>
        <Form.Item name="id" hidden={true}></Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
