//闯关
import Main from "./pages/main";

const routes = [
  {
    path: "/",

    // redirect: "buyingTickets",
  },
  {
    path: "/",
    component: Main,
  },
  {
    path: "/scan",
    children: [
      {
        path: "/",
        component: Main,
      },
      {
        path: "/buyingTickets",
        component: ScanBuyingTickets,
      },
    ],
  },
];

export default routes;
