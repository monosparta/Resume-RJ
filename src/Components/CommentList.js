import React, {
  useEffect,
  useState,
  // useRef
} from "react";
import { List, Input, Space, Button } from "antd";
import axios from "../axios";
import MyComment from "./MyComment.js";
const { Search } = Input;

// function useInterval(callback, delay) {
//   const savedCallback = useRef();

//   // Remember the latest callback.
//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   // Set up the interval.
//   useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//     if (delay !== null) {
//       let id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }
//   }, [delay]);
// }

const CommentList = ({ setLoading, loading }) => {
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState({ value: "", loading: false });

  const ChangeSearch = (e) => {
    setSearch({
      ...search,
      value: e.target.value,
    });
  };

  const onSearch = (value) => {
    setSearch({
      value: value,
      loading: true,
    });
  };

  const resetSearch = () => {
    setSearch({
      value: "",
      loading: true,
    });
  };

  const getComment = () => {
    try {
      axios
        .get(`/api/comment${search.value ? `?search=${search.value}` : ""}`)
        .then((response) => {
          const { data } = response;
          setComments(data.comments);
          setLoading(false);
          setSearch({
            ...search,
            loading: false,
          });
        });
    } catch (error) {
      setLoading(true);
      throw new Error(error);
    }
  };

  // useInterval(() => {
  //   getComment();
  // }, 1000 * 30);

  useEffect(() => {
    if (loading) {
      getComment();
    }
  }, [loading]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    getComment();
  }, [search.loading]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <List
      className="commentList"
      size="small"
      dataSource={comments}
      header={
        <Space style={{ justifyContent: "space-between", width: "100%" }}>
          <span>{comments.length} 則留言</span>
          <span>
            <Space>
              <Search
                size="small"
                placeholder="關鍵字搜尋"
                value={search.value}
                onChange={ChangeSearch}
                onSearch={onSearch}
                loading={search.loading}
                style={{ maxWidth: "200px" }}
              />
              <Button type="primary" size="small" onClick={resetSearch}>
                重設
              </Button>
            </Space>
          </span>
        </Space>
      }
      itemLayout="horizontal"
      renderItem={(props) => {
        return props.comment ? (
          <MyComment props={props} refresh={getComment} />
        ) : null;
      }}
    />
  );
};

export default CommentList;
