import { SelectOption } from '../../../../utils/types/shared';

export const yesNoOptions: SelectOption[] = [
    { name: 'Нет', value: 0 },
    {
        name: 'Да',
        value: 1,
    },
];

export const evaluatedOptions: SelectOption[] = [
    { name: 'включения', value: 0 },
    {
        name: 'исключения',
        value: 1,
    },
];

export const acceptedOptions: SelectOption[] = [
    { name: 'не соответствует', value: 0 },
    {
        name: 'соответствует',
        value: 1,
    },
];

export const allowedOptions: SelectOption[] = [
    { name: 'не выявлено', value: 0 },
    {
        name: 'выявлено',
        value: 1,
    },
];
