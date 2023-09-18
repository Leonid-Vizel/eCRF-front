import { createSlice } from '@reduxjs/toolkit';

interface OutpatientDispansaryObservation {
  dispensaryObservationStartDate: string;
  dispensaryObservationEndDate: string;
  diagnosis: string;
  icbCode: string;
  doctor: string;
}

interface OutpatientCardSliceTabs {
  tabPane: {
    editMode: boolean;
  };
  outpatientMainInfoForm: {
    outpatientDispansaryObservation?: OutpatientDispansaryObservation[];
    mainInfoPersonal: any[];
    mainInfo: any[];
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
    outpatientDispansaryObservation: [
      {
        dispensaryObservationStartDate: '',
        dispensaryObservationEndDate: '',
        diagnosis: 'asdsad',
        icbCode: 'asdsad',
        doctor: 'asdsad',
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
