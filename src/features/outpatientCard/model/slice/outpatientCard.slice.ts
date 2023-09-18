import { createSlice } from '@reduxjs/toolkit';

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
    patientComplaints: any[];
    externalInspection: any[];
    tongue: any[];
    lips: any[];
    lymph: any[];
    bone: any[];
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
    patientComplaints: [{}],
    externalInspection: [{}],
    tongue: [{}],
    lips: [{}],
    lymph: [{}],
    bone: [{}],
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
