import { createSlice } from '@reduxjs/toolkit';
import { Dictionary, IDictionaryState } from 'entities/dictionary/types/types';
import { getDictionary } from 'features/dictionary/model/getDictionary';
import { Status } from 'shared/api';

const initialDictionary = {
  data: null,
  status: Status.Init,
};

const initialState:IDictionaryState = {
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
};

export const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getDictionary.pending, (state, action) => {
        state[action.meta.arg.dictionaryName].status = Status.Loading;
      })
      .addCase(getDictionary.fulfilled, (state, action) => {
        state[action.meta.arg.dictionaryName].status = Status.Success;
        state[action.meta.arg.dictionaryName].data = action.payload;
      })
      .addCase(getDictionary.rejected, (state, action) => {
        state[action.meta.arg.dictionaryName].status = Status.Error;
      });
  },
});
