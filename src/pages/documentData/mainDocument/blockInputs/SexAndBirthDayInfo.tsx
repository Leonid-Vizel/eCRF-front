import DateInput from '../../../../components/document/inputs/dateInput/DateInput';
import SelectInput from '../../../../components/document/inputs/selectInput/SelectInput';
import { FormDataItem } from '../../../../utils/types/documentType';
import { FormDataFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';
import { sexOptions } from './data';

export const sexAndBirthDayInfo = (
    setFormData,
    formData: FormDataItem
): InputBlockItem[] => [
    {
        inputTitle: 'Выберите Дату',
        input: (
            <DateInput
                fieldName={FormDataFields.BirthDate}
                inputValue={formData.BirthDate}
                setFormData={setFormData}
            />
        ),
    },
    {
        inputTitle: 'Пол',
        input: (
            <SelectInput
                fieldName={FormDataFields.Sex}
                options={sexOptions}
                selectValue={formData.Sex}
                setFormData={setFormData}
            />
        ),
    },
];
