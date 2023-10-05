import { FormSchemaItem } from 'features/form/types/types';

export interface StationaryCardSecondDayForm {
  stationaryCardId: number
  physycalData: StationaryCardPhysycalData[]
  table: StationaryCardTable[]
  beginningInfo: FormSchemaItem[]
  labAndInstrumentalReseachInfo: FormSchemaItem[]
  factsOfInclusionsInfo: FormSchemaItem[]
  factsOfNonInclusionsInfo: FormSchemaItem[]
  analysisCriteriasInfo: FormSchemaItem[]
}

interface StationaryCardPhysycalData {
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
