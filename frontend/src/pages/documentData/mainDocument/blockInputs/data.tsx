import { SelectOption } from '../../../../utils/types/shared';

export const desiasesSelectsOptions: SelectOption[] = [
    { name: 'Нет', value: 0 },
    { name: 'Да', value: 1 },
];

export const sexOptions: SelectOption[] = [
    { name: 'Мужской', value: 1 },
    { name: 'Женский', value: 2 },
];

export const localityOptions: SelectOption[] = [
    { name: 'Городская', value: 1 },
    { name: 'Сельская', value: 2 },
];

export const familyOptions: SelectOption[] = [
    { name: 'Состоит в браке', value: 1 },
    { name: 'Не состоит в браке', value: 2 },
    { name: 'Неизвестно', value: 3 },
];

export const educationOptions: SelectOption[] = [
    { name: 'Профессиональное: высшее', value: 1 },
    { name: 'Профессиональное: среднее', value: 2 },
    { name: 'Общее: среднее', value: 3 },
    { name: 'Общее: основное', value: 4 },
    { name: 'Общее: начальное', value: 5 },
    { name: 'Неизвестно', value: 6 },
];

export const workOptions: SelectOption[] = [
    { name: 'Работает', value: 1 },
    {
        name: 'Проходит военную службу и приравненную к ней службу',
        value: 2,
    },
    { name: 'Пенсионер(ка)', value: 3 },
    { name: 'Студент(ка)', value: 4 },
    { name: 'Не работает', value: 5 },
    { name: 'Прочие', value: 6 },
];

export const disabilityTypeOptions: SelectOption[] = [
    { name: 'Первичная', value: 1 },
    { name: 'Вторичная', value: 2 },
];

export const disabilityGroupOptions: SelectOption[] = [
    { name: 'I группа', value: 1 },
    { name: 'II группа', value: 2 },
    { name: 'III группа', value: 3 },
];

export const bloodGroupOptions: SelectOption[] = [
    { name: 'Нет данных', value: 0 },
    { name: 'O(I) - Первая', value: 1 },
    { name: 'A(II) - Вторая', value: 2 },
    { name: 'B(III) - Третья', value: 3 },
    { name: 'AB(IV) - Чевёртая', value: 4 },
];

export const rhFactorOptions: SelectOption[] = [
    { name: 'Нет данных', value: 0 },
    { name: 'Rh- (Отрицательный)', value: 1 },
    { name: 'Rh+ (Положительный)', value: 2 },
];

export const checkupLocationOptions: SelectOption[] = [
    { name: 'На приеме', value: 0 },
    { name: 'На дому', value: 1 },
    { name: 'В фельдшерско-акушерском пункте', value: 2 },
    { name: 'Прочее', value: 3 },
];

export const raceOptions: SelectOption[] = [
    { name: 'Европеоид', value: 0 },
    { name: 'Негроид', value: 1 },
    { name: 'Азиат', value: 2 },
    { name: 'Другая', value: 3 },
];
