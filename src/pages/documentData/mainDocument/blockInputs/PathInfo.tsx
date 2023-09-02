import Textarea from '../../../../components/document/inputs/textarea/Textarea';
import { FormDataItem } from '../../../../utils/types/documentType';
import { FormDataFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';

export const pathInfo = (
  setFormData,
  formData: FormDataItem,
): InputBlockItem[] => [
  {
    inputTitle: 'Напишите маршрут пациента',
    input: (
      <Textarea
        width="600px"
        fieldName={FormDataFields.PatientPath}
        setFormData={setFormData}
        inputValue={formData.PatientPath}
      />
    ),
  },
];
