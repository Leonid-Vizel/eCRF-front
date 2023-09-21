import { createSlice } from '@reduxjs/toolkit';
import { SyphilisExaminationForm } from 'features/outpatientCard/types/syphilisExaminationTypes';
import {
  OutpatientMainInfoForm,
} from 'features/outpatientCard/types/outpatientCardMainInfoTypes';
import { LifeAnamnesisForm } from 'features/outpatientCard/types/lifeAnamnesisTypes';
import { ScreeningVisitForm, ScreeningVisitSchema } from 'features/outpatientCard/types/screeningVisitTypes';
import { getScreeningVisit } from '../screeningVisit/getScreeningVisit';
import { createNewOutpatientCard } from '../lib/createOutpatientCardAction';

interface OutpatientCardSliceTabs {
  isLoading: boolean
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
  isLoading: false,
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
    initOutpatientMainInfo: (state, action) => {
      const prepareForm = {
        ...state.outpatientMainInfoForm,
        protocolId: Number(action.payload),
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
    getFormData: (state, action) => {
      const prepareData = { ...state[action.payload.formEntityName], ...action.payload.data };
      state[action.payload.formEntityName] = prepareData;
    },
  },
  extraReducers(builder) {
    builder
    .addCase(getScreeningVisit.fulfilled, (state, action) => {
      state.screeningVisitSchema = action.payload;
    })
    .addCase(createNewOutpatientCard.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(createNewOutpatientCard.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(createNewOutpatientCard.rejected, (state) => {
      state.isLoading = false;
    }); 
  },
});

export const outpatientCardReducer = outpatientCardSlice.reducer;

export const {
  setEditMode, initOutpatientMainInfo, setTabName, getFormData, setFormData, setForm,
} = outpatientCardSlice.actions;
