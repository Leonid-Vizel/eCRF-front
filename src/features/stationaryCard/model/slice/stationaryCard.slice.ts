import { createSlice } from '@reduxjs/toolkit';

interface StationaryCardSliceTabs {
  cardId?: number
  isLoading: boolean
  tabPane: {
    editMode: boolean;
    formEntityName: string
  };
}

const initialState: StationaryCardSliceTabs = {
  isLoading: false,
  tabPane: { editMode: false, formEntityName: '' },
};

export const stationaryCardSlice = createSlice({
  name: 'stationaryCard',
  initialState,
  reducers: {
    setEditMode: (state, action) => {
      state.tabPane.editMode = action.payload;
    },
    setTabName: (state, action) => {
      state.tabPane.formEntityName = action.payload;
    },
  },
});

export const {
  setEditMode, setTabName,
} = stationaryCardSlice.actions;
