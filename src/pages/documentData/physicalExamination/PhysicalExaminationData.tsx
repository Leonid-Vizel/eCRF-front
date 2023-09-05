import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { message } from 'antd';
import axios from 'axios';
import Cookies from 'js-cookie';
import { PhysicalExam } from '../../../utils/types/documentType';
import {
  CardScreeningData,
  PhysicalExamData,
} from '../../../utils/types/enums/documentEnums';
import Sidebar from '../../../components/document/sidebar/Sidebar';
import InputBlock from '../../../components/document/inputBlock/InputBlock';
import { weightHeightPhysical } from './blockInputs/weightHeightPhysical';
import { temperaturePhysical } from './blockInputs/temperaturePhysical';
import { complainsPhysical } from './blockInputs/complainsPhysical';
import { overallPhysical } from './blockInputs/overallPhysical';
import { skinPhysical } from './blockInputs/skinPhysical';
import { mucousPhysical } from './blockInputs/mucousPhysical';
import { lymphPhysical } from './blockInputs/lymphPhysical';
import { eyesEarsNose } from './blockInputs/eyesEarsNose';
import { headNeckPhysical } from './blockInputs/headNeckPhysical';
import { upperVeinsPhysical } from './blockInputs/upperVeinsPhysical';
import { cardiovascular } from './blockInputs/cardiovascular';
import { respiratoryPhysical } from './blockInputs/respiratoryPhysical';
import { musculoskeletalPhysical } from './blockInputs/musculoskeletalPhysical';
import { digestivePhysical } from './blockInputs/digestivePhysical';
import { urinaryPhysical } from './blockInputs/urinaryPhysical';
import { nervousPhysical } from './blockInputs/nervousPhysical';
import { mentalPhysical } from './blockInputs/mentalPhysical';
import SelectBlock from '../../../components/document/selectBlock/SelectBlock';
import { ECGPhysical } from './blockInputs/ECGPhysical';
import { urineFirst } from './blockInputs/urineFirst';
import { urineSecond } from './blockInputs/urineSecond';
import { urineThird } from './blockInputs/urineThird';
import { urineFourth } from './blockInputs/urineFourth';
import { alcoholPhysical } from './blockInputs/AlcoholPhysical';
import { pregnacyFirst } from './blockInputs/PregnacyFirst';
import { pregnacySecond } from './blockInputs/PregnacySecond';
import { covidFirst } from './blockInputs/covidFirst';
import { covidSecond } from './blockInputs/covidSecond';
import { covidOldPhysical } from './blockInputs/covidOldPhysical';
import { test10HoursAwarePhysical } from './blockInputs/test10HoursAwarePhysical';
import { labDatePhysical } from './blockInputs/labDatePhysical';
import { emptyStomachPhysical } from './blockInputs/emptyStomachPhysical';
import { bloodSamplesPhysical } from './blockInputs/bloodSamplesPhysical';
import { bloodCentralLabPhysical } from './blockInputs/bloodCentralLabPhysical';
import { urineCentralLabPhysical } from './blockInputs/urineCentralLabPhysical';
import { labRoutePhysical } from './blockInputs/labRoutePhysical';
import { rgSurveyRoutePhysical } from './blockInputs/rgSurveyRoutePhysical';
import { XRayPhysical } from './blockInputs/XRayPhysical';
import { XRayCopyPhysical } from './blockInputs/XRayCopyPhysical';
import { analysisPhysical } from './blockInputs/analysisPhysical';
import { GeneralBlood } from './blockInputs/GeneralBlood';
import { BioBloodComplete } from './blockInputs/BioBloodComplete';
import { urinalysisSedimentComplete } from './blockInputs/urinalysisSedimentComplete';
import { HIVComplete } from './blockInputs/HIVComplete';
import {
  axiosCardRequest,
  BASE_CARD_URL,
} from '../../../utils/request/NewAxiosRequest';

const PhysicalExaminationData = () => {
  const { pathname } = useLocation();
  const pathParts = pathname.split('/')[3];
  const { id, protocolId } = useParams();
  const navigate = useNavigate();

  const ref: any = useRef();

  const [formData, setFormData] = useState<PhysicalExam>({
    // [PhysicalExamData.ECGFilePath]: "null",
    [PhysicalExamData.Weight]: null,
    [PhysicalExamData.WeightMeasurement]: null,
    [PhysicalExamData.Height]: null,
    [PhysicalExamData.SystolicPressure]: null,
    [PhysicalExamData.DiastolicPressure]: null,
    [PhysicalExamData.HeartRate]: null,
    [PhysicalExamData.RespiratoryRate]: null,
    [PhysicalExamData.Temperature]: null,
    [PhysicalExamData.Complaints]: null,

    [PhysicalExamData.InspectionComplete]: null,
    [PhysicalExamData.InspectionIndicator]: null,
    [PhysicalExamData.InspectionDeviation]: null,
    [PhysicalExamData.InspectionComment]: null,

    [PhysicalExamData.SkinComplete]: null,
    [PhysicalExamData.SkinIndicator]: null,
    [PhysicalExamData.SkinDeviation]: null,
    [PhysicalExamData.SkinComment]: null,

    [PhysicalExamData.MucousComplete]: null,
    [PhysicalExamData.MucousIndicator]: null,
    [PhysicalExamData.MucousDeviation]: null,
    [PhysicalExamData.MucousComment]: null,

    [PhysicalExamData.LymphComplete]: null,
    [PhysicalExamData.LymphIndicator]: null,
    [PhysicalExamData.LymphDeviation]: null,
    [PhysicalExamData.LymphComment]: null,

    [PhysicalExamData.EyesEarsNoseComplete]: null,
    [PhysicalExamData.EyesEarsNoseIndicator]: null,
    [PhysicalExamData.EyesEarsNoseDeviation]: null,
    [PhysicalExamData.EyesEarsNoseComment]: null,

    [PhysicalExamData.HeadNeckComplete]: null,
    [PhysicalExamData.HeadNeckIndicator]: null,
    [PhysicalExamData.HeadNeckDeviation]: null,
    [PhysicalExamData.HeadNeckComment]: null,

    [PhysicalExamData.UpperVeinsComplete]: null,
    [PhysicalExamData.UpperVeinsIndicator]: null,
    [PhysicalExamData.UpperVeinsDeviation]: null,
    [PhysicalExamData.UpperVeinsComment]: null,

    [PhysicalExamData.CardiovascularComplete]: null,
    [PhysicalExamData.CardiovascularIndicator]: null,
    [PhysicalExamData.CardiovascularDeviation]: null,
    [PhysicalExamData.CardiovascularComment]: null,

    [PhysicalExamData.RespiratoryComplete]: null,
    [PhysicalExamData.RespiratoryIndicator]: null,
    [PhysicalExamData.RespiratoryDeviation]: null,
    [PhysicalExamData.RespiratoryComment]: null,

    [PhysicalExamData.MusculoskeletalComplete]: null,
    [PhysicalExamData.MusculoskeletalIndicator]: null,
    [PhysicalExamData.MusculoskeletalDeviation]: null,
    [PhysicalExamData.MusculoskeletalComment]: null,

    [PhysicalExamData.DigestiveComplete]: null,
    [PhysicalExamData.DigestiveIndicator]: null,
    [PhysicalExamData.DigestiveDeviation]: null,
    [PhysicalExamData.DigestiveComment]: null,

    [PhysicalExamData.UrinaryComplete]: null,
    [PhysicalExamData.UrinaryIndicator]: null,
    [PhysicalExamData.UrinaryDeviation]: null,
    [PhysicalExamData.UrinaryComment]: null,

    [PhysicalExamData.NervousComplete]: null,
    [PhysicalExamData.NervousIndicator]: null,
    [PhysicalExamData.NervousDeviation]: null,
    [PhysicalExamData.NervousComment]: null,

    [PhysicalExamData.MentalComplete]: null,
    [PhysicalExamData.MentalIndicator]: null,
    [PhysicalExamData.MentalDeviation]: null,
    [PhysicalExamData.MentalComment]: null,

    [PhysicalExamData.ECGTaken]: null,
    [PhysicalExamData.ECGTapeAttached]: null,
    [PhysicalExamData.ECGComment]: null,

    [PhysicalExamData.UrineAnalysisName]: null,
    [PhysicalExamData.UrineAnalysis]: null,
    [PhysicalExamData.UrineAnalysisResult]: null,
    [PhysicalExamData.UrineKotininAnalysis]: null,
    [PhysicalExamData.UrineKotininAnalysisResult]: null,
    [PhysicalExamData.CovidTest]: null,
    [PhysicalExamData.CovidTestResult]: null,
    [PhysicalExamData.CovidOldTest]: null,
    [PhysicalExamData.Test10HoursAware]: null,
    [PhysicalExamData.AlcoholTestPromiles]: null,
    [PhysicalExamData.PregnancyTest]: null,
    [PhysicalExamData.PregnancyTestResult]: null,
    [PhysicalExamData.CovidOldTestDate]: null,

    [PhysicalExamData.LabDate]: null,
    [PhysicalExamData.EmptyStomach]: null,
    [PhysicalExamData.BloodSamples]: null,
    [PhysicalExamData.BloodCentralLab]: null,
    [PhysicalExamData.UrineCentralLab]: null,
    [PhysicalExamData.LabRoute]: null,
    [PhysicalExamData.RgSurveyRoute]: null,
    [PhysicalExamData.XRay]: null,
    [PhysicalExamData.XRayCopy]: null,
    [PhysicalExamData.Analysis]: null,
    [PhysicalExamData.LabRouteName]: null,
    [PhysicalExamData.AnalysisDate]: null,

    [PhysicalExamData.GeneralBloodComplete]: null,
    [PhysicalExamData.GeneralBloodIndicator]: null,
    [PhysicalExamData.GeneralBloodDeviation]: null,
    [PhysicalExamData.BioBloodComplete]: null,
    [PhysicalExamData.BioBloodIndicator]: null,
    [PhysicalExamData.BioBloodDeviation]: null,
    [PhysicalExamData.GeneralBloodComment]: null,
    [PhysicalExamData.BioBloodComment]: null,

    [PhysicalExamData.UrinalysisSedimentComplete]: null,
    [PhysicalExamData.UrinalysisSedimentIndicator]: null,
    [PhysicalExamData.UrinalysisSedimentDeviation]: null,
    [PhysicalExamData.UrinalysisSedimentComment]: null,

    [PhysicalExamData.HIVComplete]: null,
    [PhysicalExamData.HIVIndicator]: null,
    [PhysicalExamData.HIVDeviation]: null,
    [PhysicalExamData.HIVComment]: null,
  });

  useEffect(() => {
    if (pathParts === 'edit') {
      const getCreatedData = async () => {
        const { data } = await axiosCardRequest.get(
          `/PhysicalExam/Index/${id}`,
        );

        setFormData({
          ...data,
          [PhysicalExamData.InspectionComplete]:
            data.InspectionComplete === null
              ? null
              : data.InspectionComplete
                ? '1'
                : '0',
          [PhysicalExamData.InspectionIndicator]:
            data.InspectionIndicator === null
              ? null
              : data.InspectionIndicator
                ? '1'
                : '0',
          [PhysicalExamData.InspectionDeviation]:
            data.InspectionDeviation === null
              ? null
              : data.InspectionDeviation
                ? '1'
                : '0',
          [PhysicalExamData.SkinComplete]:
            data.SkinComplete === null ? null : data.SkinComplete ? '1' : '0',
          [PhysicalExamData.SkinIndicator]:
            data.SkinIndicator === null ? null : data.SkinIndicator ? '1' : '0',
          [PhysicalExamData.SkinDeviation]:
            data.SkinDeviation === null ? null : data.SkinDeviation ? '1' : '0',
          [PhysicalExamData.MucousComplete]:
            data.MucousComplete === null
              ? null
              : data.MucousComplete
                ? '1'
                : '0',
          [PhysicalExamData.MucousIndicator]:
            data.MucousIndicator === null
              ? null
              : data.MucousIndicator
                ? '1'
                : '0',
          [PhysicalExamData.MucousDeviation]:
            data.MucousDeviation === null
              ? null
              : data.MucousDeviation
                ? '1'
                : '0',
          [PhysicalExamData.LymphComplete]:
            data.LymphComplete === null ? null : data.LymphComplete ? '1' : '0',
          [PhysicalExamData.LymphIndicator]:
            data.LymphIndicator === null
              ? null
              : data.LymphIndicator
                ? '1'
                : '0',
          [PhysicalExamData.LymphDeviation]:
            data.LymphDeviation === null
              ? null
              : data.LymphDeviation
                ? '1'
                : '0',
          [PhysicalExamData.EyesEarsNoseComplete]:
            data.EyesEarsNoseComplete === null
              ? null
              : data.EyesEarsNoseComplete
                ? '1'
                : '0',
          [PhysicalExamData.EyesEarsNoseIndicator]:
            data.EyesEarsNoseIndicator === null
              ? null
              : data.EyesEarsNoseIndicator
                ? '1'
                : '0',
          [PhysicalExamData.EyesEarsNoseDeviation]:
            data.EyesEarsNoseDeviation === null
              ? null
              : data.EyesEarsNoseDeviation
                ? '1'
                : '0',
          [PhysicalExamData.HeadNeckComplete]:
            data.HeadNeckComplete === null
              ? null
              : data.HeadNeckComplete
                ? '1'
                : '0',
          [PhysicalExamData.HeadNeckIndicator]:
            data.HeadNeckIndicator === null
              ? null
              : data.HeadNeckIndicator
                ? '1'
                : '0',
          [PhysicalExamData.HeadNeckDeviation]:
            data.HeadNeckDeviation === null
              ? null
              : data.HeadNeckDeviation
                ? '1'
                : '0',
          [PhysicalExamData.UpperVeinsComplete]:
            data.UpperVeinsComplete === null
              ? null
              : data.UpperVeinsComplete
                ? '1'
                : '0',
          [PhysicalExamData.UpperVeinsIndicator]:
            data.UpperVeinsIndicator === null
              ? null
              : data.UpperVeinsIndicator
                ? '1'
                : '0',
          [PhysicalExamData.UpperVeinsDeviation]:
            data.UpperVeinsDeviation === null
              ? null
              : data.UpperVeinsDeviation
                ? '1'
                : '0',
          [PhysicalExamData.CardiovascularComplete]:
            data.CardiovascularComplete === null
              ? null
              : data.CardiovascularComplete
                ? '1'
                : '0',
          [PhysicalExamData.CardiovascularIndicator]:
            data.CardiovascularIndicator === null
              ? null
              : data.CardiovascularIndicator
                ? '1'
                : '0',
          [PhysicalExamData.CardiovascularDeviation]:
            data.CardiovascularDeviation === null
              ? null
              : data.CardiovascularDeviation
                ? '1'
                : '0',
          [PhysicalExamData.RespiratoryComplete]:
            data.RespiratoryComplete === null
              ? null
              : data.RespiratoryComplete
                ? '1'
                : '0',
          [PhysicalExamData.RespiratoryIndicator]:
            data.RespiratoryIndicator === null
              ? null
              : data.RespiratoryIndicator
                ? '1'
                : '0',
          [PhysicalExamData.RespiratoryDeviation]:
            data.RespiratoryDeviation === null
              ? null
              : data.RespiratoryDeviation
                ? '1'
                : '0',
          [PhysicalExamData.MusculoskeletalComplete]:
            data.MusculoskeletalComplete === null
              ? null
              : data.MusculoskeletalComplete
                ? '1'
                : '0',
          [PhysicalExamData.MusculoskeletalIndicator]:
            data.MusculoskeletalIndicator === null
              ? null
              : data.MusculoskeletalIndicator
                ? '1'
                : '0',
          [PhysicalExamData.MusculoskeletalDeviation]:
            data.MusculoskeletalDeviation === null
              ? null
              : data.MusculoskeletalDeviation
                ? '1'
                : '0',
          [PhysicalExamData.DigestiveComplete]:
            data.DigestiveComplete === null
              ? null
              : data.DigestiveComplete
                ? '1'
                : '0',
          [PhysicalExamData.DigestiveIndicator]:
            data.DigestiveIndicator === null
              ? null
              : data.DigestiveIndicator
                ? '1'
                : '0',
          [PhysicalExamData.DigestiveDeviation]:
            data.DigestiveDeviation === null
              ? null
              : data.DigestiveDeviation
                ? '1'
                : '0',
          [PhysicalExamData.UrinaryComplete]:
            data.UrinaryComplete === null
              ? null
              : data.UrinaryComplete
                ? '1'
                : '0',
          [PhysicalExamData.UrinaryIndicator]:
            data.UrinaryIndicator === null
              ? null
              : data.UrinaryIndicator
                ? '1'
                : '0',
          [PhysicalExamData.UrinaryDeviation]:
            data.UrinaryDeviation === null
              ? null
              : data.UrinaryDeviation
                ? '1'
                : '0',
          [PhysicalExamData.NervousComplete]:
            data.NervousComplete === null
              ? null
              : data.NervousComplete
                ? '1'
                : '0',
          [PhysicalExamData.NervousIndicator]:
            data.NervousIndicator === null
              ? null
              : data.NervousIndicator
                ? '1'
                : '0',
          [PhysicalExamData.NervousDeviation]:
            data.NervousDeviation === null
              ? null
              : data.NervousDeviation
                ? '1'
                : '0',
          [PhysicalExamData.MentalComplete]:
            data.MentalComplete === null
              ? null
              : data.MentalComplete
                ? '1'
                : '0',
          [PhysicalExamData.MentalIndicator]:
            data.MentalIndicator === null
              ? null
              : data.MentalIndicator
                ? '1'
                : '0',
          [PhysicalExamData.MentalDeviation]:
            data.MentalDeviation === null
              ? null
              : data.MentalDeviation
                ? '1'
                : '0',
          [PhysicalExamData.ECGTaken]:
            data.ECGTaken === null ? null : data.ECGTaken ? '1' : '0',
          [PhysicalExamData.ECGTapeAttached]:
            data.ECGTapeAttached === null
              ? null
              : data.ECGTapeAttached
                ? '1'
                : '0',
          [PhysicalExamData.UrineAnalysis]:
            data.UrineAnalysis === null ? null : data.UrineAnalysis ? '1' : '0',
          [PhysicalExamData.UrineAnalysisResult]:
            data.UrineAnalysisResult === null
              ? null
              : data.UrineAnalysisResult
                ? '1'
                : '0',
          [PhysicalExamData.UrineKotininAnalysis]:
            data.UrineKotininAnalysis === null
              ? null
              : data.UrineKotininAnalysis
                ? '1'
                : '0',
          [PhysicalExamData.UrineKotininAnalysisResult]:
            data.UrineKotininAnalysisResult === null
              ? null
              : data.UrineKotininAnalysisResult
                ? '1'
                : '0',
          [PhysicalExamData.CovidTest]:
            data.CovidTest === null ? null : data.CovidTest ? '1' : '0',
          [PhysicalExamData.CovidTestResult]:
            data.CovidTestResult === null
              ? null
              : data.CovidTestResult
                ? '1'
                : '0',
          [PhysicalExamData.CovidOldTest]:
            data.CovidOldTest === null ? null : data.CovidOldTest ? '1' : '0',
          [PhysicalExamData.Test10HoursAware]:
            data.Test10HoursAware === null
              ? null
              : data.Test10HoursAware
                ? '1'
                : '0',
          [PhysicalExamData.EmptyStomach]:
            data.EmptyStomach === null ? null : data.EmptyStomach ? '1' : '0',
          [PhysicalExamData.BloodSamples]:
            data.BloodSamples === null ? null : data.BloodSamples ? '1' : '0',
          [PhysicalExamData.BloodCentralLab]:
            data.BloodCentralLab === null
              ? null
              : data.BloodCentralLab
                ? '1'
                : '0',
          [PhysicalExamData.UrineCentralLab]:
            data.UrineCentralLab === null
              ? null
              : data.UrineCentralLab
                ? '1'
                : '0',
          [PhysicalExamData.LabRoute]:
            data.LabRoute === null ? null : data.LabRoute ? '1' : '0',
          [PhysicalExamData.RgSurveyRoute]:
            data.RgSurveyRoute === null ? null : data.RgSurveyRoute ? '1' : '0',
          [PhysicalExamData.XRay]:
            data.XRay === null ? null : data.XRay ? '1' : '0',
          [PhysicalExamData.XRayCopy]:
            data.XRayCopy === null ? null : data.XRayCopy ? '1' : '0',
          [PhysicalExamData.Analysis]:
            data.Analysis === null ? null : data.Analysis ? '1' : '0',
          [PhysicalExamData.GeneralBloodComplete]:
            data.GeneralBloodComplete === null
              ? null
              : data.GeneralBloodComplete
                ? '1'
                : '0',
          [PhysicalExamData.GeneralBloodIndicator]:
            data.GeneralBloodIndicator === null
              ? null
              : data.GeneralBloodIndicator
                ? '1'
                : '0',
          [PhysicalExamData.GeneralBloodDeviation]:
            data.GeneralBloodDeviation === null
              ? null
              : data.GeneralBloodDeviation
                ? '1'
                : '0',
          [PhysicalExamData.BioBloodComplete]:
            data.BioBloodComplete === null
              ? null
              : data.BioBloodComplete
                ? '1'
                : '0',
          [PhysicalExamData.BioBloodIndicator]:
            data.BioBloodIndicator === null
              ? null
              : data.BioBloodIndicator
                ? '1'
                : '0',
          [PhysicalExamData.BioBloodDeviation]:
            data.BioBloodDeviation === null
              ? null
              : data.BioBloodDeviation
                ? '1'
                : '0',
          [PhysicalExamData.UrinalysisSedimentComplete]:
            data.UrinalysisSedimentComplete === null
              ? null
              : data.UrinalysisSedimentComplete
                ? '1'
                : '0',
          [PhysicalExamData.UrinalysisSedimentIndicator]:
            data.UrinalysisSedimentIndicator === null
              ? null
              : data.UrinalysisSedimentIndicator
                ? '1'
                : '0',
          [PhysicalExamData.UrinalysisSedimentDeviation]:
            data.UrinalysisSedimentDeviation === null
              ? null
              : data.UrinalysisSedimentDeviation
                ? '1'
                : '0',
          [PhysicalExamData.HIVComplete]:
            data.HIVComplete === null ? null : data.HIVComplete ? '1' : '0',
          [PhysicalExamData.HIVIndicator]:
            data.HIVIndicator === null ? null : data.HIVIndicator ? '1' : '0',
          [PhysicalExamData.HIVDeviation]:
            data.HIVDeviation === null ? null : data.HIVDeviation ? '1' : '0',
        });
      };

      getCreatedData();
    }
  }, []);

  const handleButtonClick = async () => {
    const formData = new FormData();

    if (ref.current && ref.current.files[0]) {
      formData.set('file', ref.current.files[0]);
      await axios.post(
        `${BASE_CARD_URL}/PhysicalExam/UpdateFile/${id}`,
        formData,
        {
          headers: {
            authorization: `Bearer ${Cookies.get('token')}`,
            'Content-Type': 'multipart/form-data',
          },
        },
      );
    }
  };

  const handleCreateDoc = async () => {
    try {
      await axiosCardRequest.post('/PhysicalExam/Create', {
        ...formData,
        [PhysicalExamData.PregnancyTestResult]:
          formData[PhysicalExamData.PregnancyTestResult] === null
            ? null
            : +formData[PhysicalExamData.PregnancyTestResult],
        [PhysicalExamData.PregnancyTest]:
          formData[PhysicalExamData.PregnancyTest] === null
            ? null
            : +formData[PhysicalExamData.PregnancyTest],
        [PhysicalExamData.Weight]:
          formData[PhysicalExamData.Weight] === null
            ? null
            : +formData[PhysicalExamData.Weight],
        [PhysicalExamData.Height]:
          formData[PhysicalExamData.Height] === null
            ? null
            : +formData[PhysicalExamData.Height],
        [PhysicalExamData.WeightMeasurement]:
          formData[PhysicalExamData.WeightMeasurement] === null
            ? null
            : +formData[PhysicalExamData.WeightMeasurement],
        [PhysicalExamData.SystolicPressure]:
          formData[PhysicalExamData.SystolicPressure] === null
            ? null
            : +formData[PhysicalExamData.SystolicPressure],
        [PhysicalExamData.DiastolicPressure]:
          formData[PhysicalExamData.DiastolicPressure] === null
            ? null
            : +formData[PhysicalExamData.DiastolicPressure],
        [PhysicalExamData.HeartRate]:
          formData[PhysicalExamData.HeartRate] === null
            ? null
            : +formData[PhysicalExamData.HeartRate],
        [PhysicalExamData.RespiratoryRate]:
          formData[PhysicalExamData.RespiratoryRate] === null
            ? null
            : +formData[PhysicalExamData.RespiratoryRate],
        [PhysicalExamData.Temperature]:
          formData[PhysicalExamData.Temperature] === null
            ? null
            : +formData[PhysicalExamData.Temperature],
        [PhysicalExamData.AlcoholTestPromiles]:
          formData[PhysicalExamData.AlcoholTestPromiles] === null
            ? null
            : +formData[PhysicalExamData.AlcoholTestPromiles],
        [PhysicalExamData.InspectionComplete]:
          formData[PhysicalExamData.InspectionComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.InspectionComplete]),
        [PhysicalExamData.InspectionIndicator]:
          formData[PhysicalExamData.InspectionIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.InspectionIndicator]),
        [PhysicalExamData.InspectionDeviation]:
          formData[PhysicalExamData.InspectionDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.InspectionDeviation]),
        [PhysicalExamData.SkinComplete]:
          formData[PhysicalExamData.SkinComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.SkinComplete]),
        [PhysicalExamData.SkinIndicator]:
          formData[PhysicalExamData.SkinIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.SkinIndicator]),
        [PhysicalExamData.SkinDeviation]:
          formData[PhysicalExamData.SkinDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.SkinDeviation]),
        [PhysicalExamData.MucousComplete]:
          formData[PhysicalExamData.MucousComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.MucousComplete]),
        [PhysicalExamData.MucousIndicator]:
          formData[PhysicalExamData.MucousIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.MucousIndicator]),
        [PhysicalExamData.MucousDeviation]:
          formData[PhysicalExamData.MucousDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.MucousDeviation]),
        [PhysicalExamData.LymphComplete]:
          formData[PhysicalExamData.LymphComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.LymphComplete]),
        [PhysicalExamData.LymphIndicator]:
          formData[PhysicalExamData.LymphIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.LymphIndicator]),
        [PhysicalExamData.LymphDeviation]:
          formData[PhysicalExamData.LymphDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.LymphDeviation]),
        [PhysicalExamData.EyesEarsNoseComplete]:
          formData[PhysicalExamData.EyesEarsNoseComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.EyesEarsNoseComplete]),
        [PhysicalExamData.EyesEarsNoseIndicator]:
          formData[PhysicalExamData.EyesEarsNoseIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.EyesEarsNoseIndicator]),
        [PhysicalExamData.EyesEarsNoseDeviation]:
          formData[PhysicalExamData.EyesEarsNoseDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.EyesEarsNoseDeviation]),
        [PhysicalExamData.HeadNeckComplete]:
          formData[PhysicalExamData.HeadNeckComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.HeadNeckComplete]),
        [PhysicalExamData.HeadNeckIndicator]:
          formData[PhysicalExamData.HeadNeckIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.HeadNeckIndicator]),
        [PhysicalExamData.HeadNeckDeviation]:
          formData[PhysicalExamData.HeadNeckDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.HeadNeckDeviation]),
        [PhysicalExamData.UpperVeinsComplete]:
          formData[PhysicalExamData.UpperVeinsComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UpperVeinsComplete]),
        [PhysicalExamData.UpperVeinsIndicator]:
          formData[PhysicalExamData.UpperVeinsIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UpperVeinsIndicator]),
        [PhysicalExamData.UpperVeinsDeviation]:
          formData[PhysicalExamData.UpperVeinsDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UpperVeinsDeviation]),
        [PhysicalExamData.CardiovascularComplete]:
          formData[PhysicalExamData.CardiovascularComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.CardiovascularComplete]),
        [PhysicalExamData.CardiovascularIndicator]:
          formData[PhysicalExamData.CardiovascularIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.CardiovascularIndicator]),
        [PhysicalExamData.CardiovascularDeviation]:
          formData[PhysicalExamData.CardiovascularDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.CardiovascularDeviation]),
        [PhysicalExamData.RespiratoryComplete]:
          formData[PhysicalExamData.RespiratoryComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.RespiratoryComplete]),
        [PhysicalExamData.RespiratoryIndicator]:
          formData[PhysicalExamData.RespiratoryIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.RespiratoryIndicator]),
        [PhysicalExamData.RespiratoryDeviation]:
          formData[PhysicalExamData.RespiratoryDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.RespiratoryDeviation]),
        [PhysicalExamData.MusculoskeletalComplete]:
          formData[PhysicalExamData.MusculoskeletalComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.MusculoskeletalComplete]),
        [PhysicalExamData.MusculoskeletalIndicator]:
          formData[PhysicalExamData.MusculoskeletalIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.MusculoskeletalIndicator]),
        [PhysicalExamData.MusculoskeletalDeviation]:
          formData[PhysicalExamData.MusculoskeletalDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.MusculoskeletalDeviation]),
        [PhysicalExamData.DigestiveComplete]:
          formData[PhysicalExamData.DigestiveComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.DigestiveComplete]),
        [PhysicalExamData.DigestiveIndicator]:
          formData[PhysicalExamData.DigestiveIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.DigestiveIndicator]),
        [PhysicalExamData.DigestiveDeviation]:
          formData[PhysicalExamData.DigestiveDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.DigestiveDeviation]),
        [PhysicalExamData.UrinaryComplete]:
          formData[PhysicalExamData.UrinaryComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UrinaryComplete]),
        [PhysicalExamData.UrinaryIndicator]:
          formData[PhysicalExamData.UrinaryIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UrinaryIndicator]),
        [PhysicalExamData.UrinaryDeviation]:
          formData[PhysicalExamData.UrinaryDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UrinaryDeviation]),
        [PhysicalExamData.NervousComplete]:
          formData[PhysicalExamData.NervousComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.NervousComplete]),
        [PhysicalExamData.NervousIndicator]:
          formData[PhysicalExamData.NervousIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.NervousIndicator]),
        [PhysicalExamData.NervousDeviation]:
          formData[PhysicalExamData.NervousDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.NervousDeviation]),
        [PhysicalExamData.MentalComplete]:
          formData[PhysicalExamData.MentalComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.MentalComplete]),
        [PhysicalExamData.MentalIndicator]:
          formData[PhysicalExamData.MentalIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.MentalIndicator]),
        [PhysicalExamData.MentalDeviation]:
          formData[PhysicalExamData.MentalDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.MentalDeviation]),
        [PhysicalExamData.ECGTaken]:
          formData[PhysicalExamData.ECGTaken] === null
            ? null
            : Boolean(+formData[PhysicalExamData.ECGTaken]),
        [PhysicalExamData.ECGTapeAttached]:
          formData[PhysicalExamData.ECGTapeAttached] === null
            ? null
            : Boolean(+formData[PhysicalExamData.ECGTapeAttached]),
        [PhysicalExamData.UrineAnalysis]:
          formData[PhysicalExamData.UrineAnalysis] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UrineAnalysis]),
        [PhysicalExamData.UrineAnalysisResult]:
          formData[PhysicalExamData.UrineAnalysisResult] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UrineAnalysisResult]),
        [PhysicalExamData.UrineKotininAnalysis]:
          formData[PhysicalExamData.UrineKotininAnalysis] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UrineKotininAnalysis]),
        [PhysicalExamData.UrineKotininAnalysisResult]:
          formData[PhysicalExamData.UrineKotininAnalysisResult] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UrineKotininAnalysisResult]),
        [PhysicalExamData.CovidTest]:
          formData[PhysicalExamData.CovidTest] === null
            ? null
            : Boolean(+formData[PhysicalExamData.CovidTest]),
        [PhysicalExamData.CovidTestResult]:
          formData[PhysicalExamData.CovidTestResult] === null
            ? null
            : Boolean(+formData[PhysicalExamData.CovidTestResult]),
        [PhysicalExamData.CovidOldTest]:
          formData[PhysicalExamData.CovidOldTest] === null
            ? null
            : Boolean(+formData[PhysicalExamData.CovidOldTest]),
        [PhysicalExamData.Test10HoursAware]:
          formData[PhysicalExamData.Test10HoursAware] === null
            ? null
            : Boolean(+formData[PhysicalExamData.Test10HoursAware]),
        [PhysicalExamData.EmptyStomach]:
          formData[PhysicalExamData.EmptyStomach] === null
            ? null
            : Boolean(+formData[PhysicalExamData.EmptyStomach]),
        [PhysicalExamData.BloodSamples]:
          formData[PhysicalExamData.BloodSamples] === null
            ? null
            : Boolean(+formData[PhysicalExamData.BloodSamples]),
        [PhysicalExamData.BloodCentralLab]:
          formData[PhysicalExamData.BloodCentralLab] === null
            ? null
            : Boolean(+formData[PhysicalExamData.BloodCentralLab]),
        [PhysicalExamData.UrineCentralLab]:
          formData[PhysicalExamData.UrineCentralLab] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UrineCentralLab]),
        [PhysicalExamData.LabRoute]:
          formData[PhysicalExamData.LabRoute] === null
            ? null
            : Boolean(+formData[PhysicalExamData.LabRoute]),
        [PhysicalExamData.RgSurveyRoute]:
          formData[PhysicalExamData.RgSurveyRoute] === null
            ? null
            : Boolean(+formData[PhysicalExamData.RgSurveyRoute]),
        [PhysicalExamData.XRay]:
          formData[PhysicalExamData.XRay] === null
            ? null
            : Boolean(+formData[PhysicalExamData.XRay]),
        [PhysicalExamData.XRayCopy]:
          formData[PhysicalExamData.XRayCopy] === null
            ? null
            : Boolean(+formData[PhysicalExamData.XRayCopy]),
        [PhysicalExamData.Analysis]:
          formData[PhysicalExamData.Analysis] === null
            ? null
            : Boolean(+formData[PhysicalExamData.Analysis]),
        [PhysicalExamData.GeneralBloodComplete]:
          formData[PhysicalExamData.GeneralBloodComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.GeneralBloodComplete]),
        [PhysicalExamData.GeneralBloodIndicator]:
          formData[PhysicalExamData.GeneralBloodIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.GeneralBloodIndicator]),
        [PhysicalExamData.GeneralBloodDeviation]:
          formData[PhysicalExamData.GeneralBloodDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.GeneralBloodDeviation]),
        [PhysicalExamData.BioBloodComplete]:
          formData[PhysicalExamData.BioBloodComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.BioBloodComplete]),
        [PhysicalExamData.BioBloodIndicator]:
          formData[PhysicalExamData.BioBloodIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.BioBloodIndicator]),
        [PhysicalExamData.BioBloodDeviation]:
          formData[PhysicalExamData.BioBloodDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.BioBloodDeviation]),
        [PhysicalExamData.UrinalysisSedimentComplete]:
          formData[PhysicalExamData.UrinalysisSedimentComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UrinalysisSedimentComplete]),
        [PhysicalExamData.UrinalysisSedimentIndicator]:
          formData[PhysicalExamData.UrinalysisSedimentIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UrinalysisSedimentIndicator]),
        [PhysicalExamData.UrinalysisSedimentDeviation]:
          formData[PhysicalExamData.UrinalysisSedimentDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UrinalysisSedimentDeviation]),
        [PhysicalExamData.HIVComplete]:
          formData[PhysicalExamData.HIVComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.HIVComplete]),
        [PhysicalExamData.HIVIndicator]:
          formData[PhysicalExamData.HIVIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.HIVIndicator]),
        [PhysicalExamData.HIVDeviation]:
          formData[PhysicalExamData.HIVDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.HIVDeviation]),
        CardId: +id,
      });

      handleButtonClick();
      navigate(`/documents/${protocolId}`);
    } catch (error) {
      console.log(error);
      const errorMessage = (
        <div className="error-message-container">
          <span className="font-span">Ошибка при создании документа.</span>
        </div>
      );
      message.error(errorMessage, 4);
    }
  };

  const handleEditDoc = async () => {
    try {
      await axiosCardRequest.post('/PhysicalExam/Edit', {
        ...formData,
        [PhysicalExamData.PregnancyTestResult]:
          formData[PhysicalExamData.PregnancyTestResult] === null
            ? null
            : +formData[PhysicalExamData.PregnancyTestResult],
        [PhysicalExamData.PregnancyTest]:
          formData[PhysicalExamData.PregnancyTest] === null
            ? null
            : +formData[PhysicalExamData.PregnancyTest],
        [PhysicalExamData.Weight]:
          formData[PhysicalExamData.Weight] === null
            ? null
            : +formData[PhysicalExamData.Weight],
        [PhysicalExamData.Height]:
          formData[PhysicalExamData.Height] === null
            ? null
            : +formData[PhysicalExamData.Height],
        [PhysicalExamData.WeightMeasurement]:
          formData[PhysicalExamData.WeightMeasurement] === null
            ? null
            : +formData[PhysicalExamData.WeightMeasurement],
        [PhysicalExamData.SystolicPressure]:
          formData[PhysicalExamData.SystolicPressure] === null
            ? null
            : +formData[PhysicalExamData.SystolicPressure],
        [PhysicalExamData.DiastolicPressure]:
          formData[PhysicalExamData.DiastolicPressure] === null
            ? null
            : +formData[PhysicalExamData.DiastolicPressure],
        [PhysicalExamData.HeartRate]:
          formData[PhysicalExamData.HeartRate] === null
            ? null
            : +formData[PhysicalExamData.HeartRate],
        [PhysicalExamData.RespiratoryRate]:
          formData[PhysicalExamData.RespiratoryRate] === null
            ? null
            : +formData[PhysicalExamData.RespiratoryRate],
        [PhysicalExamData.Temperature]:
          formData[PhysicalExamData.Temperature] === null
            ? null
            : +formData[PhysicalExamData.Temperature],
        [PhysicalExamData.AlcoholTestPromiles]:
          formData[PhysicalExamData.AlcoholTestPromiles] === null
            ? null
            : +formData[PhysicalExamData.AlcoholTestPromiles],
        [PhysicalExamData.InspectionComplete]:
          formData[PhysicalExamData.InspectionComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.InspectionComplete]),
        [PhysicalExamData.InspectionIndicator]:
          formData[PhysicalExamData.InspectionIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.InspectionIndicator]),
        [PhysicalExamData.InspectionDeviation]:
          formData[PhysicalExamData.InspectionDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.InspectionDeviation]),
        [PhysicalExamData.SkinComplete]:
          formData[PhysicalExamData.SkinComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.SkinComplete]),
        [PhysicalExamData.SkinIndicator]:
          formData[PhysicalExamData.SkinIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.SkinIndicator]),
        [PhysicalExamData.SkinDeviation]:
          formData[PhysicalExamData.SkinDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.SkinDeviation]),
        [PhysicalExamData.MucousComplete]:
          formData[PhysicalExamData.MucousComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.MucousComplete]),
        [PhysicalExamData.MucousIndicator]:
          formData[PhysicalExamData.MucousIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.MucousIndicator]),
        [PhysicalExamData.MucousDeviation]:
          formData[PhysicalExamData.MucousDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.MucousDeviation]),
        [PhysicalExamData.LymphComplete]:
          formData[PhysicalExamData.LymphComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.LymphComplete]),
        [PhysicalExamData.LymphIndicator]:
          formData[PhysicalExamData.LymphIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.LymphIndicator]),
        [PhysicalExamData.LymphDeviation]:
          formData[PhysicalExamData.LymphDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.LymphDeviation]),
        [PhysicalExamData.EyesEarsNoseComplete]:
          formData[PhysicalExamData.EyesEarsNoseComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.EyesEarsNoseComplete]),
        [PhysicalExamData.EyesEarsNoseIndicator]:
          formData[PhysicalExamData.EyesEarsNoseIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.EyesEarsNoseIndicator]),
        [PhysicalExamData.EyesEarsNoseDeviation]:
          formData[PhysicalExamData.EyesEarsNoseDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.EyesEarsNoseDeviation]),
        [PhysicalExamData.HeadNeckComplete]:
          formData[PhysicalExamData.HeadNeckComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.HeadNeckComplete]),
        [PhysicalExamData.HeadNeckIndicator]:
          formData[PhysicalExamData.HeadNeckIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.HeadNeckIndicator]),
        [PhysicalExamData.HeadNeckDeviation]:
          formData[PhysicalExamData.HeadNeckDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.HeadNeckDeviation]),
        [PhysicalExamData.UpperVeinsComplete]:
          formData[PhysicalExamData.UpperVeinsComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UpperVeinsComplete]),
        [PhysicalExamData.UpperVeinsIndicator]:
          formData[PhysicalExamData.UpperVeinsIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UpperVeinsIndicator]),
        [PhysicalExamData.UpperVeinsDeviation]:
          formData[PhysicalExamData.UpperVeinsDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UpperVeinsDeviation]),
        [PhysicalExamData.CardiovascularComplete]:
          formData[PhysicalExamData.CardiovascularComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.CardiovascularComplete]),
        [PhysicalExamData.CardiovascularIndicator]:
          formData[PhysicalExamData.CardiovascularIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.CardiovascularIndicator]),
        [PhysicalExamData.CardiovascularDeviation]:
          formData[PhysicalExamData.CardiovascularDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.CardiovascularDeviation]),
        [PhysicalExamData.RespiratoryComplete]:
          formData[PhysicalExamData.RespiratoryComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.RespiratoryComplete]),
        [PhysicalExamData.RespiratoryIndicator]:
          formData[PhysicalExamData.RespiratoryIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.RespiratoryIndicator]),
        [PhysicalExamData.RespiratoryDeviation]:
          formData[PhysicalExamData.RespiratoryDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.RespiratoryDeviation]),
        [PhysicalExamData.MusculoskeletalComplete]:
          formData[PhysicalExamData.MusculoskeletalComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.MusculoskeletalComplete]),
        [PhysicalExamData.MusculoskeletalIndicator]:
          formData[PhysicalExamData.MusculoskeletalIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.MusculoskeletalIndicator]),
        [PhysicalExamData.MusculoskeletalDeviation]:
          formData[PhysicalExamData.MusculoskeletalDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.MusculoskeletalDeviation]),
        [PhysicalExamData.DigestiveComplete]:
          formData[PhysicalExamData.DigestiveComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.DigestiveComplete]),
        [PhysicalExamData.DigestiveIndicator]:
          formData[PhysicalExamData.DigestiveIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.DigestiveIndicator]),
        [PhysicalExamData.DigestiveDeviation]:
          formData[PhysicalExamData.DigestiveDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.DigestiveDeviation]),
        [PhysicalExamData.UrinaryComplete]:
          formData[PhysicalExamData.UrinaryComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UrinaryComplete]),
        [PhysicalExamData.UrinaryIndicator]:
          formData[PhysicalExamData.UrinaryIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UrinaryIndicator]),
        [PhysicalExamData.UrinaryDeviation]:
          formData[PhysicalExamData.UrinaryDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UrinaryDeviation]),
        [PhysicalExamData.NervousComplete]:
          formData[PhysicalExamData.NervousComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.NervousComplete]),
        [PhysicalExamData.NervousIndicator]:
          formData[PhysicalExamData.NervousIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.NervousIndicator]),
        [PhysicalExamData.NervousDeviation]:
          formData[PhysicalExamData.NervousDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.NervousDeviation]),
        [PhysicalExamData.MentalComplete]:
          formData[PhysicalExamData.MentalComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.MentalComplete]),
        [PhysicalExamData.MentalIndicator]:
          formData[PhysicalExamData.MentalIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.MentalIndicator]),
        [PhysicalExamData.MentalDeviation]:
          formData[PhysicalExamData.MentalDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.MentalDeviation]),
        [PhysicalExamData.ECGTaken]:
          formData[PhysicalExamData.ECGTaken] === null
            ? null
            : Boolean(+formData[PhysicalExamData.ECGTaken]),
        [PhysicalExamData.ECGTapeAttached]:
          formData[PhysicalExamData.ECGTapeAttached] === null
            ? null
            : Boolean(+formData[PhysicalExamData.ECGTapeAttached]),
        [PhysicalExamData.UrineAnalysis]:
          formData[PhysicalExamData.UrineAnalysis] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UrineAnalysis]),
        [PhysicalExamData.UrineAnalysisResult]:
          formData[PhysicalExamData.UrineAnalysisResult] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UrineAnalysisResult]),
        [PhysicalExamData.UrineKotininAnalysis]:
          formData[PhysicalExamData.UrineKotininAnalysis] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UrineKotininAnalysis]),
        [PhysicalExamData.UrineKotininAnalysisResult]:
          formData[PhysicalExamData.UrineKotininAnalysisResult] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UrineKotininAnalysisResult]),
        [PhysicalExamData.CovidTest]:
          formData[PhysicalExamData.CovidTest] === null
            ? null
            : Boolean(+formData[PhysicalExamData.CovidTest]),
        [PhysicalExamData.CovidTestResult]:
          formData[PhysicalExamData.CovidTestResult] === null
            ? null
            : Boolean(+formData[PhysicalExamData.CovidTestResult]),
        [PhysicalExamData.CovidOldTest]:
          formData[PhysicalExamData.CovidOldTest] === null
            ? null
            : Boolean(+formData[PhysicalExamData.CovidOldTest]),
        [PhysicalExamData.Test10HoursAware]:
          formData[PhysicalExamData.Test10HoursAware] === null
            ? null
            : Boolean(+formData[PhysicalExamData.Test10HoursAware]),
        [PhysicalExamData.EmptyStomach]:
          formData[PhysicalExamData.EmptyStomach] === null
            ? null
            : Boolean(+formData[PhysicalExamData.EmptyStomach]),
        [PhysicalExamData.BloodSamples]:
          formData[PhysicalExamData.BloodSamples] === null
            ? null
            : Boolean(+formData[PhysicalExamData.BloodSamples]),
        [PhysicalExamData.BloodCentralLab]:
          formData[PhysicalExamData.BloodCentralLab] === null
            ? null
            : Boolean(+formData[PhysicalExamData.BloodCentralLab]),
        [PhysicalExamData.UrineCentralLab]:
          formData[PhysicalExamData.UrineCentralLab] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UrineCentralLab]),
        [PhysicalExamData.LabRoute]:
          formData[PhysicalExamData.LabRoute] === null
            ? null
            : Boolean(+formData[PhysicalExamData.LabRoute]),
        [PhysicalExamData.RgSurveyRoute]:
          formData[PhysicalExamData.RgSurveyRoute] === null
            ? null
            : Boolean(+formData[PhysicalExamData.RgSurveyRoute]),
        [PhysicalExamData.XRay]:
          formData[PhysicalExamData.XRay] === null
            ? null
            : Boolean(+formData[PhysicalExamData.XRay]),
        [PhysicalExamData.XRayCopy]:
          formData[PhysicalExamData.XRayCopy] === null
            ? null
            : Boolean(+formData[PhysicalExamData.XRayCopy]),
        [PhysicalExamData.Analysis]:
          formData[PhysicalExamData.Analysis] === null
            ? null
            : Boolean(+formData[PhysicalExamData.Analysis]),
        [PhysicalExamData.GeneralBloodComplete]:
          formData[PhysicalExamData.GeneralBloodComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.GeneralBloodComplete]),
        [PhysicalExamData.GeneralBloodIndicator]:
          formData[PhysicalExamData.GeneralBloodIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.GeneralBloodIndicator]),
        [PhysicalExamData.GeneralBloodDeviation]:
          formData[PhysicalExamData.GeneralBloodDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.GeneralBloodDeviation]),
        [PhysicalExamData.BioBloodComplete]:
          formData[PhysicalExamData.BioBloodComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.BioBloodComplete]),
        [PhysicalExamData.BioBloodIndicator]:
          formData[PhysicalExamData.BioBloodIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.BioBloodIndicator]),
        [PhysicalExamData.BioBloodDeviation]:
          formData[PhysicalExamData.BioBloodDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.BioBloodDeviation]),
        [PhysicalExamData.UrinalysisSedimentComplete]:
          formData[PhysicalExamData.UrinalysisSedimentComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UrinalysisSedimentComplete]),
        [PhysicalExamData.UrinalysisSedimentIndicator]:
          formData[PhysicalExamData.UrinalysisSedimentIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UrinalysisSedimentIndicator]),
        [PhysicalExamData.UrinalysisSedimentDeviation]:
          formData[PhysicalExamData.UrinalysisSedimentDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.UrinalysisSedimentDeviation]),
        [PhysicalExamData.HIVComplete]:
          formData[PhysicalExamData.HIVComplete] === null
            ? null
            : Boolean(+formData[PhysicalExamData.HIVComplete]),
        [PhysicalExamData.HIVIndicator]:
          formData[PhysicalExamData.HIVIndicator] === null
            ? null
            : Boolean(+formData[PhysicalExamData.HIVIndicator]),
        [PhysicalExamData.HIVDeviation]:
          formData[PhysicalExamData.HIVDeviation] === null
            ? null
            : Boolean(+formData[PhysicalExamData.HIVDeviation]),
        CardId: +id,
      });

      handleButtonClick();
      navigate(`/documents/${protocolId}`);
    } catch (error) {
      console.log(error);
      const errorMessage = (
        <div className="error-message-container">
          <span className="font-span">Ошибка при создании документа.</span>
        </div>
      );
      message.error(errorMessage, 4);
    }
  };

  return (
    <div className="layout">
      <Sidebar />
      <div className="document-data">
        <div className="document-data-block">
          <div className="document-data-block-info">
            <InputBlock
              title="Масса тела и рост"
              items={weightHeightPhysical(setFormData, formData)}
            />
            <InputBlock
              title="Давление и температура"
              items={temperaturePhysical(setFormData, formData)}
            />
            <InputBlock
              title="Жалобы добровольца"
              items={complainsPhysical(setFormData, formData)}
            />
            <InputBlock
              title="Общий осмотр"
              items={overallPhysical(setFormData, formData)}
            />
            <InputBlock
              title="Кожные покровы"
              items={skinPhysical(setFormData, formData)}
            />
            <InputBlock
              title="Видимые слизистые"
              items={mucousPhysical(setFormData, formData)}
            />
            <InputBlock
              title="Лимфоузлы"
              items={lymphPhysical(setFormData, formData)}
            />
            <InputBlock
              title="Глаза, уши, нос"
              items={eyesEarsNose(setFormData, formData)}
            />
            <InputBlock
              title="Голова и шея"
              items={headNeckPhysical(setFormData, formData)}
            />
            <InputBlock
              title="Вены верхних конечностей"
              items={upperVeinsPhysical(setFormData, formData)}
            />
            <InputBlock
              title="Сердечно-сосудистая система"
              items={cardiovascular(setFormData, formData)}
            />
            <InputBlock
              title="Дыхательная система"
              items={respiratoryPhysical(setFormData, formData)}
            />
            <InputBlock
              title="Костно-мышечная система"
              items={musculoskeletalPhysical(setFormData, formData)}
            />
            <InputBlock
              title="Пищеварительная система"
              items={digestivePhysical(setFormData, formData)}
            />
            <InputBlock
              title="Мочевыделительная  система"
              items={urinaryPhysical(setFormData, formData)}
            />
            <InputBlock
              title="Нервная система"
              items={nervousPhysical(setFormData, formData)}
            />
            <InputBlock
              title="Психическое состояние"
              items={mentalPhysical(setFormData, formData)}
            />
            <InputBlock
              title="Лабораторные и инструментальные исследования"
              items={ECGPhysical(setFormData, formData)}
            />
            <div className="fileInput">
              <span>Файл ЭКГ</span>
              <input ref={ref} className="default-input" type="file" />
            </div>
            <InputBlock
              title="Проведен анализ мочи с использованием тест полосок ________________________ на содержание наркотических веществ и сильнодействующих препаратов"
              items={urineFirst(setFormData, formData)}
            />
            <SelectBlock
              title="Результат: наркотические вещества и/или сильнодействующие препараты обнаружены"
              items={urineSecond(setFormData, formData)}
            />
            <SelectBlock
              title="Проведен тест мочи на котинин"
              items={urineThird(setFormData, formData)}
            />
            <SelectBlock
              title="Результат: котинин обнаружен"
              items={urineFourth(setFormData, formData)}
            />
            <SelectBlock
              title="Проведен тест на содержание паров алкоголя в выдыхаемом воздухе при помощи алкометра. Результат ________ промилей"
              items={alcoholPhysical(setFormData, formData)}
            />
            <SelectBlock
              title="Проведен тест на беременность?"
              items={pregnacyFirst(setFormData, formData)}
            />
            <SelectBlock
              title="Результат теста:"
              items={pregnacySecond(setFormData, formData)}
            />
            <SelectBlock
              title="Проведен экспресс – тест на COVID-19"
              items={covidFirst(setFormData, formData)}
            />
            <SelectBlock
              title="Результат:"
              items={covidSecond(setFormData, formData)}
            />
            <SelectBlock
              title="Доброволец предъявил отрицательные результаты на COVID-19, сделанные ______________ (ДД:ММ:ГГГГ). Копия анализа приложена к истории болезни"
              items={covidOldPhysical(setFormData, formData)}
            />
            <SelectBlock
              title="Доброволец был предупрежден о необходимости не принимать пищу в течение 10 часов перед сдачей анализов крови и мочи"
              items={test10HoursAwarePhysical(setFormData, formData)}
            />
            <SelectBlock
              title="Дата  ______________ (ДД:ММ:ГГГГ)"
              items={labDatePhysical(setFormData, formData)}
            />
            <SelectBlock
              title="Доброволец пришел в центр натощак"
              items={emptyStomachPhysical(setFormData, formData)}
            />
            <SelectBlock
              title="В асептических условиях процедурного кабинета в соответствии с условиями протокола выполнен забор образцов крови"
              items={bloodSamplesPhysical(setFormData, formData)}
            />
            <SelectBlock
              title="Биообразцы крови отправлены в центральную лабораторию"
              items={bloodCentralLabPhysical(setFormData, formData)}
            />
            <SelectBlock
              title="Биообразец анализа мочи отправлен в центральную лабораторию"
              items={urineCentralLabPhysical(setFormData, formData)}
            />
            <SelectBlock
              title="Доброволец получил направления в лабораторию ______ (название лаборатории)"
              items={labRoutePhysical(setFormData, formData)}
            />
            <SelectBlock
              title="Доброволец получил направление на Rg обследования"
              items={rgSurveyRoutePhysical(setFormData, formData)}
            />
            <SelectBlock
              title="Доброволец имеет на руках выполненную рентгенографию или флюорографическое обследование грудной клетки в течении 12 месяцев до визита скринига"
              items={XRayPhysical(setFormData, formData)}
            />
            <SelectBlock
              title="Копия вложена в амбулаторную карту"
              items={XRayCopyPhysical(setFormData, formData)}
            />
            <SelectBlock
              title="Результаты анализов получены ______________________ (ДД:ММ:ГГГГ) (укажите дату получения на бланке, распишитесь на бланке анализа)"
              items={analysisPhysical(setFormData, formData)}
            />
            <InputBlock
              title="Общий анализ крови"
              items={GeneralBlood(setFormData, formData)}
            />
            <InputBlock
              title="Биохимический анализ крови"
              items={BioBloodComplete(setFormData, formData)}
            />
            <InputBlock
              title="Общий анализ мочи с микроскопией осадка"
              items={urinalysisSedimentComplete(setFormData, formData)}
            />
            <InputBlock
              title="Серологический анализ на ВИЧ, поверхностный антиген вируса гепатита B (HBsAg), антитела к вирусу гепатита C (anti-HCV), тест на сифилис"
              items={HIVComplete(setFormData, formData)}
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

export default PhysicalExaminationData;
