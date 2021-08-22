//闯关
import Main from "./pages/main";

const routes = [
  {
    path: "/",

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
