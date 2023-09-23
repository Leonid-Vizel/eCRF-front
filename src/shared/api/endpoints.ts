import { OutpatientMainInfoForm } from 'features/outpatientCard';
import { CriteriaForm } from 'features/outpatientCard/types/criteriaTypes';
import { PhysicalExaminationForm } from 'features/outpatientCard/types/physicalExaminationTypes';
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
