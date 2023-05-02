import React from "react";
import ListMentor from "./mentors/ListMentor";
import CreateMentor from "./mentors/CreateMentor";
import EditMentor from "./mentors/EditMentor";
import ViewMentor from "./mentors/ViewMentor";

const index = {
  path: "mentors",
  children: [
    {
      index: true,
      element: <ListMentor />,
    },
    {
      path: "create",
      element: <CreateMentor />,
    },
    {
      path: ":id/edit",
      element: <EditMentor />,
    },
    {
      path: ":id",
      element: <ViewMentor />,
    },
  ],
};

export default index;
