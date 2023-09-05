import TextArea from 'antd/es/input/TextArea';

type TextareaProps = {
  fieldName?: string;
  inputValue: string;
  setFormData: (value: any) => void;
  width?: string;
  inputValueSecond?: {
    index: number;
    fieldName: string;
  };
};

const Textarea = ({
  fieldName,
  inputValue,
  setFormData,
  width,
  inputValueSecond,
}: TextareaProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (inputValueSecond) {
      setFormData((prevFormData) => {
        const newFormData = { ...prevFormData };

        newFormData.PhysicalExaminationTables[inputValueSecond.index] = {
          ...newFormData.PhysicalExaminationTables[inputValueSecond.index],
          [inputValueSecond.fieldName]: value,
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
    <TextArea
      style={{ width, resize: 'none' }}
      maxLength={10000}
      name={fieldName}
      onChange={handleInputChange}
      value={inputValue}
      rows={7}
    />
  );
};

export default Textarea;
