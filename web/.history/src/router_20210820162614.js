//闯关
import Main from "./pages/main";
import Deain from "./pages/demo";

const routes = [
  {
    path: "/",
    component: Main,

    // redirect: "buyingTickets",
  },
  {
    path: "/scan",
    children: [
      {
        path: "/",
        component: Main,
      },
     
    ],
  },
];

export default routes;
