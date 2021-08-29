import React, { useState } from "react";
import bg from "./images/bg.png";
import style from "./index.less";
import {
  Map,
  APILoader,
  ScaleControl,
  ToolBarControl,
  ControlBarControl,
  Geolocation,
  Marker,
} from "@uiw/react-amap";

const MapAddress = () => (
  <div style={{ width: "100%", height: "100%" }}>
    <Map center={[113.828751, 22.8122]} zoom={15}>
      {({ AMap, map, container }) => {
        console.log("map", map);
        if (map) {
          const marker = new AMap.Marker({
            label: {
              // 设置文本标注偏移量
              offset: new AMap.Pixel(0, -10),
              // 设置文本标注内容
              content: "<div class='info'>东莞市开源化工材料有限公司</div>",
              // 设置文本标注方位
              direction: "top",
            },
            icon: new AMap.Icon({
              imageSize: new AMap.Size(25, 34),
              image:
                "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
            }),
            position: [113.828751, 22.8122],
            offset: new AMap.Pixel(-13, -30),
          });
          marker.setMap(map);
        }
        return;
      }}
    </Map>
  </div>
);
const TechSupport = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  return (
    <div className={style.techSupport}>
      <div className={style.bg} style={{ backgroundImage: `url(${bg})` }}></div>
      <div className={style.content}>
        <div className={style.map}>
          <APILoader akay="abd1d8956d9dec582f62765fce7c4e7f">
            <MapAddress />
          </APILoader>
        </div>
        <div className={style.detail}>
          <p>东莞市开源化工材料有限公司</p>
          <p>DONGGUAN KAIYUAN LUBRICANTS.,LTD</p>
          <p>
            {`地址：东莞市长安镇涌头社区宏业北路10号
           电话：0769-82284408-9
           传真：0769-82284410`}
          </p>
          <p>
            {`厂址：东莞市长安镇涌头工业区
           电话：0789-85390365  85425278
           邮箱：dgkaiyuan@163.com
           网站：www.gslub.com`}
          </p>
        </div>
      </div>
      <div className={style.link}>
        <p>技术支持与服务热线</p>
        <div>
          <div>
            <p>华南、华中地区</p>
            <div>
              {`苏先生 
135-3249-8476`}
            </div>
          </div>
          <div>
            <p>华东、华北地区</p>
            <div>
              {`苏先生
135-3249-8476   
李先生
136-4987-0009 
蒋先生
136-0969-6571`}
            </div>
          </div>
          <div>
            <p>华南、华中地区</p>
            <div>
              {`黄先生
135-9421-4929
苏先生
135-3249-8476 `}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TechSupport;
