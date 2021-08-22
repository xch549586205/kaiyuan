import Tickets from "./page/BuyingTickets";

//闯关
import StageNavigation from "./pages/Stage";

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
        title: "扫描结果",
        component: Scan,
      },
      {
        path: "/buyingTickets",
        component: ScanBuyingTickets,
      },
    ],
  }
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
