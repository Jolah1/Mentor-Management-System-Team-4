import React from "react";
import Profile from "./Profile";
import Settings from "./settings/Settings";

export default [
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
];
