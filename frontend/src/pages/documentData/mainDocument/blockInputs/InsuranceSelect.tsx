import React, { useEffect, useState } from "react";
import { FormDataFields } from "../../../../utils/types/enums/documentEnums";
import SelectInput from "../../../../components/document/inputs/selectInput/SelectInput";
import { axiosCardRequest } from "../../../../utils/request/NewAxiosRequest";
import { InsuranceOrganisation } from "../../../../utils/types/documentType";

type InsuranceSelectProps = {
  formData;
  setFormData;
};

const InsuranceSelect = ({ formData, setFormData }: InsuranceSelectProps) => {
  const [insurances, setInsurances] = useState<InsuranceOrganisation[]>([]);

  useEffect(() => {
    const getInsuranceCompanies = async (): Promise<void> => {
      await axiosCardRequest.get("/Insurance/List").then((res) => {
        setInsurances(res.data);
      });
    };

    getInsuranceCompanies();
  }, []);

  const formatInsurance = (insurances: InsuranceOrganisation[]) =>
    insurances.map((item) => ({
      value: item.id,
      name: item.name,
    }));

  return (
    <SelectInput
      fieldName={FormDataFields.InsuranceMedicalOrganization}
      options={formatInsurance(insurances)}
      selectValue={formData.InsuranceMedicalOrganization}
      setFormData={setFormData}
    />
  );
};

export default InsuranceSelect;
