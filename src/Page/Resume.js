import React from "react";
import { Avatar, Row, Col, Divider, Timeline } from "antd";
import { UserOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import CollectionOfWorks from "../Components/CollectionOfWorks.js";
import Content from "../Components/Content.js";
import Cakeicon from "../Components/Cakeicon.js";
import "antd/dist/antd.min.css";
import "./Resume.css";

const CV = [
  [
    "我來自台東，國中就被送去讀寄宿學校，培養了很好的獨立自主能力，隨和的個性也交了一群好朋友，至今仍常常聊天談心。",
    "國中畢業時覺得應該離開台東去到好一點的學校，毅然決然到西部讀書，也很幸運的進到了想要的學校，並且考取了幾張證。到了競爭相較激烈的西部常常會感覺不上別人，也不確定我累積的技術、知識有多少能在用到職場上。",
    "在讀五專的歷程中，學了很多種程式語言，包括: Visual Basic、C、C++、Java、HTML、CSS、PHP等等…，也了解了更多包涵計算機概論、資料結構、人工智慧導論等基礎理論。",
    "在畢業專題時，我們這組選擇了做網頁，途中也自學到更多關於網頁的技術，例如:laravel架構、bootstrap等等…。",
    "五專最後一學期我如願找到了實習機會，到了創科資訊實習。",
  ],
];
const dog = [
  [
    "五專五年級時做了一個畢業專題的作品，是幫一位照顧流浪狗的阿姨做的網站，此網站描述了阿姨照顧流浪狗所遇上的困難，與關於狗的科普小知識，也做了助養、捐贈的管道。",
  ],
  [
    "在這專案中我主要負責網頁前端開發，使用到Bootstrap開發響應式網頁。",
    "專案開發期間也常常指導組員的切版、排版的方法，自學JavaScript也都能做出想要的效果。",
  ],
];
const monoLuck = [[""]];

function App() {
  return (
    <div className="contaner">
      <Row gutter={[16, 16]}>
        <Col>
          <Avatar shape="square" size={144} icon={<UserOutlined />} />
        </Col>
        <Col>
          <h1>劉爾捷</h1>
          <h3>
            <Cakeicon></Cakeicon>：2001-10-25<br></br>
            <PhoneOutlined />
            ：0978-458-745<br></br>
            <MailOutlined />
            ：jo901025@gmail.com<br></br>
          </h3>
        </Col>
      </Row>

      <Divider orientation="left" className="Divider" span>
        簡歷
      </Divider>

      <Content content={CV} />

      <Divider orientation="left" className="Divider" span>
        作品集
      </Divider>

      <Timeline>
        <Timeline.Item>
          <CollectionOfWorks src="./pic/dog.png" content={dog} />
        </Timeline.Item>

        <Timeline.Item>
          <CollectionOfWorks src="./pic/Mono-Luck.png" content={monoLuck} />
        </Timeline.Item>
      </Timeline>

      <Divider orientation="left" className="Divider" span>
        專業技能
      </Divider>
    </div>
  );
}

export default App;
