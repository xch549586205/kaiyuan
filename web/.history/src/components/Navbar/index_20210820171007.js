import style from "./index.less";
import logo from "./images/logo.png";
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.left}>
        <di >
          <img src={logo} alt="logo" />
        </di>
      </div>
      <div className={style.right}></div>
    </div>
  );
};
export default Navbar;
