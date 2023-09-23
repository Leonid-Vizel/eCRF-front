export interface OutpatientPhone {
  phone?: string;
  comment?: string;
}

export interface OutpatientDiagnosis {
  date?: string;
  text?: string;
  type?: number;
  doctor?: string;
}

export interface OutpatientDisease {
  date?: string;
  endDate?: string;
  diagnosis?: string;
  icbCode?: string;
  doctor?: string;
}

export interface OutpatientMainInfo {
  createDate: string;
  firstName: string;
  surName: string;
  patronymic: string;
  insuranceOrganisationId?: number;
  russiaSubjectId?: number;
  sex?: number;
  birthDate?: string;
  district?: string;
  city?: string;
  community?: string;
  street?: string;
  house?: string;
  building?: string;
  flat?: string;
  locality?: number;
  chIseries?: string;
  chInumber?: string;
  snils?: string;
  benefitCategoryCode?: string;
  documentName?: string;
  documentSeries?: string;
  documentNumber?: string;
}

export interface OutpatientMainInfoPersonal {
  family?: number;
  education?: number;
  work?: number;
  disabilityType?: number;
  disabilityGroup?: number;
  disabilityDate?: string;
  workPlace?: string;
  workPosition?: string;
  workPlaceChange?: string;
  registrationPlaceChange?: string;
  bloodGroup?: number;
  rhFactor?: number;
  allergicReactions?: string;
}

export interface OutpatientHeaderInfo {
  pediculosis?: number;
  scabies?: number;
  tbs?: number;
  hepatitis?: number;
  venerealDisease?: number;
  randomState?: number;
  randomNumber?: string;
}

export interface OutpatientAdditionalInfo {
  race?: number;
  otherRace?: string;
  patientDate?: string;
  patientDiagnosis?: string;
  patientPath?: string;
}

export interface OutpatientMainInfoForm {
  protocolId: number;
  disease: OutpatientDisease[];
  diagnosis: OutpatientDiagnosis[]
  mainInfoPersonal: OutpatientMainInfoPersonal[];
  mainInfo: OutpatientMainInfo[];
  headerInfo: OutpatientHeaderInfo[]
  additionalInfo: OutpatientAdditionalInfo[]
  phones: OutpatientPhone[]
}
