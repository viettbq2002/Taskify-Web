import { IList, IListDetail } from "@/features/list/types/list.type";
import apiClient from "@/lib/api-client";
import { IResponse } from "@/shared/type/base-type";

export const getAllList = async (isArchived: boolean) => {
  const response = await apiClient.get<IResponse<IList[]>>("/categories", {
    params: {
      isArchived,
    },
  });
  return response.data;
};

export const getListById = async (id: number) => {
  const response = await apiClient.get<IResponse<IListDetail>>(`/categories/${id}`);
  return response.data;
};

