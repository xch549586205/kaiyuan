//闯关
import Main from "./pages/main";
import Demo from "./pages/demo";

const routes = [
  {
    path: "/",

    redirect: Main,
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
];

export default routes;
