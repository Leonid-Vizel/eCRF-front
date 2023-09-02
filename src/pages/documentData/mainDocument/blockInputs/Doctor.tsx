import DefaultInput from '../../../../components/document/inputs/defaultInput/DefaultInput';
import { NumberPattern } from '../../../../utils/consts';
import { FormDataItem } from '../../../../utils/types/documentType';
import { FormDataFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';

export const doctor = (
  setFormData,
  formData: FormDataItem,
): InputBlockItem[] => [
  {
    inputTitle: 'Введите (ФИО полностью)',
    input: (
      <DefaultInput
        exclusionPattern={NumberPattern}
        setFormData={setFormData}
        fieldName={FormDataFields.Doctor}
        inputValue={formData.Doctor}
      />
    ),
  },
];
