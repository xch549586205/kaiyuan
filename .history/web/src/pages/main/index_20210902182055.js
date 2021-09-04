import React, { useState } from "react";
import { Carousel } from "antd";

import bigPic from "./images/big.jpg";
import bigPic2 from "./images/big2.jpg";
import superiorityPic from "./images/superiority.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import currentBg from "./images/currentBg.png";
import process from "./images/process.png";
import { productList } from "./productConfig";
import style from "./index.less";
import { Anchor, Row, Col } from "antd";
const { Link } = Anchor;
const PROCESS = () => {
  return (
    <div className={style.process}>
      <div className={style.title}>
        <span>PROCESS </span>/ 产品生产流程
      </div>
      <img src={process} alt="" width="100%" />
    </div>
  );
};

const Product = ({ history }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className={style.product}>
      <div className={style.territory}>
        <div className={style.title}>
          <span>PRODUCT </span>/ 产品领域
        </div>
        <a>
          <div className={style.content}>
            {productList.map(
              ({ title, bg, icon, english, detail, labels }, index) => {
                const isCurrentIndex = index === currentIndex;
                return (
                  <div
                    key={title}
                    className={
                      isCurrentIndex
                        ? style.productContent + " " + style.productContent
                        : style.productContent
                    }
                    style={{
                      backgroundImage: `url(${
                        isCurrentIndex ? currentBg : bg
                      })`,
                      flex: isCurrentIndex ? 3 : 1,
                    }}
                    onMouseEnter={() => setCurrentIndex(index)}
                  >
                    {!isCurrentIndex && (
                      <div className={style.icon}>
                        <img src={icon} alt="" />
                        <p>{title}</p>
                      </div>
                    )}
                    {isCurrentIndex && (
                      <div className={style.currentContent}>
                        <div className={style.title}>
                          <div className={style.icon}>
                            <img src={icon} alt="" />
                          </div>
                          <div className={style.titleText}>
                            <div>{title}</div>
                            <div className={style.english}>{english}</div>
                          </div>
                        </div>
                        <div className={style.detail}>{detail}</div>

                        <div className={style.labels}>
                          {labels.map((label) => (
                            <div key={label} className={style.label}>
                              {label}
                            </div>
                          ))}
                        </div>
                        {/* <div
                          className={style.more}
                          onClick={() =>
                            history.push(`/solution?index=${index}`)
                          }
                        >
                          了解更多
                        </div> */}
                        <Anchor
                          affix={false}
                          onClick={() =>
                            history.push(`/solution?index=${index}`)
                          }
                          className={style.more}
                        >
                          <Link
                            href="#more"
                            title="了解更多"
                            onClick={() => setCurrentIndex(currentIndex - 1)}
                            className={currentIndex === 0 ? style.disable : ""}
                          />
                        </Anchor>
                      </div>
                    )}
                  </div>
                );
              }
            )}
          </div>
        </a>
      </div>
    </div>
  );
};

const BigPic = () => {
  const contentStyle = {
    color: "#fff",
    background: "#364d79",
  };
  return (
    <Row>
      <Col span={24}>
        <Carousel autoplay autoplaySpeed={3000} effect="fade">
          <div>
            <div style={contentStyle}>
              <img src={bigPic} style={{ width: "100%" }} alt="" />
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <img src={bigPic2} style={{ width: "100%" }} alt="" />
            </div>
          </div>
        </Carousel>
      </Col>
    </Row>
  );
};

const About = () => {
  const list = [
    { title: "开发", text: "完善的技术团队", iconSrc: icon1 },
    { title: "生产", text: "高效生产优质产品", iconSrc: icon2 },
    { title: "销售", text: "量身打造最实用的产品", iconSrc: icon3 },
    { title: "专业", text: "通过质量管理体系认证", iconSrc: icon4 },
  ];
  return (
    <div style={{ background: "rgba(248, 248, 248, 1)" }}>
      <div className={style.about}>
        <div className={style.aboutContent}>
          <div className={style.title}>
            <span>ABOUT </span>/ 关于开源化工
          </div>
          <div className={style.content}>
            <Row>
              <Col span={12}></Col>
              <Col span={12}></Col>

            </Row>
            
            <div
              className={style.right}
              style={{ backgroundImage: `url(${superiorityPic})` }}
            ></div>
          </div>
        </div>
      </div>
      <div className={style.about2}>
        <div className={style.about2Content}>
          {list.map(({ title, text, iconSrc }) => (
            <div key={title}>
              <div className={style.iconSrc}>
                <img src={iconSrc} alt={title} />
              </div>
              <p className={style.title}>{title}</p>
              <p className={style.text}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Main = ({ history }) => {
  return (
    <div className={style.mainPage}>
      <BigPic />
      <About />
      <Product history={history} />
      <PROCESS />
    </div>
  );
};

export default Main;
