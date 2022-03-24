import { List,  } from "antd";


function SkillList(props){
    return(<List
    size="small"
        header={<h2>{props.title}</h2>}
        dataSource={props.skill}
        renderItem={item => <List.Item>{item}</List.Item>}
        />)
}
export default SkillList