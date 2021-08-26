import React, { useState } from "react";
import bg from "./images/bg.png";
import { list } from "./solutionConfig";
import iconBg from "./images/iconBg.png";
import currentIconBg from "./images/currentIconBg.png";
import { Tooltip } from "antd";
import style from "./index.less";
const Solution = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={style.solution}>
      <div className={style.bg} style={{ backgroundImage: `url(${bg})` }}></div>
      <div className={style.list}>
        {list.map(({ title, english, text, icon }, index) => (
          <div
            className={currentIndex === index ? style.active : ""}
            onClick={() => setCurrentIndex(index)}
          >
            <a>
              <div className={style.link}>
                <div className={style.iconTitle}>
                  <div className={style.icon}>
                    <div
                      className={style.iconBg}
                      style={{
                        backgroundImage: `url(${
                          currentIndex === index ? currentIconBg : iconBg
                        })`,
                      }}
                    >
                      <img src={icon} alt="" />
                    </div>
                  </div>
                </div>
                <div className={style.title}>
                  <span>{title}</span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className={style.detailList}>
        {list[currentIndex].detailList.map(({ title, subTitle, text }) => (
          <div className={style.detail}>
            <div>
              <div className={style.title}>{title}</div>
              <div className={style.subTitle}>{subTitle}</div>
              <div className={style.text}>
                <Tooltip title={text}>
                  <a>{text}</a>
                </Tooltip>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Solution;
