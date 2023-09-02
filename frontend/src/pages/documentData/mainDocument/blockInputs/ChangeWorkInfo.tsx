import DefaultInput from '../../../../components/document/inputs/defaultInput/DefaultInput';
import { NumberPattern } from '../../../../utils/consts';
import { FormDataItem } from '../../../../utils/types/documentType';
import { FormDataFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';

export const changeWorkInfo = (
    setFormData,
    formData: FormDataItem
): InputBlockItem[] => [
    {
        inputTitle: 'Изменение места работы',
        input: (
            <DefaultInput
                fieldName={FormDataFields.WorkPlaceChange}
                inputValue={formData.WorkPlaceChange}
                exclusionPattern={NumberPattern}
                setFormData={setFormData}
            />
        ),
    },
    {
        inputTitle: 'Изменение места регистрации',
        input: (
            <DefaultInput
                fieldName={FormDataFields.RegistrationPlaceChange}
                inputValue={formData.RegistrationPlaceChange}
                exclusionPattern={NumberPattern}
                setFormData={setFormData}
            />
        ),
    },
];
