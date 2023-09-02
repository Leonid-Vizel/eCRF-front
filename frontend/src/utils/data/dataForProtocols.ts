import LeftSidebarOption from "../../components/leftSidebarOption/LeftSidebarOption";
import {useAppSelector} from "../../store/redux-hook";
import {protocolSelector} from "../../store/protocolSlice/protocolSelector";

export const keyProtocols: string[] = [
    'Screening'
]

export const protocols: string[] = [
    'Скрининг',
    'Период 1',
    'Период 2',
    'Заключительное обследование',
    'Внеплановый визит №1',
    'Внеплановый визит №2',
    'Нежелательные явления',
];

export const sections: { [key: string]: string[] } = {
    'Скрининг': [
        'Начало скрининга',
        'Информированное согласие',
        'Демография',
        'Антропометрия',
        'Критерии включения в исследование',
        'Критерии невключения в исследование',
        'Завершение скрининга',
    ],
    'Период 1': ['Раздел 1', 'Раздел 2', 'Раздел 3'],
    'Период 2': ['Раздел 4', 'Раздел 5'],
    'Заключительное обследование': ['Раздел 6'],
    'Внеплановый визит №1': ['Раздел 7', 'Раздел 8', 'Раздел 9'],
    'Внеплановый визит №2': ['Раздел 10', 'Раздел 11'],
    'Нежелательные явления': [
        'Пункт 1'
    ]
};

// export const screeningItems = [
//     /* Скрининг */
//     {
//         key: 'StartOfScreening',
//         href: '#StartOfScreening',
//         title: LeftSidebarOption('Начало скрининга')
//     },
//     {
//         key: 'InformaionConsent',
//         href: '#InformaionConsent',
//         title: LeftSidebarOption('Информированное согласие')
//     },
//     {
//         key: 'Demography',
//         href: '#Demography',
//         title: LeftSidebarOption('Демография')
//     },
//     {
//         key: 'Anthropometry',
//         href: '#Anthropometry',
//         title: LeftSidebarOption('Антропометрия')
//     },
//     {
//         key: 'InclusionCriteria',
//         href: '#InclusionCriteria',
//         title: LeftSidebarOption('Критерии включения в исследование')
//     },
//     {
//         key: 'ExclusionСriteria',
//         href: '#ExclusionСriteria',
//         title: LeftSidebarOption('Критерии невключения в исследование')
//     },
//     {
//         key: 'CompletionOfScreening',
//         href: '#CompletionOfScreening',
//         title: LeftSidebarOption('Завершение скрининга')
//     },
// ]

export const adverseEventsItems = [
    /* Нежелательные явления */
    // {
    //     key: 'AdverseEvent',
    //     href: '#AdverseEvent',
    //     title: LeftSidebarOption('Пункт 1')
    // },
]