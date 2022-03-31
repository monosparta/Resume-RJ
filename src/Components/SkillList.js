import { Row, Col, List } from "antd";

function SkillList(props) {
  return (
    <Row gutter={[16, 16]}>
      {props.skillLists.map((skillList) => {
        return (
          <Col span={24} sm={{ span: 12 }} lg={{ span: 6 }}>
            <List
              size="small"
              header={<h2>{skillList.title}</h2>}
              dataSource={skillList.skill}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Col>
        );
      })}
    </Row>
  );
}
export default SkillList;
