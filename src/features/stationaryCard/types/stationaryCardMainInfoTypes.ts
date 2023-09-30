export interface StationaryCardMainInfoForm {
  outpatientCardId: number
  hospitalInfo: StationaryCardHospitalInfo[]
  patientInfo: StationaryCardPatientInfo[]
  hospitalisationInfo: StationaryCardHospitalisationInfo[]
  resultInfo: StationaryCardResultInfo[]
  diagnosisTable: StationaryCardDiagnosisTable[]
  surgicalOperationsTable: StationaryCardSurgicalOperationsTable[]
}

interface StationaryCardHospitalInfo {
  receiptDateTime: string
  checkoutDateTime: string
  department: string
  chamberNumber: number
  transferredToDepartment: string
  bedDaysSpent: number
}

interface StationaryCardPatientInfo {
  transportationType: number
  drugSideEffects: string
  russiaSubjectId: number
  district: string
  city: string
  community: string
  street: string
  house: string
  building: string
  flat: string
  work: string
  workType: number
}

interface StationaryCardHospitalisationInfo {
  referredBy: string
  reason: number
  emergencyReason: number
  referringDiagnosis: string
  hospitalisation: number
  totalHospitalisationAmount: number
  otherTreatments: number
}

interface StationaryCardResultInfo {
  incapacity1Number: number
  incapacity1Start: string
  incapacity1End: string
  incapacity2Number: number
  incapacity2Start: string
  incapacity2End: string
  diseaseOutcome: number
  transferredOutcomeInstitutionName: string
  workAbility: number
  specialMarks: string
  headDoctor: string
}

interface StationaryCardDiagnosisTable {
  state: string
  date: string
  icbCode: string
  doctor: string
  system: string
}

interface StationaryCardSurgicalOperationsTable {
  type: string
  complications: string
  operator: string
}
