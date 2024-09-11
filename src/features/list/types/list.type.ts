import { IBase } from "@/shared/type/base-type";
import { IItem } from "@/features/task/types/task.type";
export interface IList extends IBase {
  isArchived: boolean;
  categoryName: string;
}

export interface IListDetail extends IList {
  items: IItem[];
}
