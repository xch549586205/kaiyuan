import style from "./index.less";
import logo from "./images/logo.png";
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.left}>
          <div>
        <img src={logo} alt="logo" />
        <</div>
      </div>
      <div className={style.right}></div>
    </div>
  );
};
export default Navbar;
