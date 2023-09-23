import { NestedFields } from 'features/form/types/types';

interface PhysicalExaminationBodyInfo {
  weight: number
  weightMeasurement: number
  height: number
  systolicPressure: number
  diastolicPressure: number
  heartRate: number
  respiratoryRate: number
  temperature: number
  complaints: string
}

interface PhysicalExaminationTable {
  isCompleted: boolean
  isNorm: boolean
  isDeviation: boolean
  comment: string
  system: string
}

export interface PhysicalExaminationForm {
  cardId: number
  bodyInfo: PhysicalExaminationBodyInfo[]
  table: PhysicalExaminationTable[]
  instrumentalInfo:NestedFields[]
  labInfo:NestedFields[]
  labTable: PhysicalExaminationTable[]
  ecgFileLoaded:boolean
}
