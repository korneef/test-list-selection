import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid';

interface IList {
  items: IItem[],
  selectedItems: IItem[],
  history: IHistoryItem[],
}

interface IHistoryItem {
  key: string,
  name: string,
  type: 'add' | 'delete',
  date: string
}

export interface IItem {
  key: string,
  name: string,
  top_subjects: string[],
}

const initialState: IList = {
  items: [],
  selectedItems: [],
  history: [],
}

export const listSlice = createSlice({
  name: 'listSlice',
  initialState,
  reducers: {
    createList: (state, action: PayloadAction<IItem[]>) => {
      state.items = action.payload;
      return state;
    },
    selectItem: (state, action: PayloadAction<IItem>) => {
      const index = state.items.findIndex(item => item.key === action.payload.key);
      if (index === -1) return state;
      state.selectedItems.push(action.payload);
      state.items.splice(index, 1);
      return state;
    },
    unSelectItem: (state, action: PayloadAction<IItem>) => {
      const index = state.selectedItems.findIndex(item => item.key === action.payload.key);
      if (index === -1) return state;
      state.items.push(action.payload);
      state.selectedItems.splice(index, 1);
      return state;
    },
    addHistory: (state, action: PayloadAction<{ name: string, type: 'add' | 'delete'}>) => {
      state.history.push({...action.payload, date: new Date().toLocaleString(), key: nanoid()})
      return state;
    }
  }
})

export const {
  createList,
  selectItem,
  unSelectItem,
  addHistory
} = listSlice.actions

export default listSlice.reducer;