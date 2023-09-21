import { createSlice } from '@reduxjs/toolkit';
import { SyphilisExaminationForm } from 'features/outpatientCard/types/syphilisExaminationTypes';
import {
  OutpatientMainInfoForm,
} from 'features/outpatientCard/types/outpatientCardMainInfoTypes';
import { LifeAnamnesisForm } from 'features/outpatientCard/types/lifeAnamnesisTypes';
import { ScreeningVisitForm, ScreeningVisitSchema } from 'features/outpatientCard/types/screeningVisitTypes';
import { getScreeningVisit } from '../screeningVisit/getScreeningVisit';

interface OutpatientCardSliceTabs {
  tabPane: {
    editMode: boolean;
    formEntityName: string
  };
  outpatientMainInfoForm?: OutpatientMainInfoForm;
  syphilisExaminationForm?: SyphilisExaminationForm;
  lifeAnamnesisForm?: LifeAnamnesisForm
  screeningVisitSchema?: ScreeningVisitSchema
  screeningVisitForm?:ScreeningVisitForm
}

const initialState: OutpatientCardSliceTabs = {
  tabPane: { editMode: false, formEntityName: '' },
  syphilisExaminationForm: {
    card: [{}],
  },
  lifeAnamnesisForm: {
    card: [{}],
  },
  screeningVisitForm: {
    card: [],
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
    setFormData: (state, action) => {
      state[action.payload.formEntityName][action.payload.entityName] = [
        {
          ...state[action.payload.formEntityName][action.payload.entityName][0],
          ...action.payload.data,
        },
      ];
    },
    setForm: (state, action) => {
      state[action.payload.formEntityName] = { ...state[action.payload.formEntityName], ...action.payload.data };
    },
  },
  extraReducers(builder) {
    builder.addCase(getScreeningVisit.fulfilled, (state, action) => {
      state.screeningVisitSchema = action.payload;
    });
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

export const {
  setEditMode, createNewCard, setTabName, setFormData, setForm,
} = outpatientCardSlice.actions;
