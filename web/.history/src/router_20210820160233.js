import Tickets from "./page/BuyingTickets";

//闯关
import Main from "./pages/Stage";

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
      {
        path: "/buyingTickets",
        component: ScanBuyingTickets,
      },
    ],
  },
  // {
  //   path: "/scan",
  //   children: [
  //     {
  //       path: "/",
  //       title: "扫描结果",
  //       component: Scan,
  //     },
  //     {
  //       path: "/buyingTickets",
  //       component: ScanBuyingTickets,
  //     },
  //   ],
  // },
];

export default routes;
