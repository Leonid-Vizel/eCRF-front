import DefaultInput from '../../../../components/document/inputs/defaultInput/DefaultInput';
import SelectInput from '../../../../components/document/inputs/selectInput/SelectInput';
import { NumberPattern, NotNumberPattern } from '../../../../utils/consts';
import { FormDataItem } from '../../../../utils/types/documentType';
import { FormDataFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';
import { localityOptions } from './data';

export const residencePlaceInfo = (
  setFormData,
  formData: FormDataItem,
): InputBlockItem[] => [
  {
    inputTitle: 'Улица',
    input: (
      <DefaultInput
        fieldName={FormDataFields.Street}
        inputValue={formData.Street}
        exclusionPattern={NumberPattern}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Дом',
    input: (
      <DefaultInput
        fieldName={FormDataFields.House}
        inputValue={formData.House}
        exclusionPattern={NotNumberPattern}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Квартира',
    input: (
      <DefaultInput
        fieldName={FormDataFields.Flat}
        inputValue={formData.Flat}
        exclusionPattern={NotNumberPattern}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Местность',
    input: (
      <SelectInput
        fieldName={FormDataFields.Locality}
        options={localityOptions}
        selectValue={formData.Locality}
        setFormData={setFormData}
      />
    ),
  },
];
