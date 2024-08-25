import MainLayout from "@/layout/main-layout";
import Tasks from "@/pages/tasks";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    path: "/",
    children: [
      {
        path: "all",
        element: <Tasks />,
      },
    ],
  },
];

export default routes;
