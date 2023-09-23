import { FormSchemaItem } from 'features/form/types/types';

export interface ScreeningVisitTable {
  date: string
  place: string
  speciality: string
  result: string
}

export interface ScreeningVisitSchema {
  cardId: number
  data: FormSchemaItem[]
  table: ScreeningVisitTable
}

export interface ScreeningQuestionnary {
  label: string;
  value: {
    [key: string]: unknown | null;
  };
}
export interface ScreeningVisitForm {
  cardId?: number
  data?: ScreeningQuestionnary[]
  card?: ScreeningVisitCard[]
  table?:ScreeningVisitTable[]
}

export interface ScreeningVisitCard {
  dateTime?:string
  agreed?:boolean
  formTime?:string
  form?:boolean
  formEnoughTime?:boolean
  acquaintance?:boolean
  understanding?:boolean
  requirements?:boolean
  questions?:boolean
  fullInfo?:boolean
  fullAgreed?:boolean
  complyWithTheRequirements?:boolean
  contraception?:boolean
  signed2ExamplesDateTime?: string
  signed2Examples?:boolean
  exampleInDocumentation?:boolean
  stacionar?:boolean
  signedForm?:boolean
  agreementOperator?: string
  individualString?: string
  handedPolis?:boolean
  polisCopy?:boolean
  insuranceOrganisationId?:number
}
