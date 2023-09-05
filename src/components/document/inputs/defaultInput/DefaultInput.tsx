import React from 'react';
import './defaultInput.scss';

type DefaultInputProps = {
  fieldName: string;
  exclusionPattern?: RegExp;
  setFormData: (value: any) => void;
  inputValue: string | number;
  inputWidth?: string;
  min?: number;
  max?: number;
  type?: string;
  placeholder?: string;
};

const DefaultInput = ({
  fieldName,
  exclusionPattern,
  setFormData,
  inputValue,
  inputWidth,
  min,
  max,
  type,
  placeholder,
}: DefaultInputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const correctValue = value.replaceAll(exclusionPattern, '');

    setFormData((prevFormData) => {
      let newFormData = { ...prevFormData };

      if (
        name === 'Pediculosis'
        || name === 'Scabies'
        || name === 'TBS'
        || name === 'Hepatitis'
        || name === 'VenerealDisease'
        || name === 'Sex'
        || name === 'Locality'
        || name === 'Family'
        || name === 'Education'
        || name === 'Work'
        || name === 'DisabilityType'
        || name === 'DisabilityGroup'
        || name === 'CheckupLocation'
        || name === 'RhFactor'
        || name === 'BloodGroup'
      ) {
        newFormData = {
          ...newFormData,
          [name]: correctValue === null ? null : Number(value),
        };
      } else {
        newFormData = {
          ...newFormData,
          [name]: correctValue,
        };
      }
      return newFormData;
    });
  };

  return (
    <input
      name={fieldName}
      style={{ width: inputWidth || '200px' }}
      className="default-input"
      value={inputValue}
      placeholder={placeholder || ''}
      type={type || 'text'}
      onChange={handleInputChange}
      min={typeof min === 'number' ? min : undefined}
      max={typeof max === 'number' ? max : undefined}
      minLength={min}
      maxLength={max}
    />
  );
};

export default DefaultInput;
