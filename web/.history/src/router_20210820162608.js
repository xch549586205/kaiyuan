//闯关
import Main from "./pages/main";
import Main from "./pages/demop";

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
