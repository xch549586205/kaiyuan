import React, { useState } from "react";
import bg from "./images/bg.png";
import style from "./index.less";
import { list } from "./config";
import arrowIcon from "./images/arrow.svg";
import { Anchor } from "antd";
const { Link } = Anchor;
const Foot = ({ setCurrentIndex, currentIndex }) => (
  <div className={style.foot}>
    <Anchor
      affix={false}
      onClick={() => setCurrentIndex(currentIndex - 1)}
      className={style.footSub}
    >
      <Link
        href="#title"
        title="上一个"
        onClick={() => setCurrentIndex(currentIndex - 1)}
        className={currentIndex === 0 ? style.disable : ""}
      />
    </Anchor>
    <Anchor
      affix={false}
      onClick={() => setCurrentIndex(-1)}
      className={style.footSub}
    >
      <Link href="#title" title="返回" />
    </Anchor>
    <Anchor
      className={style.footSub}
      affix={false}
      onClick={() => setCurrentIndex(currentIndex + 1)}
    >
      <Link
        href="#title"
        title="下一个"
        onClick={() => setCurrentIndex(currentIndex + 1)}
        className={currentIndex === list.length - 1 ? style.disable : ""}
      />
    </Anchor>
  </div>
);

const TechSupport = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const isDetail = currentIndex > -1;
  const currentInfo = list[currentIndex];

  return (
    <div className={style.techSupport}>
      <div className={style.bg} style={{ backgroundImage: `url(${bg})` }}></div>
      <div className={style.content}>
        <div className={style.title} id="title">
          {!isDetail && (
            <div>
              <span>HELP</span>/ 技术支持
            </div>
          )}
          {isDetail && (
            <div>
              <span>{currentInfo.title}</span>
            </div>
          )}
          <div></div>
        </div>
        {!isDetail && (
          <div className={style.list}>
            {list.map(({ pic, title, showText }, index) => (
              <a>
                <div
                  className={style.box}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div>
                    <img src={pic} alt="" />
                  </div>
                  <div>
                    <div className={style.title1}>
                      <p>{title}</p>
                      <div>
                        <img src={arrowIcon} alt="" />
                      </div>
                    </div>
                    <div className={style.text}>{showText}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
        {isDetail && (
          <div className={style.detail}>
            <div className={style.detailContent}>{currentInfo.text}</div>
          </div>
        )}
        {isDetail && (
          <Foot setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} />
        )}
      </div>
    </div>
  );
};
export default TechSupport;
