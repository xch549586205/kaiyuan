import style from "./index.less";
import logo from "./images/logo.png";
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.left}>
        <img src={logo} alt="logo" />
      </div>
      <div className={style.right}></div>
    </div>
  );
};
export default Navbar;
