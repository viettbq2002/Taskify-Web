import { IBase } from "@/shared/type/base-type";

export interface IItem extends IBase {
  title: string;
  note?: string;
  isCompleted: boolean;
  isArchived: boolean;
  categoryName?: string;
  dueDate?: Date;
  subItems: SubItem[];
}

export interface SubItem extends IBase {
  title: string;
  isCompleted: boolean;
}

export interface ICreateItem {
  title:string;
  categoryId?: number;
  tagId?: number;
}
