import { IBase } from "@/shared/type/base-type";

export interface IItem extends IBase {
  title: string;
  note?: string;
  isCompleted: boolean;
  isArchived: boolean;
  dueDate?: Date;
  subItems: SubItem[];
}

export interface SubItem extends IBase {
  title: string;
  isCompleted: boolean;
}
