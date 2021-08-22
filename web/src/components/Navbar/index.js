import style from "./index.less";
import logo from "./images/logo.png";
import router from "../../router";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = (props) => {
  console.log(router, "router");

  return (
    <div className={style.navbar}>
      <div className={style.left}>
        <div className={style.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.title}>开源化工材料</div>
      </div>
      <div className={style.right}>
        {router &&
          router.length &&
          router.map(
            ({ title, path }) =>
              title && (
                <NavLink
                  className={style.nav}
                  key={path}
                  to={path}
                  activeStyle={{
                    color: "rgba(0, 0, 0, 1)",
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                  }}
                >
                  {title}
                </NavLink>
              )
          )}
      </div>
    </div>
  );
};
export default withRouter(Navbar);
// export default Navbar;
