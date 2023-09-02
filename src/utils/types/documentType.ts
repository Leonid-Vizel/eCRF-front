import {
    DiseaseData,
    InsuranceData,
    InsuranceOrganisationData,
    CardSyphilisData,
    DiagnosisData,
    CardScreeningData,
    PhonesData,
    FormDataFields,
    AnamnesisFields,
    AllergyType,
    CriteriaFields,
    PhysicalExamData,
    CardDayData,
    CardPhysicalData,
} from './enums/documentEnums';

interface Disease {
    [DiseaseData.Date]: any;
    [DiseaseData.EndDate]: any;
    [DiseaseData.Diagnosis]: string;
    [DiseaseData.Code]: string;
    [DiseaseData.Doctor]: string;
}

interface Diagnosis {
    [DiagnosisData.Date]: any;
    [DiagnosisData.Text]: string;
    [DiagnosisData.Type]: string;
    [DiagnosisData.Doctor]: string;
}

interface Phones {
    [PhonesData.Phone]: string;
    [PhonesData.Comment]: string;
}

interface Insurance {
    [InsuranceData.Name]: string;
    [InsuranceData.Id]: number;
}

export interface CardSyphilis {
    [CardSyphilisData.DecreasedVision]: '0' | '1' | null;
    [CardSyphilisData.DecreasedHearing]: '0' | '1' | null;
    [CardSyphilisData.DecreasedMemory]: '0' | '1' | null;
    [CardSyphilisData.Incoordination]: '0' | '1' | null;
    [CardSyphilisData.HairAllopecia]: '0' | '1' | null;
    [CardSyphilisData.HairPapula]: '0' | '1' | null;
    [CardSyphilisData.HairPustula]: '0' | '1' | null;
    [CardSyphilisData.HairCrust]: '0' | '1' | null;
    [CardSyphilisData.TongueSpots]: '0' | '1' | null;
    [CardSyphilisData.TonguePapula]: '0' | '1' | null;
    [CardSyphilisData.TongueErosion]: '0' | '1' | null;
    [CardSyphilisData.TongueUlcers]: '0' | '1' | null;
    [CardSyphilisData.TongueAngina]: '0' | '1' | null;
    [CardSyphilisData.TongueTonsils]: '0' | '1' | null;
    [CardSyphilisData.LipsPapula]: '0' | '1' | null;
    [CardSyphilisData.LipsJammed]: '0' | '1' | null;
    [CardSyphilisData.LipsErosion]: '0' | '1' | null;
    [CardSyphilisData.VoiceHoarseness]: '0' | '1' | null;
    [CardSyphilisData.CervicalLymph]: '0' | '1' | null;
    [CardSyphilisData.SubmandibularLymph]: '0' | '1' | null;
    [CardSyphilisData.AxillaryLymph]: '0' | '1' | null;
    [CardSyphilisData.ElbowLymph]: '0' | '1' | null;
    [CardSyphilisData.InguinalLymph]: '0' | '1' | null;
    [CardSyphilisData.BoneSaddleNose]: '0' | '1' | null;
    [CardSyphilisData.BoneHighGothicPalate]: '0' | '1' | null;
    [CardSyphilisData.BoneHutchinsonTeeth]: '0' | '1' | null;
    [CardSyphilisData.BoneXiphoidProcess]: '0' | '1' | null;
    [CardSyphilisData.BoneSaberTibia]: '0' | '1' | null;
    [CardSyphilisData.GenitaliaSpots]: '0' | '1' | null;
    [CardSyphilisData.GenitaliaPapula]: '0' | '1' | null;
    [CardSyphilisData.GenitaliaErosion]: '0' | '1' | null;
    [CardSyphilisData.GenitaliaUlcers]: '0' | '1' | null;
    [CardScreeningData.CardId]: number;
}

export interface CardScreening {
    [CardScreeningData.DateTime]: string;
    [CardScreeningData.Agreed]: '0' | '1' | null;
    [CardScreeningData.FormTime]: string;
    [CardScreeningData.Form]: '0' | '1' | null;
    [CardScreeningData.FormEnoughTime]: '0' | '1' | null;
    [CardScreeningData.Acquaintance]: '0' | '1' | null;
    [CardScreeningData.Understanding]: '0' | '1' | null;
    [CardScreeningData.Requirements]: '0' | '1' | null;
    [CardScreeningData.Questions]: '0' | '1' | null;
    [CardScreeningData.FullInfo]: '0' | '1' | null;
    [CardScreeningData.FullAgreed]: '0' | '1' | null;
    [CardScreeningData.ComplyWithTheRequirements]: '0' | '1' | null;
    [CardScreeningData.Contraception]: '0' | '1' | null;
    [CardScreeningData.Signed2ExamplesDateTime]: string;
    [CardScreeningData.Signed2Examples]: '0' | '1' | null;
    [CardScreeningData.ExampleInDocumentation]: '0' | '1' | null;
    [CardScreeningData.Stacionar]: '0' | '1' | null;
    [CardScreeningData.SignedForm]: '0' | '1' | null;
    [CardScreeningData.AgreementOperator]: string;
    [CardScreeningData.IndividualString]: string;
    [CardScreeningData.HandedPolis]: '0' | '1' | null;
    [CardScreeningData.PolisCopy]: '0' | '1' | null;
    [CardScreeningData.CardId]: number;
    [CardScreeningData.Insurance]: any | null;
    [CardScreeningData.FirstTime]?: any | null;
    [CardScreeningData.SecondTime]?: any | null;
    [CardScreeningData.ThirdTime]?: any | null;
}

export interface InsuranceOrganisation {
    [InsuranceOrganisationData.Name]: string;
    [InsuranceOrganisationData.Id]: number;
}

export interface PhysicalExaminationObject {
    [CardPhysicalData.IsCompleted]?: '0' | '1' | null;
    [CardPhysicalData.IsNorm]?: '0' | '1' | null;
    [CardPhysicalData.IsDeviation]?: '0' | '1' | null;
    [CardPhysicalData.Comment]?: string | null;

    System?: any;
    Id?: number;
}

export interface CardDay {
    [CardDayData.PhysicalExaminationTable]: PhysicalExaminationObject[] | null;
    [CardDayData.DayNumber]?: any | null;
    [CardDayData.Date]: string | null;
    [CardDayData.Complaints]?: string | null;
    [CardDayData.SystolicPressure]?: any | null;
    [CardDayData.DiastolicPressure]?: number | null;
    [CardDayData.HeartRate]?: number | null;
    [CardDayData.RespiratoryRate]?: number | null;
    [CardDayData.Temperature]?: number | null;
    [CardDayData.IsBloodDrawn]?: '0' | '1' | null;
    [CardDayData.BloodDrawnTime]?: string | null;
    [CardDayData.IsUrinalysisPerformedForDrugs]?: '0' | '1' | null;
    [CardDayData.IsUrineContainsDrugs]?: '0' | '1' | null;
    [CardDayData.IsUrinalysisPerformedForCotinine]?: '0' | '1' | null;
    [CardDayData.IsUrineContainsCotinine]?: '0' | '1' | null;
    [CardDayData.IsAlhocolContentTestPerformed]?: '0' | '1' | null;
    [CardDayData.Promille]?: number | null;
    [CardDayData.IsAdverseEvents]?: '0' | '1' | null;
    [CardDayData.AdverseEventsDescription]?: string | null;
    [CardDayData.DoctorDecision]?: '0' | '1' | null;
    [CardDayData.ConsentWithdrawal]?: '0' | '1' | null;
    [CardDayData.ProtocolViolation]?: '0' | '1' | null;
    [CardDayData.ParticipantInclusionViolation]?: '0' | '1' | null;
    [CardDayData.MedicationUse]?: '0' | '1' | null;
    [CardDayData.HospitalizationRequired]?: '0' | '1' | null;
    [CardDayData.AdverseEvent]?: '0' | '1' | null;
    [CardDayData.PositiveAlcoholBreathTest]?: '0' | '1' | null;
    [CardDayData.PositiveCotinineUrineTest]?: '0' | '1' | null;
    [CardDayData.PositiveDrugUrineTest]?: '0' | '1' | null;
    [CardDayData.DehydrationBeforePeriods]?: '0' | '1' | null;
    [CardDayData.VomitingOrDiarrheaAfterDose]?: '0' | '1' | null;
    [CardDayData.TechnicalBloodSamplingDifficulties]?: '0' | '1' | null;
    [CardDayData.Comments]?: string | null;
    [CardDayData.IsContinue]?: '0' | '1' | null;
    [CardDayData.IsInvited]?: '0' | '1' | null;
    [CardDayData.Doctor]?: string | null;
    [CardDayData.Id]?: number | null;
    [CardDayData.CardId]?: number;
}

export interface FormDataItem {
    [FormDataFields.ProtocolId]: number | null;
    [FormDataFields.FirstName]: string | null;
    [FormDataFields.SecondName]: string | null;
    [FormDataFields.ThirdName]: string | null;
    [FormDataFields.RandomState]: number | null;
    [FormDataFields.RandomNumber]: string | null;
    [FormDataFields.Pediculosis]: number | null;
    [FormDataFields.Scabies]: number | null;
    [FormDataFields.Tbs]: number | null;
    [FormDataFields.Hepatitis]: number | null;
    [FormDataFields.VenerealDisease]: number | null;
    [FormDataFields.CreateDate]: string | null;
    [FormDataFields.Sex]: number | null;
    [FormDataFields.BirthDate]: string | null;
    [FormDataFields.Subject]: string | null;
    [FormDataFields.District]: string | null;
    [FormDataFields.City]: string | null;
    [FormDataFields.Community]: string | null;
    [FormDataFields.Street]: string | null;
    [FormDataFields.House]: string | null;
    [FormDataFields.Flat]: string | null;
    [FormDataFields.Phone]: any | null;
    [FormDataFields.Phones]: Phones[] | null;
    [FormDataFields.Locality]: number | null;
    [FormDataFields.ChISeries]: string | null;
    [FormDataFields.ChINumber]: string | null;
    [FormDataFields.Snils]: string | null;
    [FormDataFields.InsuranceMedicalOrganization]: any | null;
    [FormDataFields.BenefitCategoryCode]: string | null;
    [FormDataFields.DocumentName]: string | null;
    [FormDataFields.DocumentSeries]: string | null;
    [FormDataFields.DocumentNumber]: string | null;
    [FormDataFields.Family]: number | null;
    [FormDataFields.Education]: number | null;
    [FormDataFields.Work]: number | null;
    [FormDataFields.DisabilityType]: number | null;
    [FormDataFields.DisabilityGroup]: number | null;
    [FormDataFields.DisabilityDate]: string | null;
    [FormDataFields.WorkPlace]: string | null;
    [FormDataFields.WorkPosition]: string | null;
    [FormDataFields.WorkPlaceChange]: string | null;
    [FormDataFields.RegistrationPlaceChange]: string | null;
    [FormDataFields.BloodGroup]: number | null;
    [FormDataFields.RhFactor]: number | null;
    [FormDataFields.AllergicReactions]: string | null;
    [FormDataFields.CheckupDate]: string | null;
    [FormDataFields.CheckupLocation]: number | null;
    [FormDataFields.Doctor]?: string | null;
    [FormDataFields.Race]?: number | null;
    [FormDataFields.OtherRace]?: string | null;
    [FormDataFields.PatientDate]?: string | null;
    [FormDataFields.PatientDiagnosis]?: string | null;
    [FormDataFields.PatientPath]?: string | null;
    [FormDataFields.InternalId]?: number | null;
    [FormDataFields.Insurance]?: Insurance | null;
    [FormDataFields.Syphilis]?: CardSyphilis | null;
    [FormDataFields.Screening]?: CardScreening | null;
    [FormDataFields.Deseases]: Disease[] | null;
    [FormDataFields.Diagnosis]: Diagnosis[] | null;
}

export interface Anamnesis {
    [AnamnesisFields.Anamnesis]: string | null;
    [AnamnesisFields.MedicalAnamnesis]: string | null;
    [AnamnesisFields.PharmacologicalAnamnesis]: string | null;
    [AnamnesisFields.FoodAllergies]: '0' | '1' | null;
    [AnamnesisFields.FoodAllergiesString]: string | null;
    [AnamnesisFields.DrugAllergies]: '0' | '1' | null;
    [AnamnesisFields.DrugAllergiesString]: string | null;
    [AnamnesisFields.AllergyType]: AllergyType | null;
    [AnamnesisFields.Heredity]: string | null;
    [AnamnesisFields.PastIllnesses]: string | null;
    [AnamnesisFields.AccompanyingIllnesses]: string | null;
    [AnamnesisFields.SurgicalInterventions]: string | null;
    [AnamnesisFields.TobaccoSmoking]: '0' | '1' | null;
    [AnamnesisFields.TobaccoDailyPack]: number | null;
    [AnamnesisFields.Alcohol]: '0' | '1' | null;
    [AnamnesisFields.AlcoholAgeRange]: string | null;
    [AnamnesisFields.AlcoholLastDate]: string | null;
    [AnamnesisFields.AlcoholOnceAmount]: number | null;
    [AnamnesisFields.AlcoholWeekAmount]: number | null;
    [AnamnesisFields.Narcotics]: '0' | '1' | null;
    [AnamnesisFields.NarcoticsLastDate]: string | null;
    [AnamnesisFields.NarcoticsCurrent]: string | null;
    [AnamnesisFields.AddictionAbuse]: '0' | '1' | null;
    [AnamnesisFields.Past90Days]: '0' | '1' | null;
    [AnamnesisFields.CardId]: number;
}

type CriteriaValues = '0' | '1' | null;

export interface Criteria {
    [CriteriaFields.IncludeCriteria1]: CriteriaValues;
    [CriteriaFields.IncludeCriteria2]: CriteriaValues;
    [CriteriaFields.IncludeCriteria3]: CriteriaValues;
    [CriteriaFields.IncludeCriteria4]: CriteriaValues;
    [CriteriaFields.IncludeCriteria5]: CriteriaValues;
    [CriteriaFields.IncludeCriteria6]: CriteriaValues;
    [CriteriaFields.IncludeCriteria7]: CriteriaValues;
    [CriteriaFields.IncludeCriteria8]: CriteriaValues;
    [CriteriaFields.IncludeCriteria9]: CriteriaValues;
    [CriteriaFields.IncludeCriteria10]: CriteriaValues;
    [CriteriaFields.IncludeCriteria11]: CriteriaValues;
    [CriteriaFields.IncludeCriteria12]: CriteriaValues;
    [CriteriaFields.IncludeCriteria13]: CriteriaValues;
    [CriteriaFields.IncludeCriteria14]: CriteriaValues;
    [CriteriaFields.IncludeCriteria15]: CriteriaValues;

    [CriteriaFields.ExcludeCriteria1]: CriteriaValues;
    [CriteriaFields.ExcludeCriteria2]: CriteriaValues;
    [CriteriaFields.ExcludeCriteria3]: CriteriaValues;
    [CriteriaFields.ExcludeCriteria4]: CriteriaValues;
    [CriteriaFields.ExcludeCriteria5]: CriteriaValues;
    [CriteriaFields.ExcludeCriteria6]: CriteriaValues;
    [CriteriaFields.ExcludeCriteria7]: CriteriaValues;
    [CriteriaFields.ExcludeCriteria8]: CriteriaValues;
    [CriteriaFields.ExcludeCriteria9]: CriteriaValues;
    [CriteriaFields.ExcludeCriteria10]: CriteriaValues;
    [CriteriaFields.ExcludeCriteria11]: CriteriaValues;
    [CriteriaFields.ExcludeCriteria12]: CriteriaValues;
    [CriteriaFields.ExcludeCriteria13]: CriteriaValues;
    [CriteriaFields.ExcludeCriteria14]: CriteriaValues;
    [CriteriaFields.ExcludeCriteria15]: CriteriaValues;
    [CriteriaFields.ExcludeCriteria16]: CriteriaValues;
    [CriteriaFields.ExcludeCriteria17]: CriteriaValues;
    [CriteriaFields.ExcludeCriteria18]: CriteriaValues;
    [CriteriaFields.ExcludeCriteria19]: CriteriaValues;
    [CriteriaFields.ExcludeCriteria20]: CriteriaValues;
    [CriteriaFields.ExcludeCriteria21]: CriteriaValues;
    [CriteriaFields.ExcludeCriteria22]: CriteriaValues;
    [CriteriaFields.ExcludeCriteria23]: CriteriaValues;
    [CriteriaFields.ExcludeCriteria24]: CriteriaValues;

    [CriteriaFields.Comment]: string | null;
    [CriteriaFields.CriteriaEvaluated]: CriteriaValues;
    [CriteriaFields.CriteriaAccepted]: CriteriaValues;
    [CriteriaFields.CriteriaAllowed]: CriteriaValues;
    [CriteriaFields.CriteriaYesNo]: CriteriaValues;
    [CriteriaFields.PhoneDateTime]: string | null;
    [CriteriaFields.PhoneYesNo]: CriteriaValues;
    [CriteriaFields.Informed]: CriteriaValues;
    [CriteriaFields.Hospitalized]: CriteriaValues;
    [CriteriaFields.VisitComment]: string | null;
    [CriteriaFields.Doctor]: string | null;
}

export interface PhysicalExam {
    // [PhysicalExamData.ECGFilePath]?: any;
    [PhysicalExamData.Weight]: number | null;
    [PhysicalExamData.WeightMeasurement]: number | null;
    [PhysicalExamData.Height]: number | null;
    [PhysicalExamData.SystolicPressure]: number | null;
    [PhysicalExamData.DiastolicPressure]: number | null;
    [PhysicalExamData.HeartRate]: number | null;
    [PhysicalExamData.RespiratoryRate]: number | null;
    [PhysicalExamData.Temperature]: number | null;
    [PhysicalExamData.Complaints]: string | null;

    [PhysicalExamData.InspectionComplete]: '0' | '1' | null;
    [PhysicalExamData.InspectionIndicator]: '0' | '1' | null;
    [PhysicalExamData.InspectionDeviation]: '0' | '1' | null;
    [PhysicalExamData.InspectionComment]: string | null;

    [PhysicalExamData.SkinComplete]: '0' | '1' | null;
    [PhysicalExamData.SkinIndicator]: '0' | '1' | null;
    [PhysicalExamData.SkinDeviation]: '0' | '1' | null;
    [PhysicalExamData.SkinComment]: string | null;

    [PhysicalExamData.MucousComplete]: '0' | '1' | null;
    [PhysicalExamData.MucousIndicator]: '0' | '1' | null;
    [PhysicalExamData.MucousDeviation]: '0' | '1' | null;
    [PhysicalExamData.MucousComment]: string | null;

    [PhysicalExamData.LymphComplete]: '0' | '1' | null;
    [PhysicalExamData.LymphIndicator]: '0' | '1' | null;
    [PhysicalExamData.LymphDeviation]: '0' | '1' | null;
    [PhysicalExamData.LymphComment]: string | null;

    [PhysicalExamData.EyesEarsNoseComplete]: '0' | '1' | null;
    [PhysicalExamData.EyesEarsNoseIndicator]: '0' | '1' | null;
    [PhysicalExamData.EyesEarsNoseDeviation]: '0' | '1' | null;
    [PhysicalExamData.EyesEarsNoseComment]: string | null;

    [PhysicalExamData.HeadNeckComplete]: '0' | '1' | null;
    [PhysicalExamData.HeadNeckIndicator]: '0' | '1' | null;
    [PhysicalExamData.HeadNeckDeviation]: '0' | '1' | null;
    [PhysicalExamData.HeadNeckComment]: string | null;

    [PhysicalExamData.UpperVeinsComplete]: '0' | '1' | null;
    [PhysicalExamData.UpperVeinsIndicator]: '0' | '1' | null;
    [PhysicalExamData.UpperVeinsDeviation]: '0' | '1' | null;
    [PhysicalExamData.UpperVeinsComment]: string | null;

    [PhysicalExamData.CardiovascularComplete]: '0' | '1' | null;
    [PhysicalExamData.CardiovascularIndicator]: '0' | '1' | null;
    [PhysicalExamData.CardiovascularDeviation]: '0' | '1' | null;
    [PhysicalExamData.CardiovascularComment]: string | null;

    [PhysicalExamData.RespiratoryComplete]: '0' | '1' | null;
    [PhysicalExamData.RespiratoryIndicator]: '0' | '1' | null;
    [PhysicalExamData.RespiratoryDeviation]: '0' | '1' | null;
    [PhysicalExamData.RespiratoryComment]: string | null;

    [PhysicalExamData.MusculoskeletalComplete]: '0' | '1' | null;
    [PhysicalExamData.MusculoskeletalIndicator]: '0' | '1' | null;
    [PhysicalExamData.MusculoskeletalDeviation]: '0' | '1' | null;
    [PhysicalExamData.MusculoskeletalComment]: string | null;

    [PhysicalExamData.DigestiveComplete]: '0' | '1' | null;
    [PhysicalExamData.DigestiveIndicator]: '0' | '1' | null;
    [PhysicalExamData.DigestiveDeviation]: '0' | '1' | null;
    [PhysicalExamData.DigestiveComment]: string | null;

    [PhysicalExamData.UrinaryComplete]: '0' | '1' | null;
    [PhysicalExamData.UrinaryIndicator]: '0' | '1' | null;
    [PhysicalExamData.UrinaryDeviation]: '0' | '1' | null;
    [PhysicalExamData.UrinaryComment]: string | null;

    [PhysicalExamData.NervousComplete]: '0' | '1' | null;
    [PhysicalExamData.NervousIndicator]: '0' | '1' | null;
    [PhysicalExamData.NervousDeviation]: '0' | '1' | null;
    [PhysicalExamData.NervousComment]: string | null;

    [PhysicalExamData.MentalComplete]: '0' | '1' | null;
    [PhysicalExamData.MentalIndicator]: '0' | '1' | null;
    [PhysicalExamData.MentalDeviation]: '0' | '1' | null;
    [PhysicalExamData.MentalComment]: string | null;

    [PhysicalExamData.ECGTaken]: '0' | '1' | null;
    [PhysicalExamData.ECGTapeAttached]: '0' | '1' | null;
    [PhysicalExamData.ECGComment]: string | null;

    [PhysicalExamData.UrineAnalysis]: '0' | '1' | null;
    [PhysicalExamData.UrineAnalysisName]: string | null;
    [PhysicalExamData.UrineAnalysisResult]: '0' | '1' | null;
    [PhysicalExamData.UrineKotininAnalysis]: '0' | '1' | null;
    [PhysicalExamData.UrineKotininAnalysisResult]: '0' | '1' | null;
    [PhysicalExamData.AlcoholTestPromiles]: number | null;
    [PhysicalExamData.PregnancyTest]: number | null;
    [PhysicalExamData.PregnancyTestResult]: number | null;
    [PhysicalExamData.CovidTest]: '0' | '1' | null;
    [PhysicalExamData.CovidTestResult]: '0' | '1' | null;
    [PhysicalExamData.CovidOldTest]: '0' | '1' | null;
    [PhysicalExamData.CovidOldTestDate]: string | null;
    [PhysicalExamData.Test10HoursAware]: '0' | '1' | null;

    [PhysicalExamData.LabDate]: string;
    [PhysicalExamData.EmptyStomach]: '0' | '1' | null;
    [PhysicalExamData.BloodSamples]: '0' | '1' | null;
    [PhysicalExamData.BloodCentralLab]: '0' | '1' | null;
    [PhysicalExamData.UrineCentralLab]: '0' | '1' | null;
    [PhysicalExamData.LabRoute]: '0' | '1' | null;
    [PhysicalExamData.LabRouteName]: string | null;
    [PhysicalExamData.RgSurveyRoute]: '0' | '1' | null;
    [PhysicalExamData.XRay]: '0' | '1' | null;
    [PhysicalExamData.XRayCopy]: '0' | '1' | null;
    [PhysicalExamData.Analysis]: '0' | '1' | null;
    [PhysicalExamData.AnalysisDate]: string | null;

    [PhysicalExamData.GeneralBloodComplete]: '0' | '1' | null;
    [PhysicalExamData.GeneralBloodIndicator]: '0' | '1' | null;
    [PhysicalExamData.GeneralBloodDeviation]: '0' | '1' | null;
    [PhysicalExamData.GeneralBloodComment]: string | null;

    [PhysicalExamData.BioBloodComplete]: '0' | '1' | null;
    [PhysicalExamData.BioBloodIndicator]: '0' | '1' | null;
    [PhysicalExamData.BioBloodDeviation]: '0' | '1' | null;
    [PhysicalExamData.BioBloodComment]: string | null;

    [PhysicalExamData.UrinalysisSedimentComplete]: '0' | '1' | null;
    [PhysicalExamData.UrinalysisSedimentIndicator]: '0' | '1' | null;
    [PhysicalExamData.UrinalysisSedimentDeviation]: '0' | '1' | null;
    [PhysicalExamData.UrinalysisSedimentComment]: string | null;

    [PhysicalExamData.HIVComplete]: '0' | '1' | null;
    [PhysicalExamData.HIVIndicator]: '0' | '1' | null;
    [PhysicalExamData.HIVDeviation]: '0' | '1' | null;
    [PhysicalExamData.HIVComment]: string | null;
}
