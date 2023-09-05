import SelectInput from '../../../../components/document/inputs/selectInput/SelectInput';
import { Anamnesis } from '../../../../utils/types/documentType';
import { AnamnesisFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';
import { yesNoOptions } from './data';

export const pastDays = (
  setFormData,
  formData: Anamnesis,
): InputBlockItem[] => [
  {
    inputTitle: '',
    input: (
      <SelectInput
        fieldName={AnamnesisFields.Past90Days}
        options={yesNoOptions}
        selectValue={formData.Past90Days}
        setFormData={setFormData}
      />
    ),
  },
];
