import { IItem } from "@/features/task/types/task.type";
import { RootState } from "@/lib/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IItemState {
  item: IItem | null;
}
const initialState: IItemState = {
  item: null,
};
const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<IItem | null>) => {
      state.item = action.payload;
    },
  },
});
export const { setItem } = itemSlice.actions;
export const selectItem = (state: RootState) => state.item.item;
export default itemSlice.reducer;
