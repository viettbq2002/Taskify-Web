import MainLayout from "@/layout/main-layout";
import TaskBoardLayout from "@/layout/task-board-layout";
import AllTasks from "@/pages/all-tasks";
import ListDetails from "@/pages/list-details";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    path: "/",
    children: [
      {
        path: "",
        element: <TaskBoardLayout />,
        children: [
          {
            path: "all",
            element: <AllTasks />,
          },
          {
            path: "list/:listId",
            element: <ListDetails />,
          },
        ],
      },
    ],
  },
];

export default routes;
