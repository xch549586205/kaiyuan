import style from "./index.less";
import logo from "./images/logo.png";
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.left}>
        <di className={style.logo}>
          <img src={logo} alt="logo" />
        </di>
        <div >开源化工材料</div>
      </div>
      <div className={style.right}></div>
    </div>
  );
};
export default Navbar;
