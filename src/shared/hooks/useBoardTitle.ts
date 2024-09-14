import { useListByIdQuery } from "@/features/list/queries/list-query";
import { useLocation } from "react-router-dom";

const useBoardTitle = () => {
  const queryList = useListByIdQuery(1);
  const { data: queryResult } = queryList;
  const listDetail = queryResult?.data;
  const allTaskTitle = "All Tasks";
  const location = useLocation();
  const currentPath = location.pathname;
  if (currentPath.includes("list")) {
    return listDetail?.categoryName;
  } else if (currentPath.includes("tag")) {
    return "Tags";
  }
  return allTaskTitle;
};

export default useBoardTitle;
