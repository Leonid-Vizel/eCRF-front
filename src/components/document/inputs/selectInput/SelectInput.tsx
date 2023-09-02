import React from 'react';
import './selectInput.scss';
import { SelectOption } from '../../../../utils/types/shared';

type SelectInputTypes = {
  fieldName?: string;
  options: SelectOption[];
  selectValue: number | string;
  placeholder?: string;
  optionPlaceholder?: string;
  setFormData: (value: any) => void;
  selectValueSecond?: {
    index: number;
    fieldName: string;
  };
};

const SelectInput = ({
  options,
  selectValue,
  fieldName,
  placeholder,
  setFormData,
  optionPlaceholder,
  selectValueSecond,
}: SelectInputTypes) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    if (selectValueSecond) {
      setFormData((prevFormData) => {
        const newFormData = { ...prevFormData };

        newFormData.PhysicalExaminationTables[selectValueSecond.index] = {
          ...newFormData.PhysicalExaminationTables[selectValueSecond.index],
          [selectValueSecond.fieldName]: Boolean(value),
        };

        return newFormData;
      });
    } else {
      setFormData((prevFormData) => {
        let newFormData = { ...prevFormData };

        newFormData = {
          ...newFormData,
          [name]: value,
        };

        return newFormData;
      });
    }
  };

  return (
    <select
      className="select-input"
      value={selectValue}
      name={fieldName}
      placeholder={placeholder}
      onChange={handleInputChange}
      defaultValue=""
    >
      <option value="" disabled>
        {optionPlaceholder || 'Выберите'}
      </option>
      {options.map(({ name, value }) => <option value={value}>{name}</option>)}
    </select>
  );
};

export default SelectInput;
