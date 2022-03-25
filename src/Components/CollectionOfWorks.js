
import { Row, Col, Image } from "antd";
import Content from "./ontent.js"
function CollectionOfWorks(props) {
  return (
    <Row gutter={[16, 16]}>
      <Col md={{ span: 12 }} lg={{ span: 14 }} xl={{ span: 17 }}>
        <Content content={props.content} />
      </Col>
      <Col
        sm={{ span: 20, offset: 2 }}
        md={{ span: 12, offset: 0 }}
        lg={{ span: 10, offset: 0 }}
        xl={{ span: 7, offset: 0 }}
      >
        <Image src={props.src} className="img"></Image>
      </Col>
    </Row>
  );
}
export default CollectionOfWorks