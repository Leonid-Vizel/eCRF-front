import DefaultInput from '../../../../components/document/inputs/defaultInput/DefaultInput';
import SelectInput from '../../../../components/document/inputs/selectInput/SelectInput';
import { FormDataItem } from '../../../../utils/types/documentType';
import { FormDataFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';
import { bloodGroupOptions, rhFactorOptions } from './data';

export const bloodGroup = (
  setFormData,
  formData: FormDataItem,
): InputBlockItem[] => [
  {
    inputTitle: 'Группа крови',
    input: (
      <SelectInput
        fieldName={FormDataFields.BloodGroup}
        selectValue={formData.BloodGroup}
        options={bloodGroupOptions}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Rh-фактор',
    input: (
      <SelectInput
        fieldName={FormDataFields.RhFactor}
        selectValue={formData.RhFactor}
        options={rhFactorOptions}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Аллергические реакции',
    input: (
      <DefaultInput
        fieldName={FormDataFields.AllergicReactions}
        inputValue={formData.AllergicReactions}
        setFormData={setFormData}
      />
    ),
  },
];
