import React, { useState } from "react";
import bg from "./images/bg.png";
import { list } from "./solutionConfig";
import iconBg from "./images/iconBg.png";
import currentIconBg from "./images/currentIconBg.png";
import { Tooltip } from "antd";
import style from "./index.less";
import { Anchor } from "antd";
import Content from "../../components/Content";
import { Row, Col } from "antd";

const { Link } = Anchor;
const Foot = ({ setCurrentIndex, currentIndex, list }) => (
  <div style={{ display: "flex" }}>
    <div className={style.foot} style={{ margin: "50px  auto 0 auto" }}>
      <Anchor
        affix={false}
        onClick={() => setCurrentIndex(currentIndex - 1)}
        className={style.footSub}
      >
        <Link
          href="#detail"
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
        <Link href="#detail" title="返回" />
      </Anchor>
      <Anchor
        className={style.footSub}
        affix={false}
        onClick={() => setCurrentIndex(currentIndex + 1)}
      >
        <Link
          href="#detail"
          title="下一个"
          onClick={() => setCurrentIndex(currentIndex + 1)}
          className={currentIndex === list.length - 1 ? style.disable : ""}
        />
      </Anchor>
    </div>
  </div>
);

const Solution = ({ history }) => {
  var params = (function () {
    var query = history.location.search.match(
      new RegExp("[?&][^?&]+=[^?&]+", "g")
    );
    query = query || "";
    var result = {};
    for (var i = 0; i < query.length; i++) {
      var item = query[i].substring(1).split("=");
      result[item[0]] = item[1];
    }
    return result;
  })();
  console.log(history, params, "history");
  const index = parseInt(params.index, 10);
  const [currentIndex, setCurrentIndex] = useState(index > -1 ? index : 0);
  const [detailIndex, setDetailIndex] = useState(-1);
  const isDetail = detailIndex > -1;
  const detailInfo = list[currentIndex].detailList[detailIndex];
  console.log(detailInfo, "detailInfo");
  return (
    <div className={style.solution}>
      <div className={style.bg} style={{ backgroundImage: `url(${bg})` }}></div>
      <Content style={{ background: "#fff" }}>
        {!isDetail && (
          <Row className={style.list} id="more">
            {list.map(({ title, icon }, index) => (
              <Col
                span={8}
                md={4}
                className={currentIndex === index ? style.active : ""}
              >
                <div
                  className={currentIndex === index ? style.active : ""}
                  onClick={() => setCurrentIndex(index)}
                  key={"solution" + index}
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
              </Col>
            ))}
          </Row>
        )}
        {!isDetail && (
          <Row className={style.detailList}>
            {list[currentIndex].detailList.map(
              ({ title, subTitle, text }, index) => (
                <Col
                  span={24}
                  md={6}
                  className={style.detail}
                  key={"detailList" + index}
                  onClick={() => setDetailIndex(index)}
                >
                  <div>
                    <div className={style.title}>{title}</div>
                    <div className={style.subTitle}>{subTitle}</div>
                    <div className={style.text}>
                      <Tooltip title={text}>
                        <a>{text}</a>
                      </Tooltip>
                    </div>
                  </div>
                </Col>
              )
            )}
          </Row>
        )}
        {isDetail && (
          <div className={style.content}>
            <div className={style.title} id="detail">
              <div>
                <span>{detailInfo.subTitle}</span>
              </div>
            </div>
            {detailInfo.detail.map((detail) => (
              <div className={style.detail}>
                <div className={style.title}>{detail.title}</div>
                <div className={style.info}>{detail.info}</div>
              </div>
            ))}
            <Foot
              setCurrentIndex={setDetailIndex}
              currentIndex={detailIndex}
              list={list[currentIndex].detailList}
            />
          </div>
        )}
      </Content>
    </div>
  );
};
export default Solution;
