import React from "react";
import BackgroundLayout from "../layouts/BackgroundLayout.jsx";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import authroutes from "./auth/index.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";
import publicroutes from "./public/index.jsx";
import adminroutes from "./dashboard/index.jsx";
let element = [
  {
    element: <BackgroundLayout />,
    children: [
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          ...publicroutes,
          adminroutes,
        ],
      },
      authroutes,
    ],
  },
];

export default element;
