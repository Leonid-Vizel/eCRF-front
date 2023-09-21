import { Status } from 'shared/api';

export enum Dictionary {
  Race = 'Race',
  Education = 'Education',
  AllergyType = 'AllergyType',
  BloodGroup = 'BloodGroup',
  ConditionType = 'ConditionType',
  DiagnosisType = 'DiagnosisType',
  DisabilityGroup = 'DisabilityGroup',
  DisabilityType = 'DisabilityType',
  Family = 'Family',
  Hepatitis = 'Hepatitis',
  Locality = 'Locality',
  Pediculosis = 'Pediculosis',
  PhysicalExaminationSystem = 'PhysicalExaminationSystem',
  PregnancyTest = 'PregnancyTest',
  RhFactor = 'RhFactor',
  Scabies = 'Scabies',
  Sex = 'Sex',
  TBS = 'TBS',
  UserRole = 'UserRole',
  VenerealDisease = 'VenerealDisease',
  WeightMeasurementType = 'WeightMeasurementType',
  Work = 'Work',
  InsuranceOrganisation = 'InsuranceOrganisation',
}

export interface DictionaryData {
  value:number,
  label:string
}

export interface IDictionary {
  data:DictionaryData
  status:Status
}

export interface IDictionaryState {
  [Dictionary.Race]?:IDictionary
  [Dictionary.Education]?:IDictionary
  [Dictionary.AllergyType]?:IDictionary
  [Dictionary.BloodGroup]?:IDictionary
  [Dictionary.ConditionType]?:IDictionary
  [Dictionary.DiagnosisType]?:IDictionary
  [Dictionary.DisabilityGroup]?:IDictionary
  [Dictionary.DisabilityType]?:IDictionary
  [Dictionary.Family]?:IDictionary
  [Dictionary.Hepatitis]?:IDictionary
  [Dictionary.Locality]?:IDictionary
  [Dictionary.Pediculosis]?:IDictionary
  [Dictionary.PhysicalExaminationSystem]?:IDictionary
  [Dictionary.PregnancyTest]?:IDictionary
  [Dictionary.RhFactor]?:IDictionary
  [Dictionary.Scabies]?:IDictionary
  [Dictionary.Sex]?:IDictionary
  [Dictionary.TBS]?:IDictionary
  [Dictionary.UserRole]?:IDictionary
  [Dictionary.VenerealDisease]?:IDictionary
  [Dictionary.WeightMeasurementType]?:IDictionary
  [Dictionary.Work]?:IDictionary
  [Dictionary.InsuranceOrganisation]?:IDictionary
}
