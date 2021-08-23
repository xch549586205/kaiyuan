import style from "./index.less";
import phoneIcon from "./images/phoneIcon.svg";
import qrCode from "./images/qrCode.jpg";

const Foot = (props) => {
  return (
    <div className={style.foot}>
      <div className={style.aboutUs}>
        <div className={style.about}>
          <div className={style.phone}>
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
          </div>
          <div className={style.contact}>
            <div>联系我们</div>
            <div>
              <p>地址：东莞市长安镇涌头社区宏业北路10号</p>
              <p>电话：0769-82284408-9</p>
              <p>传真：0769-82284410</p>
            </div>
          </div>
          <div className={style.contact}>
            <div></div>
            <div style={{ marginTop: "38px" }}>
              <p>厂址：东莞市长安镇涌头工业区</p>
              <p> 电话：0789-85390365 85425278</p>
              <p>邮箱：dgkaiyuan@163.com</p>
            </div>
          </div>
          <div className={style.qrCode}>
            <div>
              <p>扫描二维码</p> <p>更多精彩与你分享</p>
            </div>
            <div>
              <img alt="qrCode" width="90px" src={qrCode} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.copyRight}>
        粤公网安备 000000000000号 Copyright © 2021 东莞市开源化工材料有限公司
      </div>
    </div>
  );
};
export default Foot;
