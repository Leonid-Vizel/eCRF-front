import { createSlice } from '@reduxjs/toolkit';
import { StationaryCardMainInfoForm } from 'features/stationaryCard/types/stationaryCardMainInfoTypes';
import { getStationaryCard } from '../lib/getStationaryCardAction';
import { modifyStationaryCard } from '../lib/modifyStationaryCardAction';

interface StationaryCardSliceTabs {
  cardId?: number
  isLoading: boolean
  tabPane: {
    editMode: boolean;
    formEntityName: string
  };
  stationaryMainInfoForm?: StationaryCardMainInfoForm
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
    getFormData: (state, action) => {
      const prepareData = { ...state[action.payload.formEntityName], ...action.payload.data };
      state[action.payload.formEntityName] = prepareData;
    },
    // initStationaryMainInfo: (state, action) => {
    // const prepareForm = {
    //   ...state.outpatientMainInfoForm,
    //   protocolId: Number(action.payload),
    //   deseases: [{}],
    //   mainInfoPersonal: [{}],
    //   mainInfo: [{}],
    //   additionalInfo: [{}],
    //   diagnosis: [{}],
    //   disease: [{}],
    //   headerInfo: [{}],
    //   phones: [{}],
    // };
    // state.outpatientMainInfoForm = prepareForm as any;
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(getStationaryCard.fulfilled, (state, action) => {
        state.stationaryMainInfoForm = action.payload;
      })
      .addCase(modifyStationaryCard.fulfilled, (state, action) => {
        state.stationaryMainInfoForm = action.payload;
      });
  },
});

export const {
  setEditMode, setTabName, getFormData,
} = stationaryCardSlice.actions;
