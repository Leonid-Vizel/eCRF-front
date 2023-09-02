import Textarea from '../../../../components/document/inputs/textarea/Textarea';
import { FormDataItem } from '../../../../utils/types/documentType';
import { FormDataFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';

export const diagnosisInfo = (
    setFormData,
    formData: FormDataItem
): InputBlockItem[] => [
    {
        inputTitle: 'Диагноз',
        input: (
            <Textarea
                width='600px'
                fieldName={FormDataFields.PatientDiagnosis}
                setFormData={setFormData}
                inputValue={formData.PatientDiagnosis}
            />
        ),
    },
];
