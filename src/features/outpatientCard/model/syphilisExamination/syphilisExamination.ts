import { SyphilisExaminationCard } from 'features/outpatientCard/types/types';
import { FieldType, FormConstructorModel } from '../../../form/types/types';

export const syphilisExaminationForm: FormConstructorModel = {
  rootEntityName: 'outpatientCards',
  entityName: 'outpatientCard',
  formEntityName: 'syphilisExaminationForm',
  cards: [
    {
      id: 'card',
      key: 'patientComplaints',
      title: 'Жалобы больного',
      columnCount: 2,
      fields: [
        {
          id: 'decreasedVision',
          title: 'Cнижение зрения',
          type: FieldType.Checkbox,
          name: 'decreasedVision',
        },
        {
          id: 'decreasedHearing',
          title: 'Cнижение слуха',
          type: FieldType.Checkbox,
          name: 'decreasedHearing',
        },
        {
          id: 'decreasedMemory',
          title: 'Cнижение памяти',
          type: FieldType.Checkbox,
          name: 'decreasedMemory',
        },
        {
          id: 'incoordination',
          title: 'Нарушение координации движения',
          type: FieldType.Checkbox,
          name: 'incoordination',
        },
      ],
    },
    {
      id: 'card',
      key: 'externalInspection',
      title: 'Наружный осмотр В/ч головы: наличие',
      columnCount: 2,
      fields: [
        {
          id: 'hairAllopecia',
          title: 'аллопеций',
          type: FieldType.Checkbox,
          name: 'hairAllopecia',
        },
        {
          id: 'hairPapula',
          title: 'папулы',
          type: FieldType.Checkbox,
          name: 'hairPapula',
        },
        {
          id: 'hairPustula',
          title: 'пустулы',
          type: FieldType.Checkbox,
          name: 'hairPustula',
        },
        {
          id: 'hairCrust',
          title: 'корочки',
          type: FieldType.Checkbox,
          name: 'hairCrust',
        },
      ],
    },
    {
      id: 'card',
      key: 'tongue',
      title: 'Слизистая полости рта, язык',
      columnCount: 2,
      fields: [
        {
          id: 'tongueSpots',
          title: 'Пятна',
          type: FieldType.Checkbox,
          name: 'tongueSpots',
        },
        {
          id: 'tonguePapula',
          title: 'Папулы',
          type: FieldType.Checkbox,
          name: 'tonguePapula',
        },
        {
          id: 'tongueErosion',
          title: 'Эрозии',
          type: FieldType.Checkbox,
          name: 'tongueErosion',
        },
        {
          id: 'tongueUlcers',
          title: 'Язвы',
          type: FieldType.Checkbox,
          name: 'tongueUlcers',
        },
        {
          id: 'tongueAngina',
          title: 'Ангина',
          type: FieldType.Checkbox,
          name: 'tongueAngina',
        },
      ],
    },
    {
      id: 'card',
      key: 'lips',
      title: 'Cостояние губ',
      columnCount: 2,
      fields: [
        {
          id: 'lipsPapula',
          title: 'Папулы',
          type: FieldType.Checkbox,
          name: 'lipsPapula',
        },
        {
          id: 'lipsJammed',
          title: 'Заеды',
          type: FieldType.Checkbox,
          name: 'lipsJammed',
        },
        {
          id: 'lipsErosion',
          title: 'Эрозии',
          type: FieldType.Checkbox,
          name: 'lipsErosion',
        },
        {
          id: 'voiceHoarseness',
          title: 'Осиплость голоса',
          type: FieldType.Checkbox,
          name: 'voiceHoarseness',
        },
      ],
    },
    {
      id: 'card',
      key: 'lymph',
      title: 'Пальпация лимфатических узлов',
      columnCount: 2,
      fields: [
        {
          id: 'сervicalLymph',
          title: 'Шейные',
          type: FieldType.Checkbox,
          name: 'сervicalLymph',
        },
        {
          id: 'submandibularLymph',
          title: 'Подчелюстные',
          type: FieldType.Checkbox,
          name: 'submandibularLymph',
        },
        {
          id: 'axillaryLymph',
          title: 'Подмышечные',
          type: FieldType.Checkbox,
          name: 'axillaryLymph',
        },
        {
          id: 'elbowLymph',
          title: 'Локтевые',
          type: FieldType.Checkbox,
          name: 'elbowLymph',
        },
        {
          id: 'inguinalLymph',
          title: 'Паховые',
          type: FieldType.Checkbox,
          name: 'inguinalLymph',
        },
      ],
    },
    {
      id: 'card',
      key: 'bone',
      title: 'Наличие костных диструкций',
      columnCount: 2,
      fields: [
        {
          id: 'boneSaddleNose',
          title: 'Седловидный нос',
          type: FieldType.Checkbox,
          name: 'boneSaddleNose',
        },
        {
          id: 'boneHighGothicPalate',
          title: 'Высокое готическое нёбо',
          type: FieldType.Checkbox,
          name: 'boneHighGothicPalate',
        },
        {
          id: 'boneHutchinsonTeeth',
          title: 'Зубы Гетчинсона',
          type: FieldType.Checkbox,
          name: 'boneHutchinsonTeeth',
        },
        {
          id: 'boneXiphoidProcess',
          title: 'Отсутствие мечевидного отростка',
          type: FieldType.Checkbox,
          name: 'boneXiphoidProcess',
        },
        {
          id: 'boneSaberTibia',
          title: 'Саблевидные голени',
          type: FieldType.Checkbox,
          name: 'boneSaberTibia',
        },
      ],
    },
    {
      id: 'card',
      key: 'bone',
      title: 'Осмотр гениталий и перианальной области (для врачей акушеров гинекологов, урологов, проктологов)',
      columnCount: 2,
      fields: [
        {
          id: 'genitaliaSpots',
          title: 'Пятна',
          type: FieldType.Checkbox,
          name: 'genitaliaSpots',
        },
        {
          id: 'genitaliaPapula',
          title: 'Папулы',
          type: FieldType.Checkbox,
          name: 'genitaliaPapula',
        },
        {
          id: 'genitaliaErosion',
          title: 'Эрозии',
          type: FieldType.Checkbox,
          name: 'genitaliaErosion',
        },
        {
          id: 'genitaliaUlcers',
          title: 'Язвы',
          type: FieldType.Checkbox,
          name: 'genitaliaUlcers',
        },
      ],
    },
    {
      id: 'card',
      key: 'doctor',
      title: 'Врач',
      fields: [
        {
          id: 'doctor',
          title: 'ФИО полностью',
          type: FieldType.Input,
          name: 'doctor',
        },
      ],
    },
  ],
};

export const initialSyphilisExamination: SyphilisExaminationCard = {
  decreasedVision: false,
  decreasedHearing: false,
  decreasedMemory: false,
  incoordination: false,
  hairAllopecia: false,
  hairPapula: false,
  hairPustula: false,
  hairCrust: false,
  tongueSpots: false,
  tonguePapula: false,
  tongueErosion: false,
  tongueUlcers: false,
  tongueAngina: false,
  lipsPapula: false,
  lipsJammed: false,
  lipsErosion: false,
  voiceHoarseness: false,
  cervicalLymph: false,
  submandibularLymph: false,
  axillaryLymph: false,
  elbowLymph: false,
  inguinalLymph: false,
  boneSaddleNose: false,
  boneHighGothicPalate: false,
  boneHutchinsonTeeth: false,
  boneXiphoidProcess: false,
  boneSaberTibia: false,
  genitaliaSpots: false,
  genitaliaPapula: false,
  genitaliaErosion: false,
  genitaliaUlcers: false,
  doctor: '',
};
