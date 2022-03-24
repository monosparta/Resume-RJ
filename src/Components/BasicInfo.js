
import { Avatar, Row, Col, } from "antd";
import { UserOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import Cakeicon from "../Components/Cakeicon.js";
function BasicInfo(porps) {
  let data = porps.data;
  return(
  <Row gutter={[30, 16]}>
    <Col>
      <Avatar src={data.pic} size={128} icon={<UserOutlined />} />
    </Col>
    <Col>
    <Row align="bottom">
      <Col>
      <h1 style={{margin:0}}>{data.name}</h1>
    </Col>
      <Col>
      <p style={{margin:4}}>( {data.nickname} )</p>
    </Col>

    </Row>
      <h3>
        <Cakeicon></Cakeicon>：{data.birthday}<br></br>
        <PhoneOutlined />
        ：{data.phone}<br></br>
        <MailOutlined />
        ：{data.email}<br></br>
      </h3>
    </Col>
  </Row>);
}
export default BasicInfo;
