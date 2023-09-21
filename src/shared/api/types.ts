import { LifeAnamnesisForm } from 'features/outpatientCard/types/lifeAnamnesisTypes';
import { ScreeningVisitForm } from 'features/outpatientCard/types/screeningVisitTypes';
import { SyphilisExaminationForm } from 'features/outpatientCard/types/syphilisExaminationTypes';

export enum Status {
  Init = 'init',
  Loading = 'loading',
  Error = 'error',
  Success = 'success',
}

export interface LoginRequest {
  login:string,
  password: string
}

export interface GetUserRequest {
  id: string
}

export interface GetCardListRequest {
  id: string
}

export interface CreateOutpatientCardRequest {
  id: string
}

export interface GetDictionaryRequest {
  dictionaryName: string
}

export interface GetScreeningRequest {
  cardId: number
}

export interface ModifySyphilisExaminationRequest {
  data:SyphilisExaminationForm
}

export interface GetOutpatientCardRequest {
  id:string
}
export interface GetSyphilisExaminationRequest {
  id:number
}
export interface GetLifeAnamnesisRequest {
  cardId:number
}

export interface ModifyLifeAnamnesisRequest {
  data:LifeAnamnesisForm
}

export interface ModifyScreeningVisitRequest {
  data: ScreeningVisitForm
}
