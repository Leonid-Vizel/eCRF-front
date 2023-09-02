import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
    CardDay,
    PhysicalExaminationObject,
} from '../../../utils/types/documentType';
import {
    CardDayData,
    CardPhysicalData,
} from '../../../utils/types/enums/documentEnums';
import Sidebar from '../../../components/document/sidebar/Sidebar';
import SelectBlock from '../../../components/document/selectBlock/SelectBlock';
import {
    acquaintanceScreeningSelect,
    agreedScreeningSelect,
    AgreementOperatorScreening,
    complyWithTheRequirementsScreeningSelect,
    contraceptionScreeningSelect,
    exampleInDocumentationScreeningSelect,
    formEnoughTimeScreeningSelect,
    formScreeningSelect,
    fullAgreedScreeningSelect,
    fullInfoScreeningSelect,
    HandedPolisScreeningSelect,
    IndividualScreening,
    PolisCopyScreeningSelect,
    questionsScreeningSelect,
    requirementsScreeningSelect,
    screeningData,
    signed2ExamplesScreeningSelect,
    signedFormScreeningSelect,
    stacionarScreeningSelect,
    understandingScreeningSelect,
} from '../screeningDocument/blockInputs';
import InputBlock from '../../../components/document/inputBlock/InputBlock';
import {
    adverseDescVisit,
    adverseEventVisit,
    bloodHoursVisit,
    boneVisit,
    breathVisit,
    commentsVisit,
    complaintsVisit,
    consentWithdrawalVisit,
    dayVisit,
    dehydrationBeforePeriodsVisit,
    doctorDecisionVisit,
    doctorVisit,
    eyeVisit,
    foodVisit,
    headVisit,
    heartVisit,
    hospitalizationRequiredVisit,
    isContinueVisit,
    isInvitedVisit,
    isPissFifthVisit,
    isPissFourthVisit,
    isPissSecondVisit,
    isPissSixVisit,
    isPissThirdVisit,
    isPissVisit,
    lymphVisit,
    medicationUseVisit,
    nervousVisit,
    overallVisit,
    participantInclusionViolationVisit,
    pissVisit,
    positiveAlcoholBreathTestVisit,
    positiveCotinineUrineTestVisit,
    positiveDrugUrineTestVisit,
    protocolViolationVisit,
    psychoVisit,
    seenVisit,
    skinVisit,
    technicalBloodSamplingDifficultiesVisit,
    temperatureVisit,
    venumVisit,
    vomitingOrDiarrheaAfterDoseVisit,
} from './blockInputs';
import { axiosCardRequest } from '../../../utils/request/NewAxiosRequest';
import { message } from 'antd';

const ExamObg: PhysicalExaminationObject[] = [
    {
        [CardPhysicalData.IsCompleted]: null,
        [CardPhysicalData.IsNorm]: null,
        [CardPhysicalData.IsDeviation]: null,
        [CardPhysicalData.Comment]: '',
        [CardPhysicalData.System]: +0,
    },
    {
        [CardPhysicalData.IsCompleted]: null,
        [CardPhysicalData.IsNorm]: null,
        [CardPhysicalData.IsDeviation]: null,
        [CardPhysicalData.Comment]: '',
        [CardPhysicalData.System]: +1,
    },
    {
        [CardPhysicalData.IsCompleted]: null,
        [CardPhysicalData.IsNorm]: null,
        [CardPhysicalData.IsDeviation]: null,
        [CardPhysicalData.Comment]: '',
        [CardPhysicalData.System]: +2,
    },
    {
        [CardPhysicalData.IsCompleted]: null,
        [CardPhysicalData.IsNorm]: null,
        [CardPhysicalData.IsDeviation]: null,
        [CardPhysicalData.Comment]: '',
        [CardPhysicalData.System]: +3,
    },
    {
        [CardPhysicalData.IsCompleted]: null,
        [CardPhysicalData.IsNorm]: null,
        [CardPhysicalData.IsDeviation]: null,
        [CardPhysicalData.Comment]: '',
        [CardPhysicalData.System]: +4,
    },
    {
        [CardPhysicalData.IsCompleted]: null,
        [CardPhysicalData.IsNorm]: null,
        [CardPhysicalData.IsDeviation]: null,
        [CardPhysicalData.Comment]: '',
        [CardPhysicalData.System]: +5,
    },
    {
        [CardPhysicalData.IsCompleted]: null,
        [CardPhysicalData.IsNorm]: null,
        [CardPhysicalData.IsDeviation]: null,
        [CardPhysicalData.Comment]: '',
        [CardPhysicalData.System]: +6,
    },
    {
        [CardPhysicalData.IsCompleted]: null,
        [CardPhysicalData.IsNorm]: null,
        [CardPhysicalData.IsDeviation]: null,
        [CardPhysicalData.Comment]: '',
        [CardPhysicalData.System]: +7,
    },
    {
        [CardPhysicalData.IsCompleted]: null,
        [CardPhysicalData.IsNorm]: null,
        [CardPhysicalData.IsDeviation]: null,
        [CardPhysicalData.Comment]: '',
        [CardPhysicalData.System]: +8,
    },
    {
        [CardPhysicalData.IsCompleted]: null,
        [CardPhysicalData.IsNorm]: null,
        [CardPhysicalData.IsDeviation]: null,
        [CardPhysicalData.Comment]: '',
        [CardPhysicalData.System]: +9,
    },
    {
        [CardPhysicalData.IsCompleted]: null,
        [CardPhysicalData.IsNorm]: null,
        [CardPhysicalData.IsDeviation]: null,
        [CardPhysicalData.Comment]: '',
        [CardPhysicalData.System]: +10,
    },
    {
        [CardPhysicalData.IsCompleted]: null,
        [CardPhysicalData.IsNorm]: null,
        [CardPhysicalData.IsDeviation]: null,
        [CardPhysicalData.Comment]: '',
        [CardPhysicalData.System]: +11,
    },
    {
        [CardPhysicalData.IsCompleted]: null,
        [CardPhysicalData.IsNorm]: null,
        [CardPhysicalData.IsDeviation]: null,
        [CardPhysicalData.Comment]: '',
        [CardPhysicalData.System]: +12,
    },
    {
        [CardPhysicalData.IsCompleted]: null,
        [CardPhysicalData.IsNorm]: null,
        [CardPhysicalData.IsDeviation]: null,
        [CardPhysicalData.Comment]: '',
        [CardPhysicalData.System]: +13,
    },
];

const VisitsData = () => {
    const { pathname } = useLocation();
    const pathParts = pathname.split('/')[3];
    const { id, protocolId, dayId } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<CardDay>({
        [CardDayData.PhysicalExaminationTable]: ExamObg,
        [CardDayData.DayNumber]: +dayId,
        [CardDayData.Date]: null,
        [CardDayData.Complaints]: null,
        [CardDayData.SystolicPressure]: null,
        [CardDayData.DiastolicPressure]: null,
        [CardDayData.HeartRate]: null,
        [CardDayData.RespiratoryRate]: null,
        [CardDayData.Temperature]: null,
        [CardDayData.BloodDrawnTime]: null,
        [CardDayData.Promille]: null,
        [CardDayData.Comments]: null,
        [CardDayData.Doctor]: null,
        [CardDayData.AdverseEventsDescription]: null,
        [CardDayData.Id]: null,
        [CardDayData.CardId]: +id,

        [CardDayData.IsBloodDrawn]: null,
        [CardDayData.IsUrinalysisPerformedForDrugs]: null,
        [CardDayData.IsUrineContainsDrugs]: null,
        [CardDayData.IsUrinalysisPerformedForCotinine]: null,
        [CardDayData.IsUrineContainsCotinine]: null,
        [CardDayData.IsAlhocolContentTestPerformed]: null,
        [CardDayData.IsAdverseEvents]: null,
        [CardDayData.DoctorDecision]: null,
        [CardDayData.ConsentWithdrawal]: null,
        [CardDayData.ProtocolViolation]: null,
        [CardDayData.ParticipantInclusionViolation]: null,
        [CardDayData.MedicationUse]: null,
        [CardDayData.HospitalizationRequired]: null,
        [CardDayData.AdverseEvent]: null,
        [CardDayData.PositiveAlcoholBreathTest]: null,
        [CardDayData.PositiveCotinineUrineTest]: null,
        [CardDayData.PositiveDrugUrineTest]: null,
        [CardDayData.DehydrationBeforePeriods]: null,
        [CardDayData.VomitingOrDiarrheaAfterDose]: null,
        [CardDayData.TechnicalBloodSamplingDifficulties]: null,
        [CardDayData.IsContinue]: null,
        [CardDayData.IsInvited]: null,
    });

    useEffect(() => {
        if (pathParts === 'edit') {
            const getData = async () => {
                const res = await axiosCardRequest.get<CardDay>(
                    `/Day/List/${id}`
                );

                const data = res.data[+dayId - 2];
                console.log(data);

                const physicalExaminationTables = [];

                for (let i = 0; i < data.PhysicalExaminationTable.length; i++) {
                    physicalExaminationTables.push(
                        data.PhysicalExaminationTable[i]
                    );
                }
                console.log(data);

                setFormData({
                    ...data,
                    [CardDayData.BloodDrawnTime]: data.BloodDrawnTime.slice(
                        0,
                        5
                    ),
                    [CardDayData.DayNumber]: data.DayNumber,
                    [CardDayData.PhysicalExaminationTable]:
                        physicalExaminationTables === null
                            ? null
                            : physicalExaminationTables,
                    [CardDayData.IsBloodDrawn]:
                        data.IsBloodDrawn === null
                            ? null
                            : data.IsBloodDrawn
                            ? '1'
                            : '0',
                    [CardDayData.IsUrinalysisPerformedForDrugs]:
                        data.IsUrinalysisPerformedForDrugs === null
                            ? null
                            : data.IsUrinalysisPerformedForDrugs
                            ? '1'
                            : '0',

                    [CardDayData.IsUrineContainsDrugs]:
                        data.IsUrineContainsDrugs === null
                            ? null
                            : data.IsUrineContainsDrugs
                            ? '1'
                            : '0',

                    [CardDayData.IsUrinalysisPerformedForCotinine]:
                        data.IsUrinalysisPerformedForCotinine === null
                            ? null
                            : data.IsUrinalysisPerformedForCotinine
                            ? '1'
                            : '0',

                    [CardDayData.IsUrineContainsCotinine]:
                        data.IsUrineContainsCotinine === null
                            ? null
                            : data.IsUrineContainsCotinine
                            ? '1'
                            : '0',

                    [CardDayData.IsAlhocolContentTestPerformed]:
                        data.IsAlhocolContentTestPerformed === null
                            ? null
                            : data.IsAlhocolContentTestPerformed
                            ? '1'
                            : '0',

                    [CardDayData.IsAdverseEvents]:
                        data.IsAdverseEvents === null
                            ? null
                            : data.IsAdverseEvents
                            ? '1'
                            : '0',

                    [CardDayData.DoctorDecision]:
                        data.DoctorDecision === null
                            ? null
                            : data.DoctorDecision
                            ? '1'
                            : '0',

                    [CardDayData.ConsentWithdrawal]:
                        data.ConsentWithdrawal === null
                            ? null
                            : data.ConsentWithdrawal
                            ? '1'
                            : '0',

                    [CardDayData.ProtocolViolation]:
                        data.ProtocolViolation === null
                            ? null
                            : data.ProtocolViolation
                            ? '1'
                            : '0',

                    [CardDayData.ParticipantInclusionViolation]:
                        data.ParticipantInclusionViolation === null
                            ? null
                            : data.ParticipantInclusionViolation
                            ? '1'
                            : '0',

                    [CardDayData.MedicationUse]:
                        data.MedicationUse === null
                            ? null
                            : data.MedicationUse
                            ? '1'
                            : '0',

                    [CardDayData.HospitalizationRequired]:
                        data.HospitalizationRequired === null
                            ? null
                            : data.HospitalizationRequired
                            ? '1'
                            : '0',

                    [CardDayData.AdverseEvent]:
                        data.AdverseEvent === null
                            ? null
                            : data.AdverseEvent
                            ? '1'
                            : '0',

                    [CardDayData.PositiveAlcoholBreathTest]:
                        data.PositiveAlcoholBreathTest === null
                            ? null
                            : data.PositiveAlcoholBreathTest
                            ? '1'
                            : '0',

                    [CardDayData.PositiveCotinineUrineTest]:
                        data.PositiveCotinineUrineTest === null
                            ? null
                            : data.PositiveCotinineUrineTest
                            ? '1'
                            : '0',

                    [CardDayData.PositiveDrugUrineTest]:
                        data.PositiveDrugUrineTest === null
                            ? null
                            : data.PositiveDrugUrineTest
                            ? '1'
                            : '0',

                    [CardDayData.DehydrationBeforePeriods]:
                        data.DehydrationBeforePeriods === null
                            ? null
                            : data.DehydrationBeforePeriods
                            ? '1'
                            : '0',

                    [CardDayData.VomitingOrDiarrheaAfterDose]:
                        data.VomitingOrDiarrheaAfterDose === null
                            ? null
                            : data.VomitingOrDiarrheaAfterDose
                            ? '1'
                            : '0',

                    [CardDayData.TechnicalBloodSamplingDifficulties]:
                        data.TechnicalBloodSamplingDifficulties === null
                            ? null
                            : data.TechnicalBloodSamplingDifficulties
                            ? '1'
                            : '0',

                    [CardDayData.IsContinue]:
                        data.IsContinue === null
                            ? null
                            : data.IsContinue
                            ? '1'
                            : '0',

                    [CardDayData.IsInvited]:
                        data.IsInvited === null
                            ? null
                            : data.IsInvited
                            ? '1'
                            : '0',
                });
            };

            getData();
        }
        setFormData({
            [CardDayData.PhysicalExaminationTable]: ExamObg,
            [CardDayData.DayNumber]: +dayId,
            [CardDayData.Date]: null,
            [CardDayData.Complaints]: null,
            [CardDayData.SystolicPressure]: null,
            [CardDayData.DiastolicPressure]: null,
            [CardDayData.HeartRate]: null,
            [CardDayData.RespiratoryRate]: null,
            [CardDayData.Temperature]: null,
            [CardDayData.BloodDrawnTime]: null,
            [CardDayData.Promille]: null,
            [CardDayData.Comments]: null,
            [CardDayData.Doctor]: null,
            [CardDayData.AdverseEventsDescription]: null,
            [CardDayData.Id]: null,
            [CardDayData.CardId]: +id,

            [CardDayData.IsBloodDrawn]: null,
            [CardDayData.IsUrinalysisPerformedForDrugs]: null,
            [CardDayData.IsUrineContainsDrugs]: null,
            [CardDayData.IsUrinalysisPerformedForCotinine]: null,
            [CardDayData.IsUrineContainsCotinine]: null,
            [CardDayData.IsAlhocolContentTestPerformed]: null,
            [CardDayData.IsAdverseEvents]: null,
            [CardDayData.DoctorDecision]: null,
            [CardDayData.ConsentWithdrawal]: null,
            [CardDayData.ProtocolViolation]: null,
            [CardDayData.ParticipantInclusionViolation]: null,
            [CardDayData.MedicationUse]: null,
            [CardDayData.HospitalizationRequired]: null,
            [CardDayData.AdverseEvent]: null,
            [CardDayData.PositiveAlcoholBreathTest]: null,
            [CardDayData.PositiveCotinineUrineTest]: null,
            [CardDayData.PositiveDrugUrineTest]: null,
            [CardDayData.DehydrationBeforePeriods]: null,
            [CardDayData.VomitingOrDiarrheaAfterDose]: null,
            [CardDayData.TechnicalBloodSamplingDifficulties]: null,
            [CardDayData.IsContinue]: null,
            [CardDayData.IsInvited]: null,
        });
    }, [+dayId]);
    console.log(+dayId);

    const handleCreateDoc = async () => {
        try {
            await axiosCardRequest.post('/Day/Create', {
                ...formData,
                [CardDayData.SystolicPressure]:
                    formData.SystolicPressure === ''
                        ? null
                        : +formData.SystolicPressure,
                [CardDayData.Promille]:
                    formData.Promille === null ? null : +formData.Promille,
                [CardDayData.BloodDrawnTime]:
                    formData.BloodDrawnTime === null
                        ? null
                        : formData.BloodDrawnTime + ':00',
                [CardDayData.DayNumber]: +dayId,
                [CardDayData.IsBloodDrawn]:
                    formData.IsBloodDrawn === null
                        ? null
                        : Boolean(+formData.IsBloodDrawn),
                [CardDayData.IsUrinalysisPerformedForDrugs]:
                    formData.IsUrinalysisPerformedForDrugs === null
                        ? null
                        : Boolean(+formData.IsUrinalysisPerformedForDrugs),

                [CardDayData.IsUrineContainsDrugs]:
                    formData.IsUrineContainsDrugs === null
                        ? null
                        : Boolean(+formData.IsUrineContainsDrugs),

                [CardDayData.IsUrinalysisPerformedForCotinine]:
                    formData.IsUrinalysisPerformedForCotinine === null
                        ? null
                        : Boolean(+formData.IsUrinalysisPerformedForCotinine),

                [CardDayData.IsUrineContainsCotinine]:
                    formData.IsUrineContainsCotinine === null
                        ? null
                        : Boolean(+formData.IsUrineContainsCotinine),

                [CardDayData.IsAlhocolContentTestPerformed]:
                    formData.IsAlhocolContentTestPerformed === null
                        ? null
                        : Boolean(+formData.IsAlhocolContentTestPerformed),

                [CardDayData.IsAdverseEvents]:
                    formData.IsAdverseEvents === null
                        ? null
                        : Boolean(+formData.IsAdverseEvents),

                [CardDayData.DoctorDecision]:
                    formData.DoctorDecision === null
                        ? null
                        : Boolean(+formData.DoctorDecision),

                [CardDayData.ConsentWithdrawal]:
                    formData.ConsentWithdrawal === null
                        ? null
                        : Boolean(+formData.ConsentWithdrawal),

                [CardDayData.ProtocolViolation]:
                    formData.ProtocolViolation === null
                        ? null
                        : Boolean(+formData.ProtocolViolation),

                [CardDayData.ParticipantInclusionViolation]:
                    formData.ParticipantInclusionViolation === null
                        ? null
                        : Boolean(+formData.ParticipantInclusionViolation),

                [CardDayData.MedicationUse]:
                    formData.MedicationUse === null
                        ? null
                        : Boolean(+formData.MedicationUse),

                [CardDayData.HospitalizationRequired]:
                    formData.HospitalizationRequired === null
                        ? null
                        : Boolean(+formData.HospitalizationRequired),

                [CardDayData.AdverseEvent]:
                    formData.AdverseEvent === null
                        ? null
                        : Boolean(+formData.AdverseEvent),

                [CardDayData.PositiveAlcoholBreathTest]:
                    formData.PositiveAlcoholBreathTest === null
                        ? null
                        : Boolean(+formData.PositiveAlcoholBreathTest),

                [CardDayData.PositiveCotinineUrineTest]:
                    formData.PositiveCotinineUrineTest === null
                        ? null
                        : Boolean(+formData.PositiveCotinineUrineTest),

                [CardDayData.PositiveDrugUrineTest]:
                    formData.PositiveDrugUrineTest === null
                        ? null
                        : Boolean(+formData.PositiveDrugUrineTest),

                [CardDayData.DehydrationBeforePeriods]:
                    formData.DehydrationBeforePeriods === null
                        ? null
                        : Boolean(+formData.DehydrationBeforePeriods),

                [CardDayData.VomitingOrDiarrheaAfterDose]:
                    formData.VomitingOrDiarrheaAfterDose === null
                        ? null
                        : Boolean(+formData.VomitingOrDiarrheaAfterDose),

                [CardDayData.TechnicalBloodSamplingDifficulties]:
                    formData.TechnicalBloodSamplingDifficulties === null
                        ? null
                        : Boolean(+formData.TechnicalBloodSamplingDifficulties),

                [CardDayData.IsContinue]:
                    formData.IsContinue === null
                        ? null
                        : Boolean(+formData.IsContinue),

                [CardDayData.IsInvited]:
                    formData.IsInvited === null
                        ? null
                        : Boolean(+formData.IsInvited),
                [CardDayData.CardId]: +id,
            });
            navigate(`/documents/${protocolId}`);
        } catch (error) {
            console.log(error);
            const errorMessage = (
                <div className='error-message-container'>
                    <span className='font-span'>
                        Ошибка при создании документа.
                    </span>
                </div>
            );
            message.error(errorMessage, 4);
        }
    };

    const handleEditDoc = async () => {
        try {
            await axiosCardRequest.post('/Day/Edit', {
                ...formData,
                [CardDayData.BloodDrawnTime]:
                    formData.BloodDrawnTime === null
                        ? null
                        : formData.BloodDrawnTime + ':00',
                [CardDayData.DayNumber]:
                    formData.DayNumber === null ? null : +formData.DayNumber,
                [CardDayData.IsBloodDrawn]:
                    formData.IsBloodDrawn === null
                        ? null
                        : Boolean(+formData.IsBloodDrawn),
                [CardDayData.IsUrinalysisPerformedForDrugs]:
                    formData.IsUrinalysisPerformedForDrugs === null
                        ? null
                        : Boolean(+formData.IsUrinalysisPerformedForDrugs),

                [CardDayData.IsUrineContainsDrugs]:
                    formData.IsUrineContainsDrugs === null
                        ? null
                        : Boolean(+formData.IsUrineContainsDrugs),

                [CardDayData.IsUrinalysisPerformedForCotinine]:
                    formData.IsUrinalysisPerformedForCotinine === null
                        ? null
                        : Boolean(+formData.IsUrinalysisPerformedForCotinine),

                [CardDayData.IsUrineContainsCotinine]:
                    formData.IsUrineContainsCotinine === null
                        ? null
                        : Boolean(+formData.IsUrineContainsCotinine),

                [CardDayData.IsAlhocolContentTestPerformed]:
                    formData.IsAlhocolContentTestPerformed === null
                        ? null
                        : Boolean(+formData.IsAlhocolContentTestPerformed),

                [CardDayData.IsAdverseEvents]:
                    formData.IsAdverseEvents === null
                        ? null
                        : Boolean(+formData.IsAdverseEvents),

                [CardDayData.DoctorDecision]:
                    formData.DoctorDecision === null
                        ? null
                        : Boolean(+formData.DoctorDecision),

                [CardDayData.ConsentWithdrawal]:
                    formData.ConsentWithdrawal === null
                        ? null
                        : Boolean(+formData.ConsentWithdrawal),

                [CardDayData.ProtocolViolation]:
                    formData.ProtocolViolation === null
                        ? null
                        : Boolean(+formData.ProtocolViolation),

                [CardDayData.ParticipantInclusionViolation]:
                    formData.ParticipantInclusionViolation === null
                        ? null
                        : Boolean(+formData.ParticipantInclusionViolation),

                [CardDayData.MedicationUse]:
                    formData.MedicationUse === null
                        ? null
                        : Boolean(+formData.MedicationUse),

                [CardDayData.HospitalizationRequired]:
                    formData.HospitalizationRequired === null
                        ? null
                        : Boolean(+formData.HospitalizationRequired),

                [CardDayData.AdverseEvent]:
                    formData.AdverseEvent === null
                        ? null
                        : Boolean(+formData.AdverseEvent),

                [CardDayData.PositiveAlcoholBreathTest]:
                    formData.PositiveAlcoholBreathTest === null
                        ? null
                        : Boolean(+formData.PositiveAlcoholBreathTest),

                [CardDayData.PositiveCotinineUrineTest]:
                    formData.PositiveCotinineUrineTest === null
                        ? null
                        : Boolean(+formData.PositiveCotinineUrineTest),

                [CardDayData.PositiveDrugUrineTest]:
                    formData.PositiveDrugUrineTest === null
                        ? null
                        : Boolean(+formData.PositiveDrugUrineTest),

                [CardDayData.DehydrationBeforePeriods]:
                    formData.DehydrationBeforePeriods === null
                        ? null
                        : Boolean(+formData.DehydrationBeforePeriods),

                [CardDayData.VomitingOrDiarrheaAfterDose]:
                    formData.VomitingOrDiarrheaAfterDose === null
                        ? null
                        : Boolean(+formData.VomitingOrDiarrheaAfterDose),

                [CardDayData.TechnicalBloodSamplingDifficulties]:
                    formData.TechnicalBloodSamplingDifficulties === null
                        ? null
                        : Boolean(+formData.TechnicalBloodSamplingDifficulties),

                [CardDayData.IsContinue]:
                    formData.IsContinue === null
                        ? null
                        : Boolean(+formData.IsContinue),

                [CardDayData.IsInvited]:
                    formData.IsInvited === null
                        ? null
                        : Boolean(+formData.IsInvited),
                [CardDayData.CardId]: +id,
            });
            navigate(`/documents/${protocolId}`);
        } catch (error) {
            console.log(error);
            const errorMessage = (
                <div className='error-message-container'>
                    <span className='font-span'>
                        Ошибка при создании документа.
                    </span>
                </div>
            );
            message.error(errorMessage, 4);
        }
    };

    return (
        <div className='layout'>
            <Sidebar />
            <div className='document-data'>
                <div className='document-data-block'>
                    <div className='document-data-block-info'>
                        <InputBlock
                            title={'Выберите дату визита'}
                            items={dayVisit(setFormData, formData)}
                        />
                        <InputBlock
                            title={'Жалобы добровольца'}
                            items={complaintsVisit(setFormData, formData)}
                        />
                        <InputBlock
                            title={'Давление и температура'}
                            items={temperatureVisit(setFormData, formData)}
                        />
                        <InputBlock
                            title={'Общий осмотр'}
                            items={overallVisit(setFormData, formData)}
                        />
                        <InputBlock
                            title={'Кожные покровы'}
                            items={skinVisit(setFormData, formData)}
                        />
                        <InputBlock
                            title={'Видимые слизистые'}
                            items={seenVisit(setFormData, formData)}
                        />
                        <InputBlock
                            title={'Лимфоузлы'}
                            items={lymphVisit(setFormData, formData)}
                        />
                        <InputBlock
                            title={'Глаза, уши, нос'}
                            items={eyeVisit(setFormData, formData)}
                        />
                        <InputBlock
                            title={'Голова и шея'}
                            items={headVisit(setFormData, formData)}
                        />
                        <InputBlock
                            title={'Вены верхних конечностей'}
                            items={venumVisit(setFormData, formData)}
                        />
                        <InputBlock
                            title={'Сердечно-сосудистая система'}
                            items={heartVisit(setFormData, formData)}
                        />
                        <InputBlock
                            title={'Дыхательная система'}
                            items={breathVisit(setFormData, formData)}
                        />
                        <InputBlock
                            title={'Костно-мышечная система'}
                            items={boneVisit(setFormData, formData)}
                        />
                        <InputBlock
                            title={'Пищеварительная система'}
                            items={foodVisit(setFormData, formData)}
                        />
                        <InputBlock
                            title={'Мочевыделительная  система'}
                            items={pissVisit(setFormData, formData)}
                        />
                        <InputBlock
                            title={
                                'Нервная система (моторная и сенсорная функции)'
                            }
                            items={nervousVisit(setFormData, formData)}
                        />
                        <InputBlock
                            title={'Психическое состояние'}
                            items={psychoVisit(setFormData, formData)}
                        />
                        <SelectBlock
                            title={`Забор пробы крови для ФК анализа ${
                                formData[CardDayData.DayNumber] === '0'
                                    ? '+36 ч'
                                    : formData[CardDayData.DayNumber] === '1'
                                    ? '+48 ч'
                                    : formData[CardDayData.DayNumber] === '2'
                                    ? '+72 ч'
                                    : '36 ч'
                            }. Время _____/____ (ЧЧ:ММ)`}
                            items={bloodHoursVisit(setFormData, formData)}
                        />

                        <SelectBlock
                            title={`Проведен анализ мочи с использованием тест полосок ИммуноХром-Нарко на содержание наркотических веществ и сильнодействующих препаратов`}
                            items={isPissVisit(setFormData, formData)}
                        />
                        <SelectBlock
                            title={`Результат: наркотические вещества и / или сильнодействующие препараты обнаружены`}
                            items={isPissSecondVisit(setFormData, formData)}
                        />
                        <SelectBlock
                            title={`Проведен тест мочи на котинин`}
                            items={isPissThirdVisit(setFormData, formData)}
                        />
                        <SelectBlock
                            title={`Результат: котинин обнаружен`}
                            items={isPissFourthVisit(setFormData, formData)}
                        />
                        <SelectBlock
                            title={`Проведен тест на содержание паров алкоголя в выдыхаемом воздухе при помощи алкометра. Результат _______________ промилле`}
                            items={isPissFifthVisit(setFormData, formData)}
                        />
                        <SelectBlock
                            title={`Нежелательные явления`}
                            items={isPissSixVisit(setFormData, formData)}
                        />
                        <InputBlock
                            title={
                                'Если да, опишите (подробно укажите событие, оценив тяжесть, связь с препаратом, исход). В случае СНЯ в течении 24 часов сообщите Спонсору исследования!'
                            }
                            items={adverseDescVisit(setFormData, formData)}
                        />
                        <SelectBlock
                            title={
                                'Решение врача-исследователя, что добровольца необходимо исключить в интересах самого добровольца'
                            }
                            items={doctorDecisionVisit(setFormData, formData)}
                        />
                        <SelectBlock
                            title={
                                'Отзыв добровольцем информированного согласия, отказ добровольца от участия в исследовании'
                            }
                            items={consentWithdrawalVisit(
                                setFormData,
                                formData
                            )}
                        />
                        <SelectBlock
                            title={
                                'Несоблюдение добровольцем требований протокола: нарушение графика визитов и процедур (пропуск или опоздание более чем на 1 час на сдачу биообразца 2 раза подряд или 3 раза за все исследование), ограничений по питанию и образу жизни, прием запрещенных лекарственных препаратов'
                            }
                            items={protocolViolationVisit(
                                setFormData,
                                formData
                            )}
                        />
                        <SelectBlock
                            title={
                                'Выявленное в ходе исследования нарушение при включении добровольца (отсутствие одного из критериев включения или наличие критерия невключения, за исключением показателей АД, ЧСС, ЧДД и температуры тела, отклонения которых могут быть расценены врачом-исследователем как клинически незначимые, когда доброволец может продолжать участие в исследовании'
                            }
                            items={participantInclusionViolationVisit(
                                setFormData,
                                formData
                            )}
                        />
                        <SelectBlock
                            title={
                                'Применение добровольцем или необходимость применения лекарственных препаратов, включая растительные лекарственные препараты и БАД, кроме препаратов исследования'
                            }
                            items={medicationUseVisit(setFormData, formData)}
                        />
                        <SelectBlock
                            title={
                                'Добровольцу требуется лечение в стационаре во время исследования'
                            }
                            items={hospitalizationRequiredVisit(
                                setFormData,
                                formData
                            )}
                        />
                        <SelectBlock
                            title={
                                'У добровольца возникло нежелательное явление, которое делает дальнейшее участие в исследовании нежелательным, невозможным или небезопасным для него по мнению исследователя'
                            }
                            items={adverseEventVisit(setFormData, formData)}
                        />
                        <SelectBlock
                            title={
                                'Положительный тест на содержание алкоголя в выдыхаемом воздухе'
                            }
                            items={positiveAlcoholBreathTestVisit(
                                setFormData,
                                formData
                            )}
                        />
                        <SelectBlock
                            title={'Положительный тест мочи на котинин'}
                            items={positiveCotinineUrineTestVisit(
                                setFormData,
                                formData
                            )}
                        />
                        <SelectBlock
                            title={
                                'Положительный тест на содержание наркотических и сильнодействующих веществ в моче'
                            }
                            items={positiveDrugUrineTestVisit(
                                setFormData,
                                formData
                            )}
                        />
                        <SelectBlock
                            title={
                                'Дегидратация из-за диареи, рвоты или другой причины в течение 24 часов до начала I или II периодов исследования'
                            }
                            items={dehydrationBeforePeriodsVisit(
                                setFormData,
                                formData
                            )}
                        />
                        <SelectBlock
                            title={
                                'Рвота или диарея в течение 4 часов после приема препарата в любом периоде исследования (2 ожидаемых Tmax)'
                            }
                            items={vomitingOrDiarrheaAfterDoseVisit(
                                setFormData,
                                formData
                            )}
                        />
                        <SelectBlock
                            title={
                                'Технические трудности с отбором образцов крови, приведшие к пропуску 2 и более точек подряд'
                            }
                            items={technicalBloodSamplingDifficultiesVisit(
                                setFormData,
                                formData
                            )}
                        />
                        <InputBlock
                            title={'Комментарии к визиту:'}
                            items={commentsVisit(setFormData, formData)}
                        />
                        <SelectBlock
                            title={
                                'Доброволец продолжает участие в исследовании?'
                            }
                            items={isContinueVisit(setFormData, formData)}
                        />
                        <SelectBlock
                            title={'Доброволец приглашен на визит?'}
                            items={isInvitedVisit(setFormData, formData)}
                        />
                        <InputBlock
                            title={'Лечащий врач'}
                            items={doctorVisit(setFormData, formData)}
                        />
                        {pathParts === 'edit' ? (
                            <button
                                onClick={handleEditDoc}
                                style={{
                                    alignSelf: 'center',
                                    justifySelf: 'center',
                                }}
                            >
                                Изменить
                            </button>
                        ) : (
                            <button
                                onClick={handleCreateDoc}
                                style={{
                                    alignSelf: 'center',
                                    justifySelf: 'center',
                                }}
                            >
                                Сохранить
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisitsData;
