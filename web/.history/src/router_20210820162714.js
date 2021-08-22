//闯关
import Main from "./pages/main";
import Demo from "./pages/demo";

const routes = [
  {
    path: "/",
    component: Main,

    redirect: "main",
  },
  {
    path: "/main",
    children: [
      {
        path: "/",
        component: Main,
      },
    ],
  },
];

export default routes;
