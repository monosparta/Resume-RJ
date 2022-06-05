import { BackTop } from "antd";
const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};

const GoTop = () => (
  <>
    <BackTop style={{bottom:"10px",right:"10px"}}>
      <div style={style}>Top</div>
    </BackTop>
  </>
);

export default GoTop;
