import { IOrganisation } from 'entities/organisation';

export interface ICenter {
  name: string
  id: number
  organisationId: number
  organisation: IOrganisation
}
