import React, { useState } from "react";
import bg from "./images/bg.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import icon5 from "./images/icon5.png";
import icon6 from "./images/icon6.png";
import iconBg from "./images/iconBg.png";
import currentIconBg from "./images/currentIconBg.png";

import style from "./index.less";
const Solution = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const list = [
    {
      title: "清洁剂",
      icon: icon1,
    },
    {
      title: "抛光材料",

      icon: icon2,
    },
    {
      title: "水溶性产品",

      icon: icon3,
    },
    {
      title: "纯油性产品",

      icon: icon4,
    },
    {
      title: "金属防锈",

      icon: icon5,
    },
    {
      title: "设备润滑油",

      icon: icon6,
    },
  ];
  return (
    <div className={style.solution}>
      <div className={style.bg} style={{ backgroundImage: `url(${bg})` }}></div>
      <div className={style.list}>
        {list.map(({ title, english, text, icon }, index) => (
          <div
            className={currentIndex === index ? style.active : ""}
            onClick={() => setCurrentIndex(index)}
          >
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
              <div className={style.title}><span>{title}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Solution;
