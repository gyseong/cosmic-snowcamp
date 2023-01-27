import { Router,Route, Routes ,Link} from 'react-router-dom';
import Layout from './Layout';
import Article from './Articles';
import Works from './works';
import Info from './info';
import {useState} from "react";

const user = {
  username:"조경서",
  userImgPath:"https://www.adobe.com/kr/creativecloud/photography/hub/guides/media_1849da4090361ace99fe89ca1763457328d768f0f.jpeg?width=2000&format=webply&optimize=medium",
}
const userinfo={
  tag1 :"IT",
  tag2 :"토익",
  tag3 : "운동",
  tag4 : "공부",
};

export const items = [
  {
    id :1,
    src:"http://www.wonjutoday.co.kr/news/photo/201407/82066_38860_5538.jpg",
    title: "뉴스",
    preview: "꿈나무 역사 조경서(평원초 4)군",
    createDate: "2000-07-04"
  },
  {
    id :2,
    src:"http://cdnimage.ebn.co.kr/news/202210/news_1666248569_1469667_m_1.jpeg",
    title: "인터뷰",
    preview: "한국의 스라시오 추구 조경서 TBFC 대표",
    createDate: "2023-01-04"
  },
  {
    id: 3,
    src:"https://thumb.mt.co.kr/06/2017/12/2017120609447472416_1.jpg/dims/optimize/",
    title: "연구",
    preview: "을지대 조경서 교수, 영유아 스마트폰 중독경향성 연구",
    createDate: "2023-01-03"
  }
];
const App = () => {
  return (
    <Routes>
      <Route element={<Layout items={items}/>}>
        <Route path="/" element={<Article />}/>
      <Route path="$info" element={<Info userinfo={userinfo}/>}/>
      <Route path="$works" element={<Works />}/>
      <Route path="/$articles" element={<Article items={items}/>}/>
      </Route>
      </Routes>
  );
};
export default App;