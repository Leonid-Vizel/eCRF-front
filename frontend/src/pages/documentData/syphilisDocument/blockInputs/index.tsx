import SelectInput from "../../../../components/document/inputs/selectInput/SelectInput";
import { CardSyphilisData } from "../../../../utils/types/enums/documentEnums";
import { CardSyphilis } from "../../../../utils/types/documentType";

export const patientComplaints = (setFormData, formData: CardSyphilis) => [
  {
    inputTitle: "Снижение зрения",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.DecreasedVision}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.DecreasedVision}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Снижение слуха",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.DecreasedHearing}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.DecreasedHearing}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Снижение памяти",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.DecreasedMemory}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.DecreasedMemory}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Нарушение координации",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.Incoordination}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.Incoordination}
        setFormData={setFormData}
      />
    ),
  },
];

export const externalInspection = (setFormData, formData: CardSyphilis) => [
  {
    inputTitle: "В/ч головы: наличие аллопеций",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.HairAllopecia}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.HairAllopecia}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "В/ч головы: наличие папулы",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.HairPapula}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.HairPapula}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "В/ч головы: наличие пустулы",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.HairPustula}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.HairPustula}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "В/ч головы: наличие корочки",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.HairCrust}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.HairCrust}
        setFormData={setFormData}
      />
    ),
  },
];

export const oralMucosaTongue = (setFormData, formData: CardSyphilis) => [
  {
    inputTitle: "Пятна",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.TongueSpots}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.TongueSpots}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Папулы",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.TonguePapula}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.TonguePapula}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Эрозии",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.TongueErosion}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.TongueErosion}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Язвы",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.TongueUlcers}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.TongueUlcers}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Ангина",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.TongueAngina}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.TongueAngina}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Увеличение одной из миндалин",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.TongueTonsils}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.TongueTonsils}
        setFormData={setFormData}
      />
    ),
  },
];

export const lipCondition = (setFormData, formData: CardSyphilis) => [
  {
    inputTitle: "Папулы",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.LipsPapula}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.LipsPapula}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Заеды",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.LipsJammed}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.LipsJammed}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Эрозии",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.LipsErosion}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.LipsErosion}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Осиплость голоса",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.VoiceHoarseness}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.VoiceHoarseness}
        setFormData={setFormData}
      />
    ),
  },
];

export const palpationOfLymphNodes = (setFormData, formData: CardSyphilis) => [
  {
    inputTitle: "Шейные",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.CervicalLymph}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.CervicalLymph}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Подчелюстные",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.SubmandibularLymph}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.SubmandibularLymph}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Подмышечные",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.AxillaryLymph}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.AxillaryLymph}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Локтевые",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.ElbowLymph}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.ElbowLymph}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Паховые",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.InguinalLymph}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.InguinalLymph}
        setFormData={setFormData}
      />
    ),
  },
];

export const presenceOfBoneDestruction = (
  setFormData,
  formData: CardSyphilis,
) => [
  {
    inputTitle: "Седловидный нос",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.BoneSaddleNose}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.BoneSaddleNose}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Высокое готическое нёбо",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.BoneHighGothicPalate}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.BoneHighGothicPalate}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Зубы Гетчинсона",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.BoneHutchinsonTeeth}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.BoneHutchinsonTeeth}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Отсутствие мечевидного отростка",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.BoneXiphoidProcess}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.BoneXiphoidProcess}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Саблевидные голени",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.BoneSaberTibia}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.BoneSaberTibia}
        setFormData={setFormData}
      />
    ),
  },
];

export const examinationOfGenitalsPerianalArea = (
  setFormData,
  formData: CardSyphilis,
) => [
  {
    inputTitle: "Пятна",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.GenitaliaSpots}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.GenitaliaSpots}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Папулы",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.GenitaliaPapula}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.GenitaliaPapula}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Эрозии",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.GenitaliaErosion}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.GenitaliaErosion}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Язвы",
    input: (
      <SelectInput
        fieldName={CardSyphilisData.GenitaliaUlcers}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData.GenitaliaUlcers}
        setFormData={setFormData}
      />
    ),
  },
];
