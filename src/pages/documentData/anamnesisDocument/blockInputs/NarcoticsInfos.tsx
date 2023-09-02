import DateInput from '../../../../components/document/inputs/dateInput/DateInput';
import DefaultInput from '../../../../components/document/inputs/defaultInput/DefaultInput';
import { Anamnesis } from '../../../../utils/types/documentType';
import { AnamnesisFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';

export const narcoticsInfos = (
  setFormData,
  formData: Anamnesis,
): InputBlockItem[] => [
  {
    inputTitle: 'Употреблял ранее (дата последнего употребления)',
    input: (
      <DateInput
        fieldName={AnamnesisFields.NarcoticsLastDate}
        inputValue={formData.NarcoticsLastDate}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Употребляет на данный момент',
    input: (
      <DefaultInput
        fieldName={AnamnesisFields.NarcoticsCurrent}
        inputValue={formData.NarcoticsCurrent}
        setFormData={setFormData}
      />
    ),
  },
];
