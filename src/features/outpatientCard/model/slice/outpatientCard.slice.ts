import { createSlice } from '@reduxjs/toolkit';
import { SyphilisExaminationCard } from 'features/outpatientCard/types/types';
import { initialSyphilisExamination } from '../syphilisExamination/syphilisExamination';

interface OutpatientDeseases {
  date: string;
  endDate: string;
  diagnosis: string;
  icbCode: string;
  doctor: string;
}

interface OutpatientDiagnosis {
  date: string;
  text: string;
  type: string;
  doctor: string;
}

interface OutPatientMainInfo {
  surName : string ;
  firstName : string;
  patronymic: string;
  createDate: Date;
  sex: string;
  birthDate: string;
  chIseries: string;
  chInumber: string;
  snils: string;
  insuranceOrganisationId: string;
  benefitCategoryCode: string;
  documentName: string;
  documentSeries: string;
  documentNumber: string;
}

// todo протипизировать и вынести в types

interface OutpatientCardSliceTabs {
  tabPane: {
    editMode: boolean;
  };
  outpatientMainInfoForm: {
    deseases?: OutpatientDeseases[];
    diagnosis?: OutpatientDiagnosis[]
    mainInfoPersonal?: any[];
    mainInfo?: any[];
  };
  syphilisExaminationForm: {
    card:SyphilisExaminationCard[];
  };
}

const initialState: OutpatientCardSliceTabs = {
  tabPane: { editMode: false },
  outpatientMainInfoForm: {
    deseases: [
      {
        date: '',
        endDate: '',
        diagnosis: '',
        icbCode: '',
        doctor: '',
      },
    ],
    mainInfoPersonal: [{}],
    mainInfo: [{}],
  },
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
    addDispanseryTableRow: (state) => {
      // state.outpatientDispansaryObservation.push();
    },
  },
});

export const outpatientCardReducer = outpatientCardSlice.reducer;

export const { setEditMode, addDispanseryTableRow } = outpatientCardSlice.actions;
