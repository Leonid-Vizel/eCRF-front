import { Rule } from 'antd/es/form';

export function getEmptyValidationText(rules: Rule[]) {
  return rules?.map((rule) => ({ ...rule, message: '' }));
}
