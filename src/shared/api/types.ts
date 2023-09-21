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
  cardId: string
}
