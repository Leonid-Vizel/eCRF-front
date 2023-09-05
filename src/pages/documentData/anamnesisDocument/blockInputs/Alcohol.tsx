import SelectInput from '../../../../components/document/inputs/selectInput/SelectInput';
import { Anamnesis } from '../../../../utils/types/documentType';
import { AnamnesisFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';
import { yesNoOptions } from './data';

export const alcohol = (setFormData, formData: Anamnesis): InputBlockItem[] => [
  {
    inputTitle: 'Употребление алкоголя:',
    input: (
      <SelectInput
        fieldName={AnamnesisFields.Alcohol}
        options={yesNoOptions}
        selectValue={formData.Alcohol}
        setFormData={setFormData}
      />
    ),
  },
];
