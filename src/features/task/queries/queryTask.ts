import { QUERY_KEY } from "@/constants/query-key";
import { addItem, getAllItems } from "@/features/task/services/task.service";
import { ICreateItem } from "@/features/task/types/task.type";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

export const useQueryTasks = (isArchived: boolean) => {
  return useQuery({
    queryKey: [QUERY_KEY.TASKS, isArchived],
    queryFn: () => getAllItems(isArchived),
    staleTime: 5 * 60 * 1000,
  });
};

export const useCreateItem = () => {
  const queryClient = useQueryClient();
  const [item, setItem] = useState<ICreateItem | null>(null);
  const handleInputChange = (title: string, categoryId?: number) => {
    setItem({ ...item, title, categoryId });
  };
  const handleAddItem = () => {
    if (item === null || item.title.length === 0) return;
    toast.promise(
      addItem(item)
        .then(() => {
          if (item.categoryId) {
            queryClient.invalidateQueries({
              queryKey: [QUERY_KEY.LIST_DETAIL],
            });
            queryClient.invalidateQueries({
              queryKey: [QUERY_KEY.TASKS],
            });
          } else {
            queryClient.invalidateQueries({
              queryKey: [QUERY_KEY.TASKS],
            });
          }
        })
        .finally(() => {
          setItem(null);
        }),
      {
        loading: "Adding item...",
        success: "Item added successfully",
        error: "Failed to add item",
      }
    );
  };
  return {
    item,
    handleInputChange,
    handleAddItem,
  };
};
