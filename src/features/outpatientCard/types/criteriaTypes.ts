import { NestedFields } from 'features/form/types/types';

export interface CriteriaForm {
  cardId: number
  include: NestedFields[]
  exclude: NestedFields[]
  others: NestedFields[]
}
