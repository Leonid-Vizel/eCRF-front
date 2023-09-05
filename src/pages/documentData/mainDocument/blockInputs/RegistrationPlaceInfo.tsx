import DefaultInput from '../../../../components/document/inputs/defaultInput/DefaultInput';
import { NumberPattern } from '../../../../utils/consts';
import { FormDataItem } from '../../../../utils/types/documentType';
import { FormDataFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';

export const registrationPlaceInfo = (
  setFormData,
  formData: FormDataItem,
): InputBlockItem[] => [
  {
    inputTitle: 'Субъект Российской Федерации',
    input: (
      <DefaultInput
        fieldName={FormDataFields.Subject}
        inputValue={formData.Subject}
        setFormData={setFormData}
        exclusionPattern={NumberPattern}
      />
    ),
  },
  {
    inputTitle: 'Район',
    input: (
      <DefaultInput
        fieldName={FormDataFields.District}
        inputValue={formData.District}
        setFormData={setFormData}
        exclusionPattern={NumberPattern}
      />
    ),
  },
  {
    inputTitle: 'Город',
    input: (
      <DefaultInput
        fieldName={FormDataFields.City}
        inputValue={formData.City}
        setFormData={setFormData}
        exclusionPattern={NumberPattern}
      />
    ),
  },
  {
    inputTitle: 'Населенный пункт',
    input: (
      <DefaultInput
        fieldName={FormDataFields.Community}
        inputValue={formData.Community}
        setFormData={setFormData}
        exclusionPattern={NumberPattern}
      />
    ),
  },
];
