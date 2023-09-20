export interface LifeAnamnesisCard {
  anamnesis?:string
  medicalAnamnesis?:string
  pharmacologicalAnamnesis?:string
  foodAllergies:boolean
  foodAllergiesString?:string
  drugAllergies:boolean
  drugAllergiesDrugName?:string
  allergyType?:number
  heredity?:string
  pastIllnesses?:string
  accompanyingIllnesses?:string
  surgicalInterventions?:string
  tobaccoSmoking:boolean
  tobaccoDailyPack?:number
  alcohol:boolean
  alcoholAgeRange?:string
  alcoholLastDate?:string
  alcoholOnceAmount?:number
  alcoholWeekAmount?:number
  narcotics:boolean
  narcoticsLastDate?:string
  narcoticsCurrent?:string
  addictionAbuse:boolean
  past90Days:boolean
}

export interface LifeAnamnesisForm {
  card:LifeAnamnesisCard[]
}
