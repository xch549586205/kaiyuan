//闯关
import Main from "./pages/main";
import Demo from "./pages/demo";

const routes = [
  {
    path: "/main",
    children: [
      {
        path: "/",
        component: Main,
      },
    ],
  },
  {
    path: "/demo",
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
