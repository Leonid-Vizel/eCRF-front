import React from 'react';
import {
  Col, InputNumber, Row, Slider,
} from 'antd';

type RangeInputProps = {
  fieldName: string;
  setFormData: (value: any) => void;
  inputValue: string | number;
  inputWidth?: string;
  min?: number;
  max?: number;
  step?: number;
};

const RangeInput = ({
  fieldName,
  inputValue,
  inputWidth,
  setFormData,
  min,
  max,
  step,
}: RangeInputProps) => {
  const handleInputChange = (value) => {
    setFormData((prevFormData) => {
      let newFormData = { ...prevFormData };

      newFormData = {
        ...newFormData,
        [fieldName]: +value,
      };

      return newFormData;
    });
  };

  return (
    <Row>
      <Slider
        style={{ width: '100px', fontSize: '20px' }}
        min={min}
        max={max}
        step={step || 1}
        trackStyle={{ backgroundColor: 'red', height: '10px' }}
        railStyle={{ height: '10px' }}
        onChange={handleInputChange}
        value={typeof inputValue === 'number' ? inputValue : 0}
      />
      <InputNumber
        min={min}
        max={max}
        style={{
          margin: '0 16px',
          width: '100px',
          fontSize: '20px',
          padding: '5px',
        }}
        value={inputValue}
        onChange={handleInputChange}
      />
    </Row>
  );
};

export default RangeInput;
