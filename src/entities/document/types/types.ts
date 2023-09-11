export interface ICard {
  createDate:string
  firstName:string
  secondName:string
  thirdName:string
  randomState:number
  randomNumber:string
  sex:number
  birthDate:string
  subject:string
  district:string
  city: string
  community: string
  street: string
  house: string
  flat: string
  locality: number
  chIseries: string
  chInumber: string
  snils: string
  benefitCategoryCode: string
  documentName: string
  documentSeries: string
  documentNumber: string
  family: number
  education: number
  work: number
  disabilityType: number
  disabilityGroup: number
  disabilityDate: string
  workPlace: string
  workPosition: string
  workPlaceChange: string
  registrationPlaceChange: string
  bloodGroup: number
  rhFactor: number
  allergicReactions: string
  checkupDate: string
  checkupLocation: number
  pediculosis: number
  scabies: number
  tbs: number
  hepatitis: number
  venerealDisease: number
  doctor: string
  race: string
  otherRace: string
  patientDate: string
  patientDiagnosis: string
  patientPath: string
  id: number
  protocol:{
    id:number
  }
}
