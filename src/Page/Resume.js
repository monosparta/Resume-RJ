import React from "react";
import { Divider, Timeline, List } from "antd";
import CollectionOfWorks from "../Components/CollectionOfWorks.js";
import Content from "../Components/Content.js";
import SkillList from "../Components/SkillList.js";
import BasicInfo from "../Components/BasicInfo.js";
import ExperiencesTimeline from "../Components/ExperiencesTimeline.js";
import "antd/dist/antd.min.css";
import "./Resume.css";

const basic = {
  pic: "./pic/head.png",
  name: "劉爾捷",
  nickname: "Jonathan, RJ",
  birthday: "2001-10-25",
  phone: "0978-458-745",
  email: "jo901025@gmail.com",
};

const CV = [
  [
    "我來自台東，國中就被送去讀寄宿學校，培養了很好的獨立自主能力，隨和的個性也交了一群好朋友，至今仍常常聊天談心。",
    "國中畢業時覺得應該離開台東去到好一點的學校，毅然決然到西部讀書，也很幸運的進到了想要的學校，並且考取了幾張證。到了競爭相較激烈的西部常常會感覺不上別人，也不確定我累積的技術、知識有多少能在用到職場上。",
    "在讀五專的歷程中，學了很多種程式語言，包括: Visual Basic、C、C++、Java、HTML、CSS、PHP等等…，也了解了更多包涵計算機概論、資料結構、人工智慧導論等基礎理論。",
    "在畢業專題時，我們這組選擇了做網頁，途中也自學到更多關於網頁的技術，例如:laravel架構、bootstrap等等…。",
  ],
];

const workExperiences = [
  {
    time: "2021-02-14~現在",
    work: "創科資訊股份有限公司 Monosparta Code Camp",
  },
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
const monoLuck = [
  [
    "Mono-Luck是進入創科實習時做的第一份專案，用來登記會員想要的置物櫃，登記結束後抽選出配對結果。",
  ],
  [
    "此專案使用React+Laravel的前後端分離架構，其中使用git做版本控制，並最後推到Heroku完成網站架設。",
    "在這專案中我管理laravel後端專案、撰寫API、規劃ER-model，完成後端工作後也跟前端討論API資料格式。",
  ],
];

const skillLists = [
  {
    title: "程式語言",
    skill: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Python", "JAVA", "C"],
  },
  {
    title: "框架",
    skill: ["Bootstrap", "React", "Laravel", "Node.js", "AntDesign"],
  },
  {
    title: "開發軟體",
    skill: ["Visual Studio Code", "Dev-C++", "Android Studio", "Visual Studio"],
  },
  {
    title: "其他軟體",
    skill: ["Oracle VM VirtualBox", "Git", "XAMPP", "vagrant", "figma"],
  },
];

const licenses = [
  {
    project: "HTML & CSS",
    license: ["MTA: Introduction to Programming using HTML and CSS"],
  },
  { project: "Android", license: ["iPAS行動裝置程式設計師初級"] },
  { project: "Visual Basic", license: ["中華民國技術士-電腦軟體設計丙級"] },
  {
    project: "Microsoft Office",
    license: ["TQC-OA PowerPoint 2016專業級", "TQC-OA Excel 2016專業級"],
  },
];

const langs = [
  {
    lang: "中文",
    describe: "母語",
  },
  {
    lang: "英文",
    describe: "搭配單字翻譯尚可讀懂網路文章資料",
  },
];

function App() {
  return (
    <div className="contaner">
      <BasicInfo data={basic} />
      <Divider orientation="left" className="Divider" span>
        簡歷
      </Divider>
      <Content content={CV} />
      <Divider orientation="left" className="Divider" span>
        工作經驗
      </Divider>
      <ExperiencesTimeline workExperiences={workExperiences} />
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
        學歷
      </Divider>
      國立台中科技大學 資訊應用菁英班 日間部 五專 ： 就讀中
      <Divider orientation="left" className="Divider" span>
        專業技能
      </Divider>
      <SkillList skillLists={skillLists} />
      <Divider orientation="left" className="Divider" span>
        證照
      </Divider>
      {licenses.map((licenses) => {
        return(<List
          size="small"
          header={<h3>{licenses.project}</h3>}
          dataSource={licenses.license}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />);
      })}
      <Divider orientation="left" className="Divider" span>
        語言能力
      </Divider>
      <List
        dataSource={langs}
        renderItem={(item) => (
          <List.Item>
            {item.lang}：{item.describe}
          </List.Item>
        )}
      />
    </div>
  );
}

export default App;
