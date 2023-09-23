import { NestedFields } from 'features/form/types/types';

interface DayBodyInfo {
  date: string
  complaints: string
  systolicPressure: number
  diastolicPressure: number
  heartRate: number
  respiratoryRate: number
  temperature: number
}

interface DayTable {
  isCompleted: boolean
  isNorm: boolean
  isDeviation: boolean
  comment: string
  system: string
}

export interface DayForm {
  cardId: number
  dayNumber: number
  bodyInfo: DayBodyInfo
  table: DayTable
  labInstrumentalInfo: NestedFields[]
  criteriaInfo: NestedFields[]
  visitInfo: NestedFields[]
}
