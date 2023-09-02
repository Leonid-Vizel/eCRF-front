import DateInput from '../../../../components/document/inputs/dateInput/DateInput';
import SelectInput from '../../../../components/document/inputs/selectInput/SelectInput';
import { FormDataItem } from '../../../../utils/types/documentType';
import { FormDataFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';
import { disabilityTypeOptions, disabilityGroupOptions } from './data';

export const disabilityInfo = (
    setFormData,
    formData: FormDataItem
): InputBlockItem[] => [
    {
        inputTitle: 'Первичная/вторичная',
        input: (
            <SelectInput
                fieldName={FormDataFields.DisabilityType}
                options={disabilityTypeOptions}
                selectValue={formData.DisabilityType}
                setFormData={setFormData}
            />
        ),
    },
    {
        inputTitle: 'Группа',
        input: (
            <SelectInput
                fieldName={FormDataFields.DisabilityGroup}
                options={disabilityGroupOptions}
                selectValue={formData.DisabilityGroup}
                setFormData={setFormData}
            />
        ),
    },
    {
        inputTitle: 'Дата',
        input: (
            <DateInput
                fieldName={FormDataFields.DisabilityDate}
                inputValue={formData.DisabilityDate}
                setFormData={setFormData}
            />
        ),
    },
];
