//闯关
import Main from "./pages/main";
import Demo from "./pages/demo";

const routes = [
  {
    path: "/main",
    title: "首页", //出现在顶部的导航栏
    children: [
      {
        path: "/",
        component: Main,
      },
    ],
  },
  {
    path: "/demo",
    title: "演示", //出现在顶部的导航栏
    children: [
      {
        path: "/",
        component: Demo,
      },
    ],
  },
  {
    path: "/",
    redirect: "main",
  },
];

export default routes;
