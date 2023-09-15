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
  id:string,
  page?:number
}

export interface GetDictionaryRequest {
  dictionaryName: string
}
