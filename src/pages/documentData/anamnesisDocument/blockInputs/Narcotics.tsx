import SelectInput from '../../../../components/document/inputs/selectInput/SelectInput';
import { Anamnesis } from '../../../../utils/types/documentType';
import { AnamnesisFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';
import { yesNoOptions } from './data';

export const narcotics = (
  setFormData,
  formData: Anamnesis,
): InputBlockItem[] => [
  {
    inputTitle: 'Употребление наркотиков:',
    input: (
      <SelectInput
        fieldName={AnamnesisFields.Narcotics}
        options={yesNoOptions}
        selectValue={formData.Narcotics}
        setFormData={setFormData}
      />
    ),
  },
];
