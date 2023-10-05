import { createSlice } from '@reduxjs/toolkit';
import { Dictionary, IDictionaryState } from 'entities/dictionary/types/types';
import { getExternalDictionary } from 'features/dictionary/model/getDictionary';
import { LocalDictionary } from 'features/dictionary/model/localDictionaries';
import { Status } from 'shared/api';

const initialDictionary = {
  data: null,
  status: Status.Init,
};

export const localDictionaries = Object.keys(LocalDictionary);

const initialState: IDictionaryState = {
  [Dictionary.Race]: initialDictionary,
  [Dictionary.Education]: initialDictionary,
  [Dictionary.AllergyType]: initialDictionary,
  [Dictionary.BloodGroup]: initialDictionary,
  [Dictionary.ConditionType]: initialDictionary,
  [Dictionary.DiagnosisType]: initialDictionary,
  [Dictionary.DisabilityGroup]: initialDictionary,
  [Dictionary.DisabilityType]: initialDictionary,
  [Dictionary.Family]: initialDictionary,
  [Dictionary.Hepatitis]: initialDictionary,
  [Dictionary.Locality]: initialDictionary,
  [Dictionary.Pediculosis]: initialDictionary,
  [Dictionary.PhysicalExaminationSystem]: initialDictionary,
  [Dictionary.PregnancyTest]: initialDictionary,
  [Dictionary.RhFactor]: initialDictionary,
  [Dictionary.Scabies]: initialDictionary,
  [Dictionary.Sex]: initialDictionary,
  [Dictionary.TBS]: initialDictionary,
  [Dictionary.UserRole]: initialDictionary,
  [Dictionary.VenerealDisease]: initialDictionary,
  [Dictionary.WeightMeasurementType]: initialDictionary,
  [Dictionary.Work]: initialDictionary,
  [Dictionary.InsuranceOrganisation]: initialDictionary,
  [Dictionary.OtherTreatments]: initialDictionary,
  [Dictionary.TransportationType]: initialDictionary,
  [Dictionary.RussiaSubject]: initialDictionary,
  [Dictionary.StationaryReason]: initialDictionary,
  [Dictionary.StationaryEmergencyReason]: initialDictionary,
  [Dictionary.StationaryHospitalisation]: initialDictionary,
  [Dictionary.DiseaseOutcome]: initialDictionary,
  [Dictionary.WorkAbility]: initialDictionary,
  [Dictionary.COVIDExpressTest]: initialDictionary,
  [Dictionary.RandomState]: initialDictionary,
};

export const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    setLocalDictionary: (state, action) => {
      state[action.payload] = { data: LocalDictionary[action.payload] };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getExternalDictionary.pending, (state, action) => {
        state[action.meta.arg.dictionaryName].status = Status.Loading;
      })
      .addCase(getExternalDictionary.fulfilled, (state, action) => {
        state[action.meta.arg.dictionaryName].status = Status.Success;
        state[action.meta.arg.dictionaryName].data = action.payload;
      })
      .addCase(getExternalDictionary.rejected, (state, action) => {
        state[action.meta.arg.dictionaryName].status = Status.Error;
      });
  },
});

export const { setLocalDictionary } = dictionarySlice.actions;
