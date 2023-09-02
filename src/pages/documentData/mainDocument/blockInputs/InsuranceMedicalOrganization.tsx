import { FormDataItem } from '../../../../utils/types/documentType';
import { InputBlockItem } from '../../../../utils/types/shared';
import InsuranceSelect from './InsuranceSelect';

export const insuranceMedicalOrganization = (
  setFormData,
  formData: FormDataItem,
): InputBlockItem[] => [
  {
    inputTitle: 'Наименование',
    input: (
      <InsuranceSelect formData={formData} setFormData={setFormData} />
    ),
  },
];
