import { ICenter } from 'entities/center';

export interface IBase {
  id:number
}

export interface IVolonteerInfo {
  firstName:string
  secondName:string
  thirdName:string
}

export interface ICardCreatedDate {
  createDate:string
}

export interface IDiseasesInfo {
  pediculosis: number
  scabies: number
  tbs: number
  hepatitis: number
  venerealDisease: number
}

export interface IPersonalInfo {
  sex:number
  birthDate:string
}

export interface IRedistrationPlaceInfo {
  subject:string
  district:string
  city: string
  community: string
}
export interface ILocationInfo {
  street: string
  house: string
  flat: string
  locality: number
}

export interface IInsuranceInfo {
  chIseries: string
  chInumber: string
  snils: string
}

export interface IBenefitInfo {
  benefitCategoryCode: string
}

export interface IDocumentInfo {
  documentName: string
  documentSeries: string
  documentNumber: string
}

export interface IDisabilityInfo {
  disabilityType: number
  disabilityGroup: number
  disabilityDate: string
}

export interface IWorkInfo {
  workPlace: string
  workPosition: string
}

export interface IBloodInfo {
  bloodGroup: number
  rhFactor: number
  allergicReactions: string
}

export interface ICheckupInfo {
  checkupDate: string
  checkupLocation: number
}

export interface IDoctorInfo {
  doctor: string
}

export interface IRaceInfo {
  race:string
  otherRace: string
}

export interface ILifeInfo {
  family: number
  education: number
  work: number
}

export interface IWorkPlaceChangeInfo {
  workPlaceChange: string
  registrationPlaceChange: string
}

export interface IDiagnosisInfo {
  patientDiagnosis: string
}

export interface IPatientPathInfo {
  patientPath: string
}

export interface IPatientDate {
  patientDate: string
}

export interface ICard extends
  IBase,
  IVolonteerInfo,
  ICardCreatedDate,
  IDiseasesInfo,
  IPersonalInfo,
  IRedistrationPlaceInfo,
  ILocationInfo,
  IInsuranceInfo,
  IBenefitInfo,
  IDocumentInfo,
  IDisabilityInfo,
  IWorkInfo,
  IBloodInfo,
  ICheckupInfo,
  IDoctorInfo,
  IRaceInfo,
  ILifeInfo,
  IWorkPlaceChangeInfo,
  IDiagnosisInfo,
  IPatientPathInfo,
  IPatientDate {
  randomState:number
  randomNumber:string
  patientDate: string
  protocol:IProtocol
  internalId:number
  deseases:IDesease[]
  diagnosis:IDiagnosis[]
  phones:IPhone[]
  insurance:IInsurance
}

export interface IProtocol extends IBase {
  name:string
  number:string
  status:number
  centerId:number
  center:ICenter
  blocks:IBlock[]
  subjects:ISubject[]
}

export interface IBlock extends IBase {
  customName:string
  protocolId:number
  protocol:string
  blockId:number
  block:{
    id:number
    name:string
    multiBlock:boolean
    subBlocks:ISubBlock[]
  }
  order:number
}

export interface ISubBlock extends IBase {
  name:string
  order:number
  blockId:number
  block:string
  properties:IProperty[]
}

export interface IProperty extends IBase {
  name:string
  comment:string
  nameDisplayMode:number
  order:number
  blockId:number
  block:string
  fields:IField[]
  texts:IText[]
  children:IChildren[]
}

export interface IField extends IBase {
  name:string
  type:number
  required:boolean
  order:number
  propertyId:number
  property:string
  variants:IVariant[]
  valueConditions:IValueCondition[]
  referenceConditions:IReferenceCondition[]
  colorConditions:IColorCondition[]
}

export interface IVariant extends IBase {
  name:string
  fieldId:number
  field:string
  order:number
}

export interface IValueCondition extends IBase {
  name:string
  error:string
  type:number
  value:string
  validationFieldId:number
  validationField:string
}

export interface IReferenceCondition extends IValueCondition {
  referenceFieldId:number
  referenceField:string
}

export interface IColorCondition extends IBase {
  name:string
  value:string
  class:string
  type:number
  fieldId:number
  field:string
  joinConditionId:number
  joinCondition:string
}

export interface IText extends IBase {
  name:string
  propertyId:number
  property:string
  order:number
}

export interface IChildren {
  order:number
}

export interface ISubject extends IBase {
  screeningNumber:number
  initials:string
  randomNumber:string
  protocolId:number
  protocol:string
}

export interface IDesease extends IBase {
  date:string
  endDate:string
  diagnosis:string
  code:string
  doctor:string
}

export interface IDiagnosis extends IBase {
  date:string
  text:string
  type:number
  doctor:string

}

export interface IPhone extends IBase {
  phone:string
  comment:string
}

export interface IInsurance extends IBase {
  name:string
}
