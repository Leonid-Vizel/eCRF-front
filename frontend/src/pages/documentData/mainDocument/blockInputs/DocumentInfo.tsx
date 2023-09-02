import DefaultInput from '../../../../components/document/inputs/defaultInput/DefaultInput';
import { NumberPattern, NotNumberPattern } from '../../../../utils/consts';
import { FormDataItem } from '../../../../utils/types/documentType';
import { FormDataFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';

export const documentInfo = (
    setFormData,
    formData: FormDataItem
): InputBlockItem[] => [
    {
        inputTitle: 'Тип документа',
        input: (
            <DefaultInput
                exclusionPattern={NumberPattern}
                fieldName={FormDataFields.DocumentName}
                inputValue={formData.DocumentName}
                setFormData={setFormData}
            />
        ),
    },
    {
        inputTitle: 'Серия',
        input: (
            <DefaultInput
                exclusionPattern={NotNumberPattern}
                fieldName={FormDataFields.DocumentSeries}
                inputValue={formData.DocumentSeries}
                setFormData={setFormData}
            />
        ),
    },
    {
        inputTitle: 'Номер',
        input: (
            <DefaultInput
                exclusionPattern={NotNumberPattern}
                fieldName={FormDataFields.DocumentNumber}
                inputValue={formData.DocumentNumber}
                setFormData={setFormData}
            />
        ),
    },
];
