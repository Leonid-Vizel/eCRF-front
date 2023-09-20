import { Hidden } from '../types/types';

export const hideField = <T>(card: string, hiddenField: string, currentValue?: T): Hidden => ({
  shouldUpdate(prevValues, currentValues) {
    return prevValues[0]?.[hiddenField] !== currentValues[0]?.[hiddenField];
  },
  condition(values) {
    return values && values[card] && values[card][0][hiddenField] === currentValue;
  },
});
