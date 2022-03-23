import React from "react";
import { Avatar, Row, Col, Divider, Image } from "antd";
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  createFromIconfontCN,
} from "@ant-design/icons";
import "antd/dist/antd.min.css";
import "./Resume.css";

const IconFont = createFromIconfontCN({
  scriptUrl: [
    "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js", // icon-javascript, icon-java, icon-shoppingcart (overrided)
    "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js", // icon-shoppingcart, icon-python
  ],
});

function Cakeicon() {
  return (
    <svg
      t="1647934265866"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="620"
      width="16"
      height="16"
    >
      <path
        d="M512 234.666667c34.133333 0 64-29.866667 64-64 0-12.8-4.266667-21.333333-8.533333-34.133334L512 42.666667l-55.466667 93.866666c-4.266667 8.533333-8.533333 21.333333-8.533333 34.133334 0 34.133333 29.866667 64 64 64zM789.333333 341.333333H554.666667V277.333333h-85.333334V341.333333H234.666667C128 341.333333 42.666667 426.666667 42.666667 533.333333c0 68.266667 34.133333 123.733333 85.333333 157.866667V981.333333h768v-290.133333c51.2-34.133333 85.333333-93.866667 85.333333-157.866667C981.333333 426.666667 896 341.333333 789.333333 341.333333z m0 298.666667c-29.866667 0-55.466667-12.8-76.8-29.866667l-64-64-64 64c-17.066667 17.066667-42.666667 29.866667-72.533333 29.866667s-55.466667-12.8-76.8-29.866667l-64-64-64 64c-17.066667 17.066667-42.666667 29.866667-72.533333 29.866667C174.933333 640 128 593.066667 128 533.333333S174.933333 426.666667 234.666667 426.666667h554.666666c59.733333 0 106.666667 46.933333 106.666667 106.666666S849.066667 640 789.333333 640z"
        p-id="621"
      ></path>
    </svg>
  );
}

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
      <p>
        我來自台東，國中就被送去讀寄宿學校，培養了很好的獨立自主能力，隨和的個性也交了一群好朋友，至今仍常常聊天談心。
        <br></br>
        國中畢業時覺得應該離開台東去到好一點的學校，毅然決然到西部讀書，也很幸運的進到了想要的學校，並且考取了幾張證。到了競爭相較激烈的西部常常會感覺不上別人，也不確定我累積的技術、知識有多少能在用到職場上。
        <br></br>
        在讀五專的歷程中，學了很多種程式語言，包括: Visual
        Basic、C、C++、Java、HTML、CSS、PHP等等…，也了解了更多包涵計算機概論、資料結構、人工智慧導論等基礎理論。
        <br></br>
        在畢業專題時，我們這組選擇了做網頁，途中也自學到更多關於網頁的技術，例如:laravel架構、bootstrap等等…。
        <br></br>
        五專最後一學期我如願找到了實習機會，到了創科資訊實習。
      </p>
      <Divider orientation="left" className="Divider" span>
        作品集
      </Divider>
      <Row gutter={[16, 16]} justify="end">
        <Col span={14}>
          <p>
            這是在五專畢業專題的作品，是幫一位照顧流浪狗的阿姨做的網站，此網站描述了阿姨照顧流浪狗所遇上的困難，與關於狗的科普小知識，也做了助養、捐贈的管道。
          </p>
        </Col>
        <Col span={10}>
          <Image src="./pic/dog.png" className="img"></Image>
        </Col>
      </Row>
    </div>
  );
}

export default App;
