import { createSlice } from '@reduxjs/toolkit';
import { SyphilisExaminationForm } from 'features/outpatientCard/types/syphilisExaminationTypes';
import {
  OutpatientMainInfoForm,
} from 'features/outpatientCard/types/outpatientCardMainInfoTypes';
import { LifeAnamnesisForm } from 'features/outpatientCard/types/lifeAnamnesisTypes';
import { initialSyphilisExamination } from '../syphilisExamination/syphilisExamination';
import { initialLifeAnamnesis } from '../lifeAnamnesis/lifeAnamnesis';
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
}

const initialState: OutpatientCardSliceTabs = {
  isLoading: false,
  tabPane: { editMode: false, formEntityName: '' },
  syphilisExaminationForm: {
    card: [initialSyphilisExamination],
  },
  lifeAnamnesisForm: {
    card: [initialLifeAnamnesis],
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
    getFormData: (state, action) => {
      const prepareData = { ...state[action.payload.formEntityName], ...action.payload.data };
      state[action.payload.formEntityName] = prepareData;
    },
  },
  extraReducers(builder) {
    builder
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
  setEditMode, initOutpatientMainInfo, setTabName, getFormData,
} = outpatientCardSlice.actions;
