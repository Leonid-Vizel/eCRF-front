import { createSlice } from '@reduxjs/toolkit';
import { SyphilisExaminationForm } from 'features/outpatientCard/types/syphilisExaminationTypes';
import {
  OutpatientMainInfoForm,
} from 'features/outpatientCard/types/outpatientCardMainInfoTypes';
import { LifeAnamnesisForm } from 'features/outpatientCard/types/lifeAnamnesisTypes';
import { ScreeningVisitForm, ScreeningVisitSchema } from 'features/outpatientCard/types/screeningVisitTypes';
import { getScreeningVisit } from '../lib/getScreeningVisitAction';
import { createNewOutpatientCard } from '../lib/createOutpatientCardAction';
import { modifySyphilisExamination } from '../lib/modifySyphilisExaminationAction';
import { getOutpatientCard } from '../lib/getOutpatientCardAction';
import { getSyphilisExamination } from '../lib/getSyphilisExaminationAction';
import { getLifeAnamnesis } from '../lib/getLifeAnamnesisAction';
import { modifyLifeAnamnesis } from '../lib/modifyLifeAnamnesisAction';
import { modifyScreeningVisit } from '../lib/modifyScreeningVisitAction';

interface OutpatientCardSliceTabs {
  cardId?: number
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
      .addCase(createNewOutpatientCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cardId = action.payload.id;
      })
      .addCase(createNewOutpatientCard.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(modifySyphilisExamination.fulfilled, (state, action) => {
        state.syphilisExaminationForm = action.payload;
      })
      .addCase(getOutpatientCard.fulfilled, (state, action) => {
        state.outpatientMainInfoForm = action.payload;
        state.cardId = action.payload.id;
      })
      .addCase(getSyphilisExamination.fulfilled, (state, action) => {
        state.syphilisExaminationForm = action.payload;
      })
      .addCase(getLifeAnamnesis.fulfilled, (state, action) => {
        state.lifeAnamnesisForm = action.payload;
      })
      .addCase(modifyLifeAnamnesis.fulfilled, (state, action) => {
        state.lifeAnamnesisForm = action.payload;
      })
      .addCase(modifyScreeningVisit.fulfilled, (state, action) => {
        state.screeningVisitForm = action.payload;
      });
  },
});

export const outpatientCardReducer = outpatientCardSlice.reducer;

export const {
  setEditMode, initOutpatientMainInfo, setTabName, getFormData, setFormData, setForm,
} = outpatientCardSlice.actions;