import SelectInput from '../../../../components/document/inputs/selectInput/SelectInput';
import { Anamnesis } from '../../../../utils/types/documentType';
import { AnamnesisFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';
import { allergyTypeOptions } from './data';

export const allergyType = (
  setFormData,
  formData: Anamnesis,
): InputBlockItem[] => [
  {
    inputTitle: 'Какие аллергические проявления отмечались',
    input: (
      <SelectInput
        fieldName={AnamnesisFields.AllergyType}
        options={allergyTypeOptions}
        selectValue={formData.AllergyType}
        setFormData={setFormData}
      />
    ),
  },
];
