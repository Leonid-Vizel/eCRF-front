import DateInput from '../../../../components/document/inputs/dateInput/DateInput';
import { FormDataItem } from '../../../../utils/types/documentType';
import { FormDataFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';

export const createDate = (
  setFormData,
  formData: FormDataItem,
): InputBlockItem[] => [
  {
    inputTitle: 'Выберите Дату',
    input: (
      <DateInput
        fieldName={FormDataFields.CreateDate}
        setFormData={setFormData}
        inputValue={formData.CreateDate}
      />
    ),
  },
];
