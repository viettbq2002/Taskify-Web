import { QUERY_KEY } from "@/constants/query-key";
import { getAllList, getListById } from "@/features/list/services/list.service";
import { useQuery } from "@tanstack/react-query";

export function useListQuery(isArchived: boolean) {
  return useQuery({
    queryKey: [QUERY_KEY.LISTS, isArchived],
    queryFn: () => getAllList(isArchived),
    staleTime: 5 * 60 * 1000,
  });
}

export function useListByIdQuery(id: number | undefined) {
  return useQuery({
    queryKey: [QUERY_KEY.LIST_DETAIL, id],
    queryFn: () => getListById(Number(id)),
    staleTime: 5 * 60 * 1000,
    enabled: !!id,
  });
}
