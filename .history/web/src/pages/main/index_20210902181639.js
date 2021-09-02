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
    w
  };
  return (
    <Row>
      <Col span={24}>
        <Carousel autoplay autoplaySpeed={3000} effect="fade">
          <div>
            <div style={contentStyle}>
              <img src={bigPic}  alt="" />
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <img src={bigPic2}  alt="" />
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
            <div className={style.left}>
              <p>
                基于20多年的经验，开源在技术上已稳步成长为金属加工液领域的领先者。所研发的产品具有极高润滑性的全合成切削液和多功能润滑油，已给业内知名厂商的生产工艺带来了持续改进与成本节约。实践证明润滑油产品对于成本控制于加工工艺稳定性具有持续的效果。通过我们的服务和资讯，我们的客户在金属加工液和相关领域的所有方面有效提高效率。
              </p>
              <p>
                我公司是集开发、生产、销售于一体的专业化公司。近二十年来，我们的研发实验在不断改革创新，推出了一批适应市场需求、具有先进水平的新产品，且部分产品填补了国内空白。此外，我们引进国外优质原材料和添加剂，改善传统产品的品质、提高产品质量，竭诚为顾客提供科学、经济实用的润滑油产品与服务。
              </p>
              <p>
                我们的宗旨是客户至上，且与原材料供应商直接合作，确保了原材料的小波动和每一位用户都能得到我们产品的健康与安全资料。为帮助您获得所需要的成套产品和服务，我们建立了一支技术全面、经验丰富的专业人员所组成的销售团队，力求量身打造，为您研发推出实用的产品。
              </p>
            </div>
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
