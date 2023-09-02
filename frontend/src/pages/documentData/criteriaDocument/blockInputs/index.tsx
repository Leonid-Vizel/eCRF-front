import DefaultInput from "../../../../components/document/inputs/defaultInput/DefaultInput";
import SelectInput from "../../../../components/document/inputs/selectInput/SelectInput";
import Textarea from "../../../../components/document/inputs/textarea/Textarea";
import { Criteria } from "../../../../utils/types/documentType";
import { CriteriaFields } from "../../../../utils/types/enums/documentEnums";
import { InputBlockItem } from "../../../../utils/types/shared";
import { acceptedOptions, evaluatedOptions, yesNoOptions } from "./data";

export const IMT = (formData: Criteria, setFormData): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.IncludeCriteria3}
        options={yesNoOptions}
        selectValue={formData.IncludeCriteria3}
        setFormData={setFormData}
      />
    ),
  },
];

export const informList = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.IncludeCriteria2}
        options={yesNoOptions}
        selectValue={formData.IncludeCriteria2}
        setFormData={setFormData}
      />
    ),
  },
];

export const mensAndWomens = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.IncludeCriteria1}
        options={yesNoOptions}
        selectValue={formData.IncludeCriteria1}
        setFormData={setFormData}
      />
    ),
  },
];

export const verificationDiagnosis = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.IncludeCriteria4}
        options={yesNoOptions}
        selectValue={formData.IncludeCriteria4}
        setFormData={setFormData}
      />
    ),
  },
];

export const IncludeCriteria5 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.IncludeCriteria5}
        options={yesNoOptions}
        selectValue={formData.IncludeCriteria5}
        setFormData={setFormData}
      />
    ),
  },
];

export const IncludeCriteria6 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.IncludeCriteria6}
        options={yesNoOptions}
        selectValue={formData.IncludeCriteria6}
        setFormData={setFormData}
      />
    ),
  },
];

export const IncludeCriteria7 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.IncludeCriteria7}
        options={yesNoOptions}
        selectValue={formData.IncludeCriteria7}
        setFormData={setFormData}
      />
    ),
  },
];

export const IncludeCriteria8 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.IncludeCriteria8}
        options={yesNoOptions}
        selectValue={formData.IncludeCriteria8}
        setFormData={setFormData}
      />
    ),
  },
];

export const IncludeCriteria9 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.IncludeCriteria9}
        options={yesNoOptions}
        selectValue={formData.IncludeCriteria9}
        setFormData={setFormData}
      />
    ),
  },
];

export const IncludeCriteria10 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.IncludeCriteria10}
        options={yesNoOptions}
        selectValue={formData.IncludeCriteria10}
        setFormData={setFormData}
      />
    ),
  },
];

export const IncludeCriteria11 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.IncludeCriteria11}
        options={yesNoOptions}
        selectValue={formData.IncludeCriteria11}
        setFormData={setFormData}
      />
    ),
  },
];

export const IncludeCriteria12 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.IncludeCriteria12}
        options={yesNoOptions}
        selectValue={formData.IncludeCriteria12}
        setFormData={setFormData}
      />
    ),
  },
];

export const IncludeCriteria13 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.IncludeCriteria13}
        options={yesNoOptions}
        selectValue={formData.IncludeCriteria13}
        setFormData={setFormData}
      />
    ),
  },
];

export const IncludeCriteria14 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.IncludeCriteria14}
        options={yesNoOptions}
        selectValue={formData.IncludeCriteria14}
        setFormData={setFormData}
      />
    ),
  },
];

export const IncludeCriteria15 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.IncludeCriteria15}
        options={yesNoOptions}
        selectValue={formData.IncludeCriteria15}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria1 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria1}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria1}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria2 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria2}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria2}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria3 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria3}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria3}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria4 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria4}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria4}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria5 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria5}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria5}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria6 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria6}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria6}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria7 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria7}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria7}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria8 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria8}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria8}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria9 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria9}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria9}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria10 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria10}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria10}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria11 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria11}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria11}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria12 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria12}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria12}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria13 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria13}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria13}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria14 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria14}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria14}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria15 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria15}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria15}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria16 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria16}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria16}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria17 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria17}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria17}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria18 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria18}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria18}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria19 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria19}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria19}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria20 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria20}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria20}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria21 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria21}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria21}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria22 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria22}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria22}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria23 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria23}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria23}
        setFormData={setFormData}
      />
    ),
  },
];

export const ExcludeCriteria24 = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.ExcludeCriteria24}
        options={yesNoOptions}
        selectValue={formData.ExcludeCriteria24}
        setFormData={setFormData}
      />
    ),
  },
];

export const Comments = (formData: Criteria, setFormData): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <Textarea
        fieldName={CriteriaFields.Comment}
        inputValue={formData.Comment}
        setFormData={setFormData}
        width="600px"
      />
    ),
  },
];

export const CriteriaEvaluated = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.CriteriaEvaluated}
        options={evaluatedOptions}
        selectValue={formData.CriteriaEvaluated}
        setFormData={setFormData}
      />
    ),
  },
];

export const CriteriaAccepted = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.CriteriaAccepted}
        options={acceptedOptions}
        selectValue={formData.CriteriaAccepted}
        setFormData={setFormData}
      />
    ),
  },
];

export const CriteriaAllowed = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.CriteriaAllowed}
        options={acceptedOptions}
        selectValue={formData.CriteriaAllowed}
        setFormData={setFormData}
      />
    ),
  },
];

export const CriteriaYesNo = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.CriteriaYesNo}
        options={yesNoOptions}
        selectValue={formData.CriteriaYesNo}
        setFormData={setFormData}
      />
    ),
  },
];

export const Informed = (formData: Criteria, setFormData): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.Informed}
        options={yesNoOptions}
        selectValue={formData.Informed}
        setFormData={setFormData}
      />
    ),
  },
];

export const Hospitalized = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <SelectInput
        fieldName={CriteriaFields.Hospitalized}
        options={yesNoOptions}
        selectValue={formData.Hospitalized}
        setFormData={setFormData}
      />
    ),
  },
];

export const VisitComment = (
  formData: Criteria,
  setFormData,
): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <Textarea
        fieldName={CriteriaFields.VisitComment}
        inputValue={formData.VisitComment}
        setFormData={setFormData}
        width="600px"
      />
    ),
  },
];

export const Doctor = (formData: Criteria, setFormData): InputBlockItem[] => [
  {
    inputTitle: "",
    input: (
      <DefaultInput
        fieldName={CriteriaFields.Doctor}
        inputValue={formData.Doctor}
        setFormData={setFormData}
        inputWidth={"900px"}
      />
    ),
  },
];
