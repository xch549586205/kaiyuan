import style from "./index.less";
import logo from "./images/logo.png";
import router from "../../router";
import { NavLink, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

function IsPhone() {
  let userAgent = navigator.userAgent,
    Agents = [
      "Android",
      "iPhone",
      "SymbianOS",
      "Windows Phone",
      "iPad",
      "iPod",
    ];
  return Agents.some((i) => {
    return userAgent.includes(i);
  });
}
const { Header, Footer, Sider, Content } = Layout;
// const Navbar = (props) => {
//   console.log(router, "router");

//   return (
//     <div className={style.navbar}>
//       <div className={style.left}>
//         <div className={style.logo}>
//           <img src={logo} alt="logo" />
//         </div>
//         <div className={style.title}>开源化工材料</div>
//       </div>
//       <div className={style.right}>
//         {router &&
//           router.length &&
//           [
//             router[router.length - 1],
//             ...router.slice(0, router.length - 1),
//           ].map(
//             ({ title, path }) =>
//               title && (
//                 <NavLink
//                   className={style.nav}
//                   key={path}
//                   to={path}
//                   activeStyle={{
//                     color: "rgba(0, 0, 0, 1)",
//                     backgroundColor: "rgba(0, 0, 0, 0.05)",
//                   }}
//                 >
//                   {title}
//                 </NavLink>
//               )
//           )}
//       </div>
//     </div>
//   );
// };

// const Navbar = (props) => {
//   return (
//     <div>
//       {!IsPhone() && (
//         <Header className={style.navbar}>
//           <div className={style.logo}>
//             <img src={logo} alt="logo" />
//             <div className={style.title}>开源化工材料</div>
//           </div>
//           <div className={style.right}>
//             {router &&
//               router.length &&
//               [
//                 router[router.length - 1],
//                 ...router.slice(0, router.length - 1),
//               ].map(
//                 ({ title, path }) =>
//                   title && (
//                     <NavLink
//                       className={style.nav}
//                       key={path}
//                       to={path}
//                       activeStyle={{
//                         color: "rgba(0, 0, 0, 1)",
//                         backgroundColor: "rgba(0, 0, 0, 0.05)",
//                       }}
//                     >
//                       {title}
//                     </NavLink>
//                   )
//               )}
//           </div>
//         </Header>
//       )}
//       {IsPhone() && (
//         <Sider
//           className={style.slider}
//           breakpoint="lg"
//           collapsedWidth="0"
//           onBreakpoint={(broken) => {
//             console.log(broken);
//           }}
//           onCollapse={(collapsed, type) => {
//             console.log(collapsed, type);
//           }}
//         >
//           <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
//             {router &&
//               router.length &&
//               [
//                 router[router.length - 1],
//                 ...router.slice(0, router.length - 1),
//               ].map(
//                 ({ title, path }) =>
//                   title && (
//                     <Menu.Item key={path}>
//                       {" "}
//                       <NavLink
//                         className={style.nav}
//                         key={path}
//                         to={path}
//                         activeStyle={{
//                           color: "#fff",
//                           backgroundColor: "rgba(0, 0, 0, 0.05)",
//                         }}
//                       >
//                         {title}
//                       </NavLink>
//                     </Menu.Item>
//                   )
//               )}
//             {/* <Menu.Item key="1" icon={<UserOutlined />}>
//               nav 1
//             </Menu.Item>
//             <Menu.Item key="2" icon={<VideoCameraOutlined />}>
//               nav 2
//             </Menu.Item>
//             <Menu.Item key="3" icon={<UploadOutlined />}>
//               nav 3
//             </Menu.Item>
//             <Menu.Item key="4" icon={<UserOutlined />}>
//               nav 4
//             </Menu.Item> */}
//           </Menu>
//         </Sider>
//       )}
//     </div>
//   );
// };

const Navbar = (props) => {
  console.log(IsPhone(), "IsPhone()");
  return (
    <Header className={style.navbar}>
      <div
        className={style.logo}
        style={{ paddingLeft: IsPhone() ? "" : "5.9444444rem" }}
      >
        <img src={logo} alt="logo" />
        <div className={style.title}>开源化工材料</div>
      </div>
      <div
        className={style.right}
        style={{ marginLeft: IsPhone() ? "" : "14rem" }}
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
      </div>
    </Header>
  );
};
export default withRouter(Navbar);
