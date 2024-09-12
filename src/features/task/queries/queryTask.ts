import { QUERY_KEY } from "@/constants/query-key";
import { getAllItems } from "@/features/task/services/task.service";
import { useQuery } from "@tanstack/react-query";

export const useQueryTasks = (isArchived: boolean) => {
  return useQuery({
    queryKey: [QUERY_KEY.TASKS, isArchived],
    queryFn: () => getAllItems(isArchived),
    staleTime: 5 * 60 * 1000,
  });
};
