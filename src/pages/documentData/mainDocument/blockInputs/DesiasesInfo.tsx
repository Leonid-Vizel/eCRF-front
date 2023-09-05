import SelectInput from '../../../../components/document/inputs/selectInput/SelectInput';
import { FormDataItem } from '../../../../utils/types/documentType';
import { FormDataFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';
import { desiasesSelectsOptions } from './data';

export const desiasesInfo = (
  setFormData,
  formData: FormDataItem,
): InputBlockItem[] => [
  {
    inputTitle: 'Педикулез',
    input: (
      <SelectInput
        fieldName={FormDataFields.Pediculosis}
        options={desiasesSelectsOptions}
        selectValue={formData.Pediculosis}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Чесотка',
    input: (
      <SelectInput
        fieldName={FormDataFields.Scabies}
        options={desiasesSelectsOptions}
        selectValue={formData.Scabies}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'ТБС',
    input: (
      <SelectInput
        fieldName={FormDataFields.Tbs}
        options={desiasesSelectsOptions}
        selectValue={formData.TBS}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Гепатит',
    input: (
      <SelectInput
        fieldName={FormDataFields.Hepatitis}
        options={desiasesSelectsOptions}
        selectValue={formData.Hepatitis}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Вен. Заб-я',
    input: (
      <SelectInput
        fieldName={FormDataFields.VenerealDisease}
        options={desiasesSelectsOptions}
        selectValue={formData.VenerealDisease}
        setFormData={setFormData}
      />
    ),
  },
];
