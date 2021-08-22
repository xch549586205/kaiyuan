//闯关
import Main from "./pages/main";
import Demo from "./pages/demo";

const routes = [
  {
    path: "/",
    component: Main,

    // redirect: "buyingTickets",
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
