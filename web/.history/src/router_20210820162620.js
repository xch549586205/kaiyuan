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
    path: "/Demo",
    children: [
      {
        path: "/",
        component: Main,
      },
    ],
  },
];

export default routes;
