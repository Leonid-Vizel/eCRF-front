import DefaultInput from '../../../../components/document/inputs/defaultInput/DefaultInput';
import { NumberPattern } from '../../../../utils/consts';
import { FormDataItem } from '../../../../utils/types/documentType';
import { FormDataFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';

export const volunteerData = (
  setFormData,
  formData: FormDataItem,
): InputBlockItem[] => [
  {
    inputTitle: 'Введите фамилию добровольца',
    input: (
      <DefaultInput
        exclusionPattern={NumberPattern}
        setFormData={setFormData}
        fieldName={FormDataFields.SecondName}
        inputValue={formData.SecondName}
      />
    ),
  },
  {
    inputTitle: 'Введите имя добровольца',
    input: (
      <DefaultInput
        exclusionPattern={NumberPattern}
        setFormData={setFormData}
        fieldName={FormDataFields.FirstName}
        inputValue={formData.FirstName}
      />
    ),
  },
  {
    inputTitle: 'Выберите отчество добровольца ',
    input: (
      <DefaultInput
        exclusionPattern={NumberPattern}
        setFormData={setFormData}
        fieldName={FormDataFields.ThirdName}
        inputValue={formData.ThirdName}
      />
    ),
  },
];
