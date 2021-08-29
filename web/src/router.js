//闯关
import Main from "./pages/main";
import Culture from "./pages/culture";
import Solution from "./pages/solution";
import TechSupport from "./pages/techSupport";
import ContactUs from "./pages/contactUs";

const routes = [
  {
    path: "/main",
    component: Main,

    title: "首页", //出现在顶部的导航栏
    children: [
      {
        path: "/",
        component: Main,
      },
    ],
  },
  {
    path: "/culture",
    component: Main,

    title: "开源文化", //出现在顶部的导航栏
    children: [
      {
        path: "/",
        component: Culture,
      },
    ],
  },
  {
    path: "/solution",
    component: Main,

    title: "产品解决方案", //出现在顶部的导航栏
    children: [
      {
        path: "/",
        component: Solution,
        param: "index",
      },
    ],
  },
  {
    path: "/techSupport",
    component: Main,

    title: "技术支持", //出现在顶部的导航栏
    children: [
      {
        path: "/",
        component: TechSupport,
      },
    ],
  },
  {
    path: "/contactUs",
    component: Main,
    title: "联系我们", //出现在顶部的导航栏
    children: [
      {
        path: "/",
        component: ContactUs,
      },
    ],
  },
  {
    path: "/",
    redirect: "main",
    component: () => <div></div>,
  },
];

export default routes;
