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
  YesNo = 'YesNo',
  InsuranceOrganisation = 'InsuranceOrganisation',
  OtherTreatments = 'OtherTreatments',
  TransportationType = 'TransportationType',
  RussiaSubject = 'RussiaSubject',
  StationaryReason = 'StationaryReason',
  StationaryEmergencyReason = 'StationaryEmergencyReason',
  StationaryHospitalisation = 'StationaryHospitalisation',
  DiseaseOutcome = 'DiseaseOutcome',
  WorkAbility = 'WorkAbility',
}

export interface DictionaryData {
  value:number,
  label:string
}

export interface DictionaryModel {
  data: DictionaryData[]
}

export interface IExternalDictionary extends DictionaryModel {
  status?: Status
}

export interface TreeDictionaryModel {
  value: number
  title: string
  chilren?: TreeDictionaryModel[]
}

export interface TreeDictionary {
  status: Status
  data: TreeDictionaryModel[]
}

export interface IDictionaryState {
  [Dictionary.Race]?:IExternalDictionary
  [Dictionary.Education]?:IExternalDictionary
  [Dictionary.AllergyType]?:IExternalDictionary
  [Dictionary.BloodGroup]?:IExternalDictionary
  [Dictionary.ConditionType]?:IExternalDictionary
  [Dictionary.DiagnosisType]?:IExternalDictionary
  [Dictionary.DisabilityGroup]?:IExternalDictionary
  [Dictionary.DisabilityType]?:IExternalDictionary
  [Dictionary.Family]?:IExternalDictionary
  [Dictionary.Hepatitis]?:IExternalDictionary
  [Dictionary.Locality]?:IExternalDictionary
  [Dictionary.Pediculosis]?:IExternalDictionary
  [Dictionary.PhysicalExaminationSystem]?:IExternalDictionary
  [Dictionary.PregnancyTest]?:IExternalDictionary
  [Dictionary.RhFactor]?:IExternalDictionary
  [Dictionary.Scabies]?:IExternalDictionary
  [Dictionary.Sex]?:IExternalDictionary
  [Dictionary.TBS]?:IExternalDictionary
  [Dictionary.UserRole]?:IExternalDictionary
  [Dictionary.VenerealDisease]?:IExternalDictionary
  [Dictionary.WeightMeasurementType]?:IExternalDictionary
  [Dictionary.Work]?:IExternalDictionary
  [Dictionary.YesNo]?: DictionaryModel
  [Dictionary.InsuranceOrganisation]?:IExternalDictionary
  [Dictionary.OtherTreatments]?: TreeDictionary
  [Dictionary.TransportationType]?: IExternalDictionary
  [Dictionary.RussiaSubject]?: IExternalDictionary
  [Dictionary.StationaryReason]?: IExternalDictionary
  [Dictionary.StationaryEmergencyReason]?: IExternalDictionary
  [Dictionary.StationaryHospitalisation]?: IExternalDictionary
  [Dictionary.DiseaseOutcome]?: IExternalDictionary
  [Dictionary.WorkAbility]?: IExternalDictionary
}
