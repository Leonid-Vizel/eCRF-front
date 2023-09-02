import React, { useEffect, useState } from "react";
import { CardScreeningData } from "../../../../utils/types/enums/documentEnums";
import SelectInput from "../../../../components/document/inputs/selectInput/SelectInput";
import { axiosCardRequest } from "../../../../utils/request/NewAxiosRequest";
import { InsuranceOrganisation } from "../../../../utils/types/documentType";

type InsuranceSelectProps = {
  formData;
  setFormData;
};

const InsuranceSelectScreening = ({
  formData,
  setFormData,
}: InsuranceSelectProps) => {
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
      value: item.name,
      name: item.name,
    }));

  return (
    <SelectInput
      fieldName={CardScreeningData.Insurance}
      options={formatInsurance(insurances)}
      selectValue={formData.Insurance}
      setFormData={setFormData}
      optionPlaceholder={"Выберите мед организацию"}
    />
  );
};

export default InsuranceSelectScreening;
