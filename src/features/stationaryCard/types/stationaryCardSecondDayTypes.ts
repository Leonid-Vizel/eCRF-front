import { FormSchemaItem } from 'features/form/types/types';

export interface StationaryCardSecondDayForm {
  stationaryCardId: number
  beginningInfo: FormSchemaItem[]
  inspectionMinus1Data: StationaryCardInspection[]
  tableMinus1: StationaryCardTable[]
  criteriaInfo: FormSchemaItem[]
  inspection1To12Info: FormSchemaItem[]
  tablePlus12: StationaryCardTable[]
  inspection24Info: FormSchemaItem[]
  tablePlus24: StationaryCardTable[]
  endingInfo: FormSchemaItem[]
  visitInfo: FormSchemaItem[]
}

interface StationaryCardInspection {
  systolicPressure: number
  diastolicPressure: number
  heartRate: number
  respiratoryRate: number
  temperature: number
  comments: string
}

interface StationaryCardTable {
  isCompleted: boolean
  isNorm: boolean
  isDeviation: boolean
  comment: string
  system: string
}
