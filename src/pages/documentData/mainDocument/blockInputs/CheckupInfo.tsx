import DateInput from '../../../../components/document/inputs/dateInput/DateInput';
import SelectInput from '../../../../components/document/inputs/selectInput/SelectInput';
import { FormDataItem } from '../../../../utils/types/documentType';
import { FormDataFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';
import { checkupLocationOptions } from './data';

export const checkupInfo = (
  setFormData,
  formData: FormDataItem,
): InputBlockItem[] => [
  {
    inputTitle: 'Дата осмотра',
    input: (
      <DateInput
        fieldName={FormDataFields.CheckupDate}
        inputValue={formData.CheckupDate}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Место осмотра',
    input: (
      <SelectInput
        fieldName={FormDataFields.CheckupLocation}
        selectValue={formData.CheckupLocation}
        options={checkupLocationOptions}
        setFormData={setFormData}
      />
    ),
  },
];
