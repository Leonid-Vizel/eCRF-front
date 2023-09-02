import { CardScreening } from "../../../../utils/types/documentType";
import DateInput from "../../../../components/document/inputs/dateInput/DateInput";
import { CardScreeningData } from "../../../../utils/types/enums/documentEnums";
import SelectInput from "../../../../components/document/inputs/selectInput/SelectInput";
import DefaultInput from "../../../../components/document/inputs/defaultInput/DefaultInput";
import MaskedInput from "../../../../components/document/inputs/maskedInput/MaskedInput";
import InsuranceSelect from "../../mainDocument/blockInputs/InsuranceSelect";
import InsuranceSelectScreening from "./InsuranceSelectScreening";

export const screeningData = (
  setFormData,
  formData,
  timeInput,
  setTimeInput,
) => [
  {
    inputTitle: "Дата",
    input: (
      <DateInput
        fieldName={CardScreeningData.DateTime}
        inputValue={formData[CardScreeningData.DateTime]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Время",
    input: (
      <DefaultInput
        fieldName={CardScreeningData.FirstTime}
        setFormData={setFormData}
        inputValue={formData[CardScreeningData.FirstTime]}
        type={"time"}
      />
    ),
  },
];

export const agreedScreeningSelect = (setFormData, formData: CardScreening) => [
  {
    input: (
      <SelectInput
        fieldName={CardScreeningData.Agreed}
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
        selectValue={formData[CardScreeningData.Agreed]}
        setFormData={setFormData}
      />
    ),
  },
];

export const formScreeningSelect = (
  setFormData,
  formData: CardScreening,
  timeForm,
  setTimeForm,
) => [
  {
    inputTitle: "Время",
    input: (
      <DefaultInput
        fieldName={CardScreeningData.FormTime}
        setFormData={setFormData}
        inputValue={formData[CardScreeningData.FormTime]}
        type={"time"}
      />
    ),
  },
  {
    input: (
      <SelectInput
        fieldName={CardScreeningData.Form}
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
        selectValue={formData[CardScreeningData.Form]}
        setFormData={setFormData}
      />
    ),
  },
];

export const formEnoughTimeScreeningSelect = (
  setFormData,
  formData: CardScreening,
) => [
  {
    input: (
      <SelectInput
        fieldName={CardScreeningData.FormEnoughTime}
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
        selectValue={formData[CardScreeningData.FormEnoughTime]}
        setFormData={setFormData}
      />
    ),
  },
];

export const acquaintanceScreeningSelect = (
  setFormData,
  formData: CardScreening,
) => [
  {
    input: (
      <SelectInput
        fieldName={CardScreeningData.Acquaintance}
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
        selectValue={formData[CardScreeningData.Acquaintance]}
        setFormData={setFormData}
      />
    ),
  },
];

export const understandingScreeningSelect = (
  setFormData,
  formData: CardScreening,
) => [
  {
    input: (
      <SelectInput
        fieldName={CardScreeningData.Understanding}
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
        selectValue={formData[CardScreeningData.Understanding]}
        setFormData={setFormData}
      />
    ),
  },
];

export const requirementsScreeningSelect = (
  setFormData,
  formData: CardScreening,
) => [
  {
    input: (
      <SelectInput
        fieldName={CardScreeningData.Requirements}
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
        selectValue={formData[CardScreeningData.Requirements]}
        setFormData={setFormData}
      />
    ),
  },
];

export const questionsScreeningSelect = (
  setFormData,
  formData: CardScreening,
) => [
  {
    input: (
      <SelectInput
        fieldName={CardScreeningData.Questions}
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
        selectValue={formData[CardScreeningData.Questions]}
        setFormData={setFormData}
      />
    ),
  },
];

export const fullInfoScreeningSelect = (
  setFormData,
  formData: CardScreening,
) => [
  {
    input: (
      <SelectInput
        fieldName={CardScreeningData.FullInfo}
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
        selectValue={formData[CardScreeningData.FullInfo]}
        setFormData={setFormData}
      />
    ),
  },
];

export const fullAgreedScreeningSelect = (
  setFormData,
  formData: CardScreening,
) => [
  {
    input: (
      <SelectInput
        fieldName={CardScreeningData.FullAgreed}
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
        selectValue={formData[CardScreeningData.FullAgreed]}
        setFormData={setFormData}
      />
    ),
  },
];

export const complyWithTheRequirementsScreeningSelect = (
  setFormData,
  formData: CardScreening,
) => [
  {
    input: (
      <SelectInput
        fieldName={CardScreeningData.ComplyWithTheRequirements}
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
        selectValue={formData[CardScreeningData.ComplyWithTheRequirements]}
        setFormData={setFormData}
      />
    ),
  },
];

export const contraceptionScreeningSelect = (
  setFormData,
  formData: CardScreening,
) => [
  {
    input: (
      <SelectInput
        fieldName={CardScreeningData.Contraception}
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
        selectValue={formData[CardScreeningData.Contraception]}
        setFormData={setFormData}
      />
    ),
  },
];

export const signed2ExamplesScreeningSelect = (
  setFormData,
  formData: CardScreening,
  timeInput,
  setTimeInput,
) => [
  {
    input: (
      <DateInput
        fieldName={CardScreeningData.Signed2ExamplesDateTime}
        inputValue={formData[CardScreeningData.Signed2ExamplesDateTime]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Время",
    input: (
      <DefaultInput
        fieldName={CardScreeningData.ThirdTime}
        setFormData={setFormData}
        inputValue={formData[CardScreeningData.ThirdTime]}
        type={"time"}
      />
    ),
  },
  {
    input: (
      <SelectInput
        fieldName={CardScreeningData.Signed2Examples}
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
        selectValue={formData[CardScreeningData.Signed2Examples]}
        setFormData={setFormData}
      />
    ),
  },
];

export const exampleInDocumentationScreeningSelect = (
  setFormData,
  formData: CardScreening,
) => [
  {
    input: (
      <SelectInput
        fieldName={CardScreeningData.ExampleInDocumentation}
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
        selectValue={formData[CardScreeningData.ExampleInDocumentation]}
        setFormData={setFormData}
      />
    ),
  },
];

export const stacionarScreeningSelect = (
  setFormData,
  formData: CardScreening,
) => [
  {
    input: (
      <SelectInput
        fieldName={CardScreeningData.Stacionar}
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
        selectValue={formData[CardScreeningData.Stacionar]}
        setFormData={setFormData}
      />
    ),
  },
];

export const signedFormScreeningSelect = (
  setFormData,
  formData: CardScreening,
) => [
  {
    input: (
      <SelectInput
        fieldName={CardScreeningData.SignedForm}
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
        selectValue={formData[CardScreeningData.SignedForm]}
        setFormData={setFormData}
      />
    ),
  },
];

export const AgreementOperatorScreening = (
  setFormData,
  formData: CardScreening,
) => [
  {
    input: (
      <DefaultInput
        fieldName={CardScreeningData.AgreementOperator}
        setFormData={setFormData}
        inputValue={formData[CardScreeningData.AgreementOperator]}
        inputWidth="800px"
      />
    ),
  },
];

export const IndividualScreening = (setFormData, formData: CardScreening) => [
  {
    input: (
      <MaskedInput
        fieldName={CardScreeningData.IndividualString}
        setFormData={setFormData}
        inputValue={formData[CardScreeningData.IndividualString]}
        mask={"*********************************"}
        inputWidth="500px"
      />
      // <DefaultInput
      //   fieldName={CardScreeningData.IndividualString}
      //   setFormData={setFormData}
      //   inputValue={formData[CardScreeningData.IndividualString]}
      //   inputWidth="800px"
      //   min={33}
      //   max={33}
      //   exclusionPattern={NotNumberPattern}
      // />
    ),
  },
];

export const HandedPolisScreeningSelect = (
  setFormData,
  formData: CardScreening,
) => [
  {
    inputTitle: "Наименование",
    input: (
      <InsuranceSelectScreening formData={formData} setFormData={setFormData} />
    ),
  },
  {
    input: (
      <SelectInput
        fieldName={CardScreeningData.HandedPolis}
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
        selectValue={formData[CardScreeningData.HandedPolis]}
        setFormData={setFormData}
      />
    ),
  },
];

export const PolisCopyScreeningSelect = (
  setFormData,
  formData: CardScreening,
) => [
  {
    input: (
      <SelectInput
        fieldName={CardScreeningData.PolisCopy}
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
        selectValue={formData[CardScreeningData.PolisCopy]}
        setFormData={setFormData}
      />
    ),
  },
];
