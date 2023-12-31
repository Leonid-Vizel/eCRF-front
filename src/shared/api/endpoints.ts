import { OutpatientMainInfoForm } from 'features/outpatientCard';
import { CriteriaForm } from 'features/outpatientCard/types/criteriaTypes';
import { PhysicalExaminationForm } from 'features/outpatientCard/types/physicalExaminationTypes';
import { DayForm } from 'features/outpatientCard/types/dayTypes';
import { StationaryCardMainInfoForm } from 'features/stationaryCard/types/stationaryCardMainInfoTypes';
import { StationaryCardSecondDayForm } from 'features/stationaryCard/types/stationaryCardSecondDayTypes';
import { externalSystemCall } from './base';
import {
  GetUserRequest,
  LoginRequest,
  GetCardListRequest,
  GetDictionaryRequest,
  GetScreeningRequest,
  ModifySyphilisExaminationRequest,
  GetOutpatientCardRequest,
  GetSyphilisExaminationRequest,
  GetLifeAnamnesisRequest,
  ModifyLifeAnamnesisRequest,
  ModifyScreeningVisitRequest,
  GetPhysicalExaminationRequest,
  GetCriteriaRequest,
  GetDayRequest,
  GetStationaryCardRequest,
  GetStationaryCardSecondDayRequest,
  GetStationaryCardFirstDayRequest,
} from './types';

export const loginRequest = (data: LoginRequest) => externalSystemCall<LoginRequest>({
  endpoint: 'user/login',
  method: 'POST',
  data,
});

export const getUser = ({ id }: GetUserRequest) => externalSystemCall<GetUserRequest>({
  endpoint: `user/index/${id}`,
  method: 'GET',
});

export const getCardList = ({ id }: GetCardListRequest) => externalSystemCall<GetCardListRequest>({
  endpoint: `Card/List/${id}`,
  method: 'GET',
});
export const getStationaryCardList = ({ id }: GetCardListRequest) => externalSystemCall<GetCardListRequest>({
  endpoint: `StationaryCard/List/${id}`,
  method: 'GET',
});

export const createOutpatientCard = (mainIfoData: OutpatientMainInfoForm) => externalSystemCall<OutpatientMainInfoForm>({
  endpoint: 'Card/Create',
  method: 'POST',
  data: mainIfoData,
});

export const getDictionaryRequest = ({
  dictionaryName,
}: GetDictionaryRequest) => externalSystemCall<GetDictionaryRequest>({
  endpoint: `Enum/${dictionaryName}`,
  method: 'GET',
});

export const getScreeningRequest = ({ cardId }:GetScreeningRequest) => externalSystemCall<GetScreeningRequest>({
  endpoint: `Screening/Modify/${cardId}`,
  method: 'GET',
});

export const modifySyphilisExaminationRequest = (
  data:ModifySyphilisExaminationRequest,
) => externalSystemCall<ModifySyphilisExaminationRequest>({
  endpoint: 'Syphilis/Modify',
  method: 'POST',
  data,
});

export const getOutpatientCardRequest = ({ id }:GetOutpatientCardRequest) => externalSystemCall<GetOutpatientCardRequest>({
  endpoint: `Card/Edit/${id}`,
  method: 'GET',
});

export const getSyphilisExaminationRequest = (
  { id }:GetSyphilisExaminationRequest,
) => externalSystemCall<GetSyphilisExaminationRequest>({
  endpoint: `Syphilis/Modify/${id}`,
  method: 'GET',
});

export const getLifeAnamnesisRequest = (
  { cardId }: GetLifeAnamnesisRequest,
) => externalSystemCall<GetLifeAnamnesisRequest>({
  endpoint: `Anamnesis/Modify/${cardId}`,
  method: 'GET',
});

export const modifyLifeAnamnesisRequest = (
  data: ModifyLifeAnamnesisRequest,
) => externalSystemCall<ModifyLifeAnamnesisRequest>({
  endpoint: 'Anamnesis/Modify',
  method: 'POST',
  data,
});

export const modifyScreeningVisitRequest = (
  data: ModifyScreeningVisitRequest,
) => externalSystemCall<ModifyScreeningVisitRequest>({
  endpoint: 'Screening/Modify',
  method: 'POST',
  data,
});

export const editOutpatientCardRequest = (data:OutpatientMainInfoForm) => externalSystemCall<OutpatientMainInfoForm>({
  endpoint: 'Card/Edit',
  method: 'POST',
  data,
});

export const getPhysicalExaminationRequest = (
  { cardId }:GetPhysicalExaminationRequest,
) => externalSystemCall<GetPhysicalExaminationRequest>({
  endpoint: `PhysicalExam/Modify/${cardId}`,
  method: 'GET',
});

export const modifyPhysicalExaminationRequest = (
  data: PhysicalExaminationForm,
) => externalSystemCall<PhysicalExaminationForm>({
  endpoint: 'PhysicalExam/Modify',
  method: 'POST',
  data,
});

export const getCriteriaRequest = (
  { cardId }: GetCriteriaRequest,
) => externalSystemCall<GetCriteriaRequest>({
  endpoint: `Criteria/Modify/${cardId}`,
  method: 'GET',
});

export const modifyCriteriaRequest = (
  data:CriteriaForm,
) => externalSystemCall<CriteriaForm>({
  endpoint: 'Criteria/Modify',
  method: 'POST',
  data,
});

export const getDayRequest = (
  { cardId, day }: GetDayRequest,
) => externalSystemCall<GetDayRequest>({
  endpoint: `Day/Modify/${cardId}/${day}`,
  method: 'GET',
});

export const modifyDayRequest = (
  data:DayForm,
) => externalSystemCall<DayForm>({
  endpoint: 'Day/Modify',
  method: 'POST',
  data,
});

export const getStationaryCardRequest = (
  { cardId }: GetStationaryCardRequest,
) => externalSystemCall<GetStationaryCardRequest>({
  endpoint: `StationaryCard/Modify/${cardId}`,
  method: 'GET',
});

export const modifyStationaryCardRequest = (
  data: StationaryCardMainInfoForm,
) => externalSystemCall<StationaryCardMainInfoForm>({
  endpoint: 'StationaryCard/Modify',
  method: 'POST',
  data,
});

export const getStationaryCardSecondDayRequest = (
  { cardId }: GetStationaryCardSecondDayRequest,
) => externalSystemCall<GetStationaryCardSecondDayRequest>({
  endpoint: `StationaryCard/Second/Modify/${cardId}`,
  method: 'GET',
});

export const modifyStationaryCardSecondDayRequest = (
  data: StationaryCardSecondDayForm,
) => externalSystemCall<StationaryCardSecondDayForm>({
  endpoint: 'StationaryCard/Second/Modify',
  method: 'POST',
  data,
});

export const getStationaryCardFirstDayRequest = (
  { cardId }: GetStationaryCardFirstDayRequest,
) => externalSystemCall<GetStationaryCardFirstDayRequest>({
  endpoint: `StationaryCard/First/Modify/${cardId}`,
  method: 'GET',
});

export const modifyStationaryCardFirstDayRequest = (
  data: StationaryCardSecondDayForm,
) => externalSystemCall<StationaryCardSecondDayForm>({
  endpoint: 'StationaryCard/First/Modify',
  method: 'POST',
  data,
});
