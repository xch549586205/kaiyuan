import style from "./index.less";
import phoneIcon from "./images/phoneIcon.svg";
import qrCode from "./images/qrCode.jpg";
import { Row, Col } from "antd";

const Foot = (props) => {
  return (
    <div className={style.foot}>
      <div className={style.aboutUs}>
        <Row>
          <Col span={16} className={style.about}>
            <Row>
              <Col className={style.phone} span={24} md={6}>
                <div className={style.phoneIcon}>
                  <div className={style.icon}>
                    <img src={phoneIcon} alt="phoneIcon" />{" "}
                  </div>
                  <div className={style.number}>
                    <p>全国服务热线</p>
                    <p>0769-85390365</p>
                  </div>
                </div>
                <div className={style.timer}>09:00~17:00</div>
              </Col>
              <Col className={style.contact} span={24} md={6}>
                <div>联系我们</div>
                <div>
                  <p>地址：东莞市长安镇涌头社区宏业北路10号</p>

                  <p>电话：0769-82284408-9</p>
                  <p>传真：0769-82284410</p>
                </div>
              </Col>
              <Col className={style.contact} span={24} md={6}>
                <div></div>
                <div style={{ marginTop: "38px" }}>
                  <p>厂址：东莞市长安镇涌头工业区</p>
                  <p>成都市崇州经济开发区创新路力兴之家77号</p>
                  <p>东莞市大岭山镇莲峰三横路71号</p>
                  <p> 电话：0789-85390365 85425278</p>
                  <p>邮箱：dgkaiyuan@163.com</p>
                </div>
              </Col>
              <Col className={style.qrCode} span={24} md={6}>
                <div>
                  <p>扫描二维码</p> <p>更多精彩与你分享</p>
                </div>
                <div>
                  <img alt="qrCode" width="90px" src={qrCode} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className={style.copyRight}>
        粤公网安备 000000000000号 Copyright © 2021 东莞市开源化工材料有限公司
      </div>
    </div>
  );
};
export default Foot;
