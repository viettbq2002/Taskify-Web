import { ICreateItem, IItem } from "@/features/task/types/task.type";
import apiClient from "@/lib/api-client";
import { IResponse } from "@/shared/type/base-type";
const base = "/items";

export const getAllItems = async (isArchived: boolean) => {
  const response = await apiClient.get<IResponse<IItem[]>>(base, {
    params: {
      isArchived,
    },
  });
  return response.data;
};

export const addItem = async (item: ICreateItem) => { 
  const response = await apiClient.post<IItem>(base, item);
  return response.data;
}