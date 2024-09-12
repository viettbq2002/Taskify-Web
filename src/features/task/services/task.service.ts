import { IItem } from "@/features/task/types/task.type";
import apiClient from "@/lib/api-client";
import { IResponse } from "@/shared/type/base-type";
const base = "/items";
export const getAllItems = async () => {
  const response = await apiClient.get<IResponse<IItem[]>>(base);
  return response.data;
};
