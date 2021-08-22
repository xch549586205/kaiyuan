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
        title: "扫描结果",
        component: Scan,
      },
      {
        path: "/buyingTickets",
        component: ScanBuyingTickets,
      },
    ],
  },
];

export default routes;
