import React, { useState } from "react";
import bg from "./images/bg.png";

import style from "./index.less";
const TechSupport = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={style.techSupport}>
      <div className={style.bg} style={{ backgroundImage: `url(${bg})` }}></div>
      <div className={style.content}>
        <div className={style.title}></div>
      </div>
    </div>
  );
};
export default TechSupport;
