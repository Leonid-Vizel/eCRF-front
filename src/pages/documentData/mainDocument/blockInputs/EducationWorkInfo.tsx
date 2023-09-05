import SelectInput from '../../../../components/document/inputs/selectInput/SelectInput';
import { FormDataItem } from '../../../../utils/types/documentType';
import { FormDataFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';
import { familyOptions, educationOptions, workOptions } from './data';

export const familyEducationWorkInfo = (
  setFormData,
  formData: FormDataItem,
): InputBlockItem[] => [
  {
    inputTitle: 'Семейное положение',
    input: (
      <SelectInput
        fieldName={FormDataFields.Family}
        options={familyOptions}
        selectValue={formData.Family}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Образование',
    input: (
      <SelectInput
        fieldName={FormDataFields.Education}
        options={educationOptions}
        selectValue={formData.Education}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Занятость',
    input: (
      <SelectInput
        fieldName={FormDataFields.Work}
        options={workOptions}
        selectValue={formData.Work}
        setFormData={setFormData}
      />
    ),
  },
];
