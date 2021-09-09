import style from "./index.less";
import logo from "./images/logo.png";
import router from "../../router";
import { NavLink, withRouter } from "react-router-dom";
import { Menu } from "antd";
import Content from "../Content";
import { Row, Col } from "antd";
import React, { useState } from "react";

const Navbar = (props) => {
  const [isPhone, setCurrentIndex] = useState(window.innerWidth < 768);
  const [flag, setFlag] = useState(window.innerWidth > 1280);

  console.log(isPhone);
  return (
    <Content style={{ background: "#fff" }}>
      <Row className={isPhone ? style.phoneNav : style.navbar}>
        <Col className={style.logo} span={16} md={12}>
          <img src={logo} alt="logo" />
          <div className={style.title}>开源化工材料</div>
        </Col>
        <Col
          span={5}
          md={12}
          className={style.right}
          style={{ marginLeft: "auto" }}
        >
          <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
            {router &&
              router.length &&
              [
                router[router.length - 1],
                ...router.slice(0, router.length - 1),
              ].map(
                ({ title, path }) =>
                  title && (
                    <Menu.Item key={path}>
                      {" "}
                      <NavLink
                        className={style.nav}
                        key={path}
                        to={path}
                        // activeStyle={{
                        //   color: "#fff",
                        //   backgroundColor: "rgba(0, 0, 0, 0.05)",
                        // }}
                      >
                        {title}
                      </NavLink>
                    </Menu.Item>
                  )
              )}
          </Menu>
        </Col>
      </Row>
    </Content>
  );
};
export default withRouter(Navbar);
