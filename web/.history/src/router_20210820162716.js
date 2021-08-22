//闯关
import Main from "./pages/main";
import Demo from "./pages/demo";

const routes = [
  {
    path: "/",

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
