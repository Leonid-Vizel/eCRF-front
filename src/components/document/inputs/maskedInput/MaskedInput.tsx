import React from 'react';
import InputMask from 'react-input-mask';
import './maskedInput.scss';

type MaskedInputProps = {
  fieldName: string;
  exclusionPattern?: RegExp;
  setFormData: (value: any) => void;
  inputValue: string | number;
  mask: string;
  inputWidth?: string;
  placeholder?: string;
};

const MaskedInput = ({
  fieldName,
  exclusionPattern,
  setFormData,
  inputValue,
  inputWidth,
  mask,
  placeholder,
}: MaskedInputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const correctValue = value.replaceAll(exclusionPattern, '');

    setFormData((prevFormData) => { 
      let newFormData = { ...prevFormData };

      newFormData = {
        ...newFormData,
        [name]: correctValue,
      };

      return newFormData;
    });
  };

  return (
    <InputMask
      name={fieldName}
      style={{ width: inputWidth || '200px' }}
      placeholder={placeholder || ''}
      className="masked-input"
      value={inputValue}
      onChange={handleInputChange}
      mask={mask}
      maskChar={null}
    />
  );
};

export default MaskedInput;
