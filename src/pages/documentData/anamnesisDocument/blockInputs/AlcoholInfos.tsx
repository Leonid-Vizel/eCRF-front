import DateInput from '../../../../components/document/inputs/dateInput/DateInput';
import DefaultInput from '../../../../components/document/inputs/defaultInput/DefaultInput';
import { NotNumberPattern } from '../../../../utils/consts';
import { Anamnesis } from '../../../../utils/types/documentType';
import { AnamnesisFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';

export const alcoholInfos = (
    setFormData,
    formData: Anamnesis
): InputBlockItem[] => [
    {
        inputTitle: 'Возрастной диапазон употребления',
        input: (
            <DefaultInput
                fieldName={AnamnesisFields.AlcoholAgeRange}
                inputValue={formData.AlcoholAgeRange}
                setFormData={setFormData}
            />
        ),
    },
    {
        inputTitle: 'Употреблял ранее (дата последнего употребления)',
        input: (
            <DateInput
                fieldName={AnamnesisFields.AlcoholLastDate}
                inputValue={formData.AlcoholLastDate}
                setFormData={setFormData}
            />
        ),
    },
    {
        inputTitle: 'Употребляет на данный момент (единиц за раз)',
        input: (
            <DefaultInput
                exclusionPattern={NotNumberPattern}
                fieldName={AnamnesisFields.AlcoholOnceAmount}
                inputValue={formData.AlcoholOnceAmount}
                setFormData={setFormData}
            />
        ),
    },
    {
        inputTitle: 'Употребляет на данный момент (единиц в неделю)',
        input: (
            <DefaultInput
                exclusionPattern={NotNumberPattern}
                fieldName={AnamnesisFields.AlcoholWeekAmount}
                inputValue={formData.AlcoholWeekAmount}
                setFormData={setFormData}
            />
        ),
    },
];
