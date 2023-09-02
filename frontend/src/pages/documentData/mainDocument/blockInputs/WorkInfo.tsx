import DefaultInput from '../../../../components/document/inputs/defaultInput/DefaultInput';
import { NumberPattern } from '../../../../utils/consts';
import { FormDataItem } from '../../../../utils/types/documentType';
import { FormDataFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';

export const workInfo = (
    setFormData,
    formData: FormDataItem
): InputBlockItem[] => [
    {
        inputTitle: 'Место работы',
        input: (
            <DefaultInput
                fieldName={FormDataFields.WorkPlace}
                inputValue={formData.WorkPlace}
                exclusionPattern={NumberPattern}
                setFormData={setFormData}
            />
        ),
    },
    {
        inputTitle: 'Должность',
        input: (
            <DefaultInput
                fieldName={FormDataFields.WorkPosition}
                inputValue={formData.WorkPosition}
                exclusionPattern={NumberPattern}
                setFormData={setFormData}
            />
        ),
    },
];
