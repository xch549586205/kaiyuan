import React, { useState } from "react";
import bg from "./images/bg.png";
import bg2 from "./images/bg2.png";

import style from "./index.less";

const Culture = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const list = [
    {
      title: "开源愿景",
      english: "CORPORATE VISION",
      text: "成为中国金属加工润滑剂领域的品牌",
    },
    {
      title: "开源宗旨",
      english: "CORPORATE PURPOSES",
      text: "造最优质的产品，做最诚信的服务",
    },
    {
      title: "开源价值观",
      english: "CORPORATE  VALUES",
      text: "真诚、专注、执行、团队、共赢",
    },
    {
      title: "开源使命",
      english: "CORPORATE  MISSION",
      text: "专注于金属加工润滑剂领域、以国际化的视野，整合全球资源、为客户提供专业化服务、帮助客户提升产品竞争力，实现客户价值。",
    },
  ];
  return (
    <div className={style.culture}>
      <div className={style.bg} style={{ backgroundImage: `url(${bg})` }}></div>
      <a>
        <div className={style.list} style={{ backgroundImage: `url(${bg2})` }}>
          {list.map(({ title, english, text }, index) => (
            <div
              className={currentIndex === index ? style.active : ""}
              onMouseEnter={() => setCurrentIndex(index)}
            >
              <span className={style.title}>{title}</span>
              <div className={style.english}>{english}</div>
              {currentIndex === index && (
                <div className={style.text}>{text}</div>
              )}
            </div>
          ))}
        </div>
      </a>
    </div>
  );
};
export default Culture;
