import Tickets from "./page/BuyingTickets";

//闯关
import StageNavigation from "./pages/Stage";

const routes = [
  {
    path: "/",
    // redirect: "buyingTickets",
  },
  {
    path: "/buyingTickets",
    children: [
      {
        path: "/",
        title: "绿博园消防体验馆",
        component: Tickets,
      },
      {
        path: "/ticket/:id",
        title: "订单填写",
        component: BuyingTickets,
      },
      {
        path: "/notice/:id",
        title: "订票须知",
        component: BuyingTicketsNotice,
      },
      {
        path: "/detail/:id",
        title: "展馆介绍",
        component: BuyingTicketsDetail,
      },
    ],
  },
  {
    path: "/stage",
    children: [
      {
        //关卡导航
        path: "/",
        component: StageNavigation,
      },
      {
        path: "/notice",
        component: BuyingTicketsNotice,
      },
      {
        path: "/detail",
        component: BuyingTicketsDetail,
      },
    ],
  },
  {
    path: "/personalCenter",
    children: [
      {
        path: "/",
        title: "我的订单",
        component: PersonalCenter,
      },
      {
        path: "/ticketInfo/:id",
        component: PersonalCenterTicketInfo,
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
