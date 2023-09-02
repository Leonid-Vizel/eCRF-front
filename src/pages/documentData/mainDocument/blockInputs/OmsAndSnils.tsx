import DefaultInput from '../../../../components/document/inputs/defaultInput/DefaultInput';
import MaskedInput from '../../../../components/document/inputs/maskedInput/MaskedInput';
import { NotNumberPattern } from '../../../../utils/consts';
import { FormDataItem } from '../../../../utils/types/documentType';
import { FormDataFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';

export const OmsAndSnils = (
    setFormData,
    formData: FormDataItem
): InputBlockItem[] => [
    {
        inputTitle: 'ОМС серия',
        input: (
            <DefaultInput
                exclusionPattern={NotNumberPattern}
                fieldName={FormDataFields.ChISeries}
                inputValue={formData.CHIseries}
                setFormData={setFormData}
            />
        ),
    },
    {
        inputTitle: 'ОМС №',
        input: (
            <DefaultInput
                exclusionPattern={NotNumberPattern}
                fieldName={FormDataFields.ChINumber}
                inputValue={formData.CHInumber}
                setFormData={setFormData}
            />
        ),
    },
    {
        inputTitle: 'СНИЛС',
        input: (
            <MaskedInput
                mask='999-999-999-99'
                fieldName={FormDataFields.Snils}
                inputValue={formData.SNILS}
                setFormData={setFormData}
            />
        ),
    },
];
