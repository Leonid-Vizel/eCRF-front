import { ICenter } from 'entities/center';

export interface IUser {
  isAuth: boolean
  firstName?: string
  secondName?: string
  thirdName?: string
  role?: number
  fullName?: string
  id?: number
  login?: string
  centerId?: number
  center?:ICenter
}
