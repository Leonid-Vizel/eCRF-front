import { createSlice } from '@reduxjs/toolkit';
import { SyphilisExaminationCard } from 'features/outpatientCard/types/types';
import {
  OutpatientMainInfoForm,
} from 'features/outpatientCard/types/outpatientCardMainInfoTypes';
import { initialSyphilisExamination } from '../syphilisExamination/syphilisExamination';

interface OutpatientCardSliceTabs {
  tabPane: {
    editMode: boolean;
    formEntityName: string
  };
  outpatientMainInfoForm?: OutpatientMainInfoForm;
  syphilisExaminationForm: {
    card:SyphilisExaminationCard[];
  };
}

const initialState: OutpatientCardSliceTabs = {
  tabPane: { editMode: false, formEntityName: '' },
  syphilisExaminationForm: {
    card: [initialSyphilisExamination],
  },
};

export const outpatientCardSlice = createSlice({
  name: 'outpatientCard',
  initialState,
  reducers: {
    setEditMode: (state, action) => {
      state.tabPane.editMode = action.payload;
    },
    setTabName: (state, action) => {
      state.tabPane.formEntityName = action.payload;
    },
    createNewCard: (state, action) => {
      const prepareForm = {
        ...state.outpatientMainInfoForm,
        protocolid: action.payload,
        deseases: [{}],
        mainInfoPersonal: [{}],
        mainInfo: [{}],
        additionalInfo: [{}],
        diagnosis: [{}],
        disease: [{}],
        headerInfo: [{}],
        phones: [{}],
      };
      state.outpatientMainInfoForm = prepareForm as any;
    },
  },
  // extraReducers(builder) {
  //   builder
  //     .addCase(getOutpatientCards.pending, (state) => {
  //       state.status = Status.Loading;
  //     })
  //     .addCase(getOutpatientCards.fulfilled, (state, action) => {
  //       state.status = Status.Success;
  //       const cards = action.payload.map((card) => ({ key: card.id, ...card }));
  //       state.cardslist = action.payload;
  //       state.cardslist = cards;
  //     })
  //     .addCase(getOutpatientCards.rejected, (state) => {
  //       state.status = Status.Error;
  //     });
  // },
});

export const outpatientCardReducer = outpatientCardSlice.reducer;

export const { setEditMode, createNewCard, setTabName } = outpatientCardSlice.actions;
