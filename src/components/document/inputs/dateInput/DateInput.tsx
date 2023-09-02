import React from 'react';
import './dateInput.scss';

type DateInputProps = {
  fieldName: string;
  inputValue: string;
  setFormData: (value: any) => void;
};

const DateInput = ({ inputValue, setFormData, fieldName }: DateInputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      let newFormData = { ...prevFormData };

      newFormData = {
        ...newFormData,
        [name]: value,
      };

      return newFormData;
    });
  };

  return (
    <input
      name={fieldName}
      type="date"
      className="date-input"
      max="9999-12-31"
      onChange={handleInputChange}
      value={inputValue}
    />
  );
};

export default DateInput;
