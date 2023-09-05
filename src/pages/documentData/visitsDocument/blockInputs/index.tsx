import Textarea from '../../../../components/document/inputs/textarea/Textarea';
import {
  CardDayData,
  CardPhysicalData,
  PhysicalExamData,
} from '../../../../utils/types/enums/documentEnums';
import MaskedInput from '../../../../components/document/inputs/maskedInput/MaskedInput';
import DefaultInput from '../../../../components/document/inputs/defaultInput/DefaultInput';
import SelectInput from '../../../../components/document/inputs/selectInput/SelectInput';
import { NotNumberPattern } from '../../../../utils/consts';
import DateInput from '../../../../components/document/inputs/dateInput/DateInput';
import RangeInput from '../../../../components/document/fileInput/RangeInput';

export const dayVisit = (setFormData, formData) => [
  // {
  //     inputTitle: 'Выберите день',
  //     input: (
  //         <SelectInput
  //             fieldName={CardDayData.DayNumber}
  //             options={[
  //                 {
  //                     name: 'Второй',
  //                     value: 2,
  //                 },
  //                 {
  //                     name: 'Третий',
  //                     value: 3,
  //                 },
  //                 {
  //                     name: 'Четвертый',
  //                     value: 4,
  //                 },
  //             ]}
  //             selectValue={formData[CardDayData.DayNumber]}
  //             setFormData={setFormData}
  //         />
  //     ),
  // },
  {
    inputTitle: 'Выберите дату',
    input: (
      <DateInput
        fieldName={CardDayData.Date}
        inputValue={formData[CardDayData.Date]}
        setFormData={setFormData}
      />
    ),
  },
];

export const complaintsVisit = (setFormData, formData) => [
  {
    inputTitle: 'Введите',
    input: (
      <Textarea
        fieldName={CardDayData.Complaints}
        inputValue={formData[CardDayData.Complaints]}
        setFormData={setFormData}
        width="1000px"
      />
    ),
  },
];

export const temperatureVisit = (setFormData, formData) => [
  {
    inputTitle: 'Систолическое давление',
    input: (
      <RangeInput
        fieldName={CardDayData.SystolicPressure}
        inputValue={formData[CardDayData.SystolicPressure]}
        setFormData={setFormData}
        min={99}
        max={139}
      />
    ),
  },
  {
    inputTitle: 'Диастолическое давление',
    input: (
      <RangeInput
        fieldName={CardDayData.DiastolicPressure}
        inputValue={formData[CardDayData.DiastolicPressure]}
        setFormData={setFormData}
        min={55}
        max={95}
      />
    ),
  },
  {
    inputTitle: 'ЧСС',
    input: (
      <RangeInput
        fieldName={CardDayData.HeartRate}
        inputValue={formData[CardDayData.HeartRate]}
        setFormData={setFormData}
        min={50}
        max={95}
      />
    ),
  },
  {
    inputTitle: 'ЧДД',
    input: (
      <RangeInput
        fieldName={CardDayData.RespiratoryRate}
        inputValue={formData[CardDayData.RespiratoryRate]}
        setFormData={setFormData}
        min={12}
        max={21}
      />
    ),
  },
  {
    inputTitle: 'Температура тела',
    input: (
      <RangeInput
        fieldName={CardDayData.Temperature}
        inputValue={formData[CardDayData.Temperature]}
        setFormData={setFormData}
        min={25}
        max={47}
        step={0.1}
      />
    ),
  },
];

export const overallVisit = (setFormData, formData) => [
  {
    inputTitle: 'Выполнено',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 0,
          fieldName: CardPhysicalData.IsCompleted,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[0]
                      ?.IsCompleted === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[0]
                        ?.IsCompleted
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Показатели',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 0,
          fieldName: CardPhysicalData.IsNorm,
        }}
        options={[
          {
            name: 'Норма',
            value: 0,
          },
          {
            name: 'Отклонение',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[0]
                      ?.IsNorm === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[0]
                        ?.IsNorm
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Отклонения',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 0,
          fieldName: CardPhysicalData.IsDeviation,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[0]
                      ?.IsDeviation === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[0]
                        ?.IsDeviation
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Комментарий',
    input: (
      <Textarea
        inputValueSecond={{
          index: 0,
          fieldName: CardPhysicalData.Comment,
        }}
        inputValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[0]?.Comment
                }
        setFormData={setFormData}
        width="300px"
      />
    ),
  },
];

export const skinVisit = (setFormData, formData) => [
  {
    inputTitle: 'Выполнено',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 1,
          fieldName: CardPhysicalData.IsCompleted,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[1]
                      ?.IsCompleted === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[1]
                        ?.IsCompleted
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Показатели',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 1,
          fieldName: CardPhysicalData.IsNorm,
        }}
        options={[
          {
            name: 'Норма',
            value: 0,
          },
          {
            name: 'Отклонение',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[1]
                      ?.IsNorm === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[1]
                        ?.IsNorm
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Отклонения',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 1,
          fieldName: CardPhysicalData.IsDeviation,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[1]
                      ?.IsDeviation === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[1]
                        ?.IsDeviation
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Комментарий',
    input: (
      <Textarea
        inputValueSecond={{
          index: 1,
          fieldName: CardPhysicalData.Comment,
        }}
        inputValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[1]?.Comment
                }
        setFormData={setFormData}
        width="300px"
      />
    ),
  },
];

export const seenVisit = (setFormData, formData) => [
  {
    inputTitle: 'Выполнено',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 2,
          fieldName: CardPhysicalData.IsCompleted,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[2]
                      ?.IsCompleted === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[2]
                        ?.IsCompleted
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Показатели',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 2,
          fieldName: CardPhysicalData.IsNorm,
        }}
        options={[
          {
            name: 'Норма',
            value: 0,
          },
          {
            name: 'Отклонение',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[2]
                      ?.IsNorm === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[2]
                        ?.IsNorm
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Отклонения',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 2,
          fieldName: CardPhysicalData.IsDeviation,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[2]
                      ?.IsDeviation === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[2]
                        ?.IsDeviation
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Комментарий',
    input: (
      <Textarea
        inputValueSecond={{
          index: 2,
          fieldName: CardPhysicalData.Comment,
        }}
        inputValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[2]?.Comment
                }
        setFormData={setFormData}
        width="300px"
      />
    ),
  },
];

export const lymphVisit = (setFormData, formData) => [
  {
    inputTitle: 'Выполнено',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 3,
          fieldName: CardPhysicalData.IsCompleted,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[3]
                      ?.IsCompleted === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[3]
                        ?.IsCompleted
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Показатели',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 3,
          fieldName: CardPhysicalData.IsNorm,
        }}
        options={[
          {
            name: 'Норма',
            value: 0,
          },
          {
            name: 'Отклонение',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[3]
                      ?.IsNorm === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[3]
                        ?.IsNorm
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Отклонения',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 3,
          fieldName: CardPhysicalData.IsDeviation,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[3]
                      ?.IsDeviation === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[3]
                        ?.IsDeviation
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Комментарий',
    input: (
      <Textarea
        inputValueSecond={{
          index: 3,
          fieldName: CardPhysicalData.Comment,
        }}
        inputValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[3]?.Comment
                }
        setFormData={setFormData}
        width="300px"
      />
    ),
  },
];

export const eyeVisit = (setFormData, formData) => [
  {
    inputTitle: 'Выполнено',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 4,
          fieldName: CardPhysicalData.IsCompleted,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[4]
                      ?.IsCompleted === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[4]
                        ?.IsCompleted
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Показатели',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 4,
          fieldName: CardPhysicalData.IsNorm,
        }}
        options={[
          {
            name: 'Норма',
            value: 0,
          },
          {
            name: 'Отклонение',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[4]
                      ?.IsNorm === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[4]
                        ?.IsNorm
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Отклонения',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 4,
          fieldName: CardPhysicalData.IsDeviation,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[4]
                      ?.IsDeviation === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[4]
                        ?.IsDeviation
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Комментарий',
    input: (
      <Textarea
        inputValueSecond={{
          index: 4,
          fieldName: CardPhysicalData.Comment,
        }}
        inputValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[4]?.Comment
                }
        setFormData={setFormData}
        width="300px"
      />
    ),
  },
];

export const headVisit = (setFormData, formData) => [
  {
    inputTitle: 'Выполнено',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 5,
          fieldName: CardPhysicalData.IsCompleted,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[5]
                      ?.IsCompleted === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[5]
                        ?.IsCompleted
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Показатели',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 5,
          fieldName: CardPhysicalData.IsNorm,
        }}
        options={[
          {
            name: 'Норма',
            value: 0,
          },
          {
            name: 'Отклонение',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[5]
                      ?.IsNorm === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[5]
                        ?.IsNorm
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Отклонения',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 5,
          fieldName: CardPhysicalData.IsDeviation,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[5]
                      ?.IsDeviation === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[5]
                        ?.IsDeviation
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Комментарий',
    input: (
      <Textarea
        inputValueSecond={{
          index: 5,
          fieldName: CardPhysicalData.Comment,
        }}
        inputValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[5]?.Comment
                }
        setFormData={setFormData}
        width="300px"
      />
    ),
  },
];

export const venumVisit = (setFormData, formData) => [
  {
    inputTitle: 'Выполнено',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 6,
          fieldName: CardPhysicalData.IsCompleted,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[6]
                      ?.IsCompleted === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[6]
                        ?.IsCompleted
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Показатели',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 6,
          fieldName: CardPhysicalData.IsNorm,
        }}
        options={[
          {
            name: 'Норма',
            value: 0,
          },
          {
            name: 'Отклонение',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[6]
                      ?.IsNorm === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[6]
                        ?.IsNorm
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Отклонения',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 6,
          fieldName: CardPhysicalData.IsDeviation,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[6]
                      ?.IsDeviation === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[6]
                        ?.IsDeviation
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Комментарий',
    input: (
      <Textarea
        inputValueSecond={{
          index: 6,
          fieldName: CardPhysicalData.Comment,
        }}
        inputValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[6]?.Comment
                }
        setFormData={setFormData}
        width="300px"
      />
    ),
  },
];

export const heartVisit = (setFormData, formData) => [
  {
    inputTitle: 'Выполнено',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 7,
          fieldName: CardPhysicalData.IsCompleted,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[7]
                      ?.IsCompleted === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[7]
                        ?.IsCompleted
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Показатели',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 7,
          fieldName: CardPhysicalData.IsNorm,
        }}
        options={[
          {
            name: 'Норма',
            value: 0,
          },
          {
            name: 'Отклонение',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[7]
                      ?.IsNorm === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[7]
                        ?.IsNorm
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Отклонения',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 7,
          fieldName: CardPhysicalData.IsDeviation,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[7]
                      ?.IsDeviation === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[7]
                        ?.IsDeviation
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Комментарий',
    input: (
      <Textarea
        inputValueSecond={{
          index: 7,
          fieldName: CardPhysicalData.Comment,
        }}
        inputValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[7]?.Comment
                }
        setFormData={setFormData}
        width="300px"
      />
    ),
  },
];

export const breathVisit = (setFormData, formData) => [
  {
    inputTitle: 'Выполнено',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 8,
          fieldName: CardPhysicalData.IsCompleted,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[8]
                      ?.IsCompleted === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[8]
                        ?.IsCompleted
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Показатели',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 8,
          fieldName: CardPhysicalData.IsNorm,
        }}
        options={[
          {
            name: 'Норма',
            value: 0,
          },
          {
            name: 'Отклонение',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[8]
                      ?.IsNorm === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[8]
                        ?.IsNorm
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Отклонения',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 8,
          fieldName: CardPhysicalData.IsDeviation,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[8]
                      ?.IsDeviation === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[8]
                        ?.IsDeviation
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Комментарий',
    input: (
      <Textarea
        inputValueSecond={{
          index: 8,
          fieldName: CardPhysicalData.Comment,
        }}
        inputValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[8]?.Comment
                }
        setFormData={setFormData}
        width="300px"
      />
    ),
  },
];

export const boneVisit = (setFormData, formData) => [
  {
    inputTitle: 'Выполнено',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 9,
          fieldName: CardPhysicalData.IsCompleted,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[9]
                      ?.IsCompleted === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[9]
                        ?.IsCompleted
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Показатели',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 9,
          fieldName: CardPhysicalData.IsNorm,
        }}
        options={[
          {
            name: 'Норма',
            value: 0,
          },
          {
            name: 'Отклонение',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[9]
                      ?.IsNorm === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[9]
                        ?.IsNorm
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Отклонения',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 9,
          fieldName: CardPhysicalData.IsDeviation,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[9]
                      ?.IsDeviation === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[9]
                        ?.IsDeviation
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Комментарий',
    input: (
      <Textarea
        inputValueSecond={{
          index: 9,
          fieldName: CardPhysicalData.Comment,
        }}
        inputValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[9]?.Comment
                }
        setFormData={setFormData}
        width="300px"
      />
    ),
  },
];

export const foodVisit = (setFormData, formData) => [
  {
    inputTitle: 'Выполнено',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 10,
          fieldName: CardPhysicalData.IsCompleted,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[10]
                      ?.IsCompleted === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[10]
                        ?.IsCompleted
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Показатели',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 10,
          fieldName: CardPhysicalData.IsNorm,
        }}
        options={[
          {
            name: 'Норма',
            value: 0,
          },
          {
            name: 'Отклонение',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[10]
                      ?.IsNorm === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[10]
                        ?.IsNorm
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Отклонения',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 10,
          fieldName: CardPhysicalData.IsDeviation,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[10]
                      ?.IsDeviation === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[10]
                        ?.IsDeviation
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Комментарий',
    input: (
      <Textarea
        inputValueSecond={{
          index: 10,
          fieldName: CardPhysicalData.Comment,
        }}
        inputValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[10]
                      ?.Comment
                }
        setFormData={setFormData}
        width="300px"
      />
    ),
  },
];

export const pissVisit = (setFormData, formData) => [
  {
    inputTitle: 'Выполнено',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 11,
          fieldName: CardPhysicalData.IsCompleted,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[11]
                      ?.IsCompleted === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[11]
                        ?.IsCompleted
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Показатели',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 11,
          fieldName: CardPhysicalData.IsNorm,
        }}
        options={[
          {
            name: 'Норма',
            value: 0,
          },
          {
            name: 'Отклонение',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[11]
                      ?.IsNorm === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[1]
                        ?.IsNorm
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Отклонения',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 11,
          fieldName: CardPhysicalData.IsDeviation,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[11]
                      ?.IsDeviation === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[11]
                        ?.IsDeviation
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Комментарий',
    input: (
      <Textarea
        inputValueSecond={{
          index: 11,
          fieldName: CardPhysicalData.Comment,
        }}
        inputValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[11]
                      ?.Comment
                }
        setFormData={setFormData}
        width="300px"
      />
    ),
  },
];

export const nervousVisit = (setFormData, formData) => [
  {
    inputTitle: 'Выполнено',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 12,
          fieldName: CardPhysicalData.IsCompleted,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[12]
                      ?.IsCompleted === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[12]
                        ?.IsCompleted
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Показатели',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 12,
          fieldName: CardPhysicalData.IsNorm,
        }}
        options={[
          {
            name: 'Норма',
            value: 0,
          },
          {
            name: 'Отклонение',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[12]
                      ?.IsNorm === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[12]
                        ?.IsNorm
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Отклонения',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 12,
          fieldName: CardPhysicalData.IsDeviation,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[12]
                      ?.IsDeviation === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[12]
                        ?.IsDeviation
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Комментарий',
    input: (
      <Textarea
        inputValueSecond={{
          index: 12,
          fieldName: CardPhysicalData.Comment,
        }}
        inputValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[12]
                      ?.Comment
                }
        setFormData={setFormData}
        width="300px"
      />
    ),
  },
];

export const psychoVisit = (setFormData, formData) => [
  {
    inputTitle: 'Выполнено',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 13,
          fieldName: CardPhysicalData.IsCompleted,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[13]
                      ?.IsCompleted === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[13]
                        ?.IsCompleted
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Показатели',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 13,
          fieldName: CardPhysicalData.IsNorm,
        }}
        options={[
          {
            name: 'Норма',
            value: 0,
          },
          {
            name: 'Отклонение',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[13]
                      ?.IsNorm === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[13]
                        ?.IsNorm
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Отклонения',
    input: (
      <SelectInput
        selectValueSecond={{
          index: 13,
          fieldName: CardPhysicalData.IsDeviation,
        }}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[13]
                      ?.IsDeviation === null
                      ? null
                      : formData[CardDayData.PhysicalExaminationTable]?.[13]
                        ?.IsDeviation
                        ? '1'
                        : '0'
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Комментарий',
    input: (
      <Textarea
        inputValueSecond={{
          index: 13,
          fieldName: CardPhysicalData.Comment,
        }}
        inputValue={
                    formData[CardDayData.PhysicalExaminationTable]?.[13]
                      ?.Comment
                }
        setFormData={setFormData}
        width="300px"
      />
    ),
  },
];

export const bloodHoursVisit = (setFormData, formData) => [
  {
    input: (
      <DefaultInput
        fieldName={CardDayData.BloodDrawnTime}
        setFormData={setFormData}
        inputValue={formData[CardDayData.BloodDrawnTime]}
        type="time"
      />
    ),
  },
  {
    input: (
      <SelectInput
        fieldName={CardDayData.IsBloodDrawn}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={formData[CardDayData.IsBloodDrawn]}
        setFormData={setFormData}
      />
    ),
  },
];

export const isPissVisit = (setFormData, formData) => [
  {
    input: (
      <SelectInput
        fieldName={CardDayData.IsUrinalysisPerformedForDrugs}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.IsUrinalysisPerformedForDrugs]
                }
        setFormData={setFormData}
      />
    ),
  },
];

export const isPissSecondVisit = (setFormData, formData) => [
  {
    input: (
      <SelectInput
        fieldName={CardDayData.IsUrineContainsDrugs}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={formData[CardDayData.IsUrineContainsDrugs]}
        setFormData={setFormData}
      />
    ),
  },
];

export const isPissThirdVisit = (setFormData, formData) => [
  {
    input: (
      <SelectInput
        fieldName={CardDayData.IsUrinalysisPerformedForCotinine}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.IsUrinalysisPerformedForCotinine]
                }
        setFormData={setFormData}
      />
    ),
  },
];

export const isPissFourthVisit = (setFormData, formData) => [
  {
    input: (
      <SelectInput
        fieldName={CardDayData.IsUrineContainsCotinine}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={formData[CardDayData.IsUrineContainsCotinine]}
        setFormData={setFormData}
      />
    ),
  },
];

export const isPissFifthVisit = (setFormData, formData) => [
  {
    input: (
      <SelectInput
        fieldName={CardDayData.IsAlhocolContentTestPerformed}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.IsAlhocolContentTestPerformed]
                }
        setFormData={setFormData}
      />
    ),
  },
  {
    input: (
      <DefaultInput
        fieldName={CardDayData.Promille}
        setFormData={setFormData}
        inputValue={formData[CardDayData.Promille]}
        placeholder="Промилей"
        exclusionPattern={NotNumberPattern}
      />
    ),
  },
];

export const isPissSixVisit = (setFormData, formData) => [
  {
    input: (
      <SelectInput
        fieldName={CardDayData.IsAdverseEvents}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={formData[CardDayData.IsAdverseEvents]}
        setFormData={setFormData}
      />
    ),
  },
];

export const adverseDescVisit = (setFormData, formData) => [
  {
    inputTitle: 'Введите описание',
    input: (
      <Textarea
        fieldName={CardDayData.AdverseEventsDescription}
        inputValue={formData[CardDayData.AdverseEventsDescription]}
        setFormData={setFormData}
        width="1000px"
      />
    ),
  },
];

export const doctorDecisionVisit = (setFormData, formData) => [
  {
    input: (
      <SelectInput
        fieldName={CardDayData.DoctorDecision}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={formData[CardDayData.DoctorDecision]}
        setFormData={setFormData}
      />
    ),
  },
];

export const consentWithdrawalVisit = (setFormData, formData) => [
  {
    input: (
      <SelectInput
        fieldName={CardDayData.ConsentWithdrawal}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={formData[CardDayData.ConsentWithdrawal]}
        setFormData={setFormData}
      />
    ),
  },
];

export const protocolViolationVisit = (setFormData, formData) => [
  {
    input: (
      <SelectInput
        fieldName={CardDayData.ProtocolViolation}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={formData[CardDayData.ProtocolViolation]}
        setFormData={setFormData}
      />
    ),
  },
];

export const participantInclusionViolationVisit = (setFormData, formData) => [
  {
    input: (
      <SelectInput
        fieldName={CardDayData.ParticipantInclusionViolation}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.ParticipantInclusionViolation]
                }
        setFormData={setFormData}
      />
    ),
  },
];

export const medicationUseVisit = (setFormData, formData) => [
  {
    input: (
      <SelectInput
        fieldName={CardDayData.MedicationUse}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={formData[CardDayData.MedicationUse]}
        setFormData={setFormData}
      />
    ),
  },
];

export const hospitalizationRequiredVisit = (setFormData, formData) => [
  {
    input: (
      <SelectInput
        fieldName={CardDayData.HospitalizationRequired}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={formData[CardDayData.HospitalizationRequired]}
        setFormData={setFormData}
      />
    ),
  },
];

export const adverseEventVisit = (setFormData, formData) => [
  {
    input: (
      <SelectInput
        fieldName={CardDayData.AdverseEvent}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={formData[CardDayData.AdverseEvent]}
        setFormData={setFormData}
      />
    ),
  },
];

export const positiveAlcoholBreathTestVisit = (setFormData, formData) => [
  {
    input: (
      <SelectInput
        fieldName={CardDayData.PositiveAlcoholBreathTest}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={formData[CardDayData.PositiveAlcoholBreathTest]}
        setFormData={setFormData}
      />
    ),
  },
];

export const positiveCotinineUrineTestVisit = (setFormData, formData) => [
  {
    input: (
      <SelectInput
        fieldName={CardDayData.PositiveCotinineUrineTest}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={formData[CardDayData.PositiveCotinineUrineTest]}
        setFormData={setFormData}
      />
    ),
  },
];

export const positiveDrugUrineTestVisit = (setFormData, formData) => [
  {
    input: (
      <SelectInput
        fieldName={CardDayData.PositiveDrugUrineTest}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={formData[CardDayData.PositiveDrugUrineTest]}
        setFormData={setFormData}
      />
    ),
  },
];

export const dehydrationBeforePeriodsVisit = (setFormData, formData) => [
  {
    input: (
      <SelectInput
        fieldName={CardDayData.DehydrationBeforePeriods}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={formData[CardDayData.DehydrationBeforePeriods]}
        setFormData={setFormData}
      />
    ),
  },
];

export const vomitingOrDiarrheaAfterDoseVisit = (setFormData, formData) => [
  {
    input: (
      <SelectInput
        fieldName={CardDayData.VomitingOrDiarrheaAfterDose}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={formData[CardDayData.VomitingOrDiarrheaAfterDose]}
        setFormData={setFormData}
      />
    ),
  },
];

export const technicalBloodSamplingDifficultiesVisit = (
  setFormData,
  formData,
) => [
  {
    input: (
      <SelectInput
        fieldName={CardDayData.TechnicalBloodSamplingDifficulties}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={
                    formData[CardDayData.TechnicalBloodSamplingDifficulties]
                }
        setFormData={setFormData}
      />
    ),
  },
];

export const commentsVisit = (setFormData, formData) => [
  {
    inputTitle: 'Введите комментарий',
    input: (
      <Textarea
        fieldName={CardDayData.Comments}
        inputValue={formData[CardDayData.Comments]}
        setFormData={setFormData}
        width="1000px"
      />
    ),
  },
];

export const isContinueVisit = (setFormData, formData) => [
  {
    input: (
      <SelectInput
        fieldName={CardDayData.IsContinue}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={formData[CardDayData.IsContinue]}
        setFormData={setFormData}
      />
    ),
  },
];

export const isInvitedVisit = (setFormData, formData) => [
  {
    input: (
      <SelectInput
        fieldName={CardDayData.IsInvited}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={formData[CardDayData.IsInvited]}
        setFormData={setFormData}
      />
    ),
  },
];

export const doctorVisit = (setFormData, formData) => [
  {
    inputTitle: 'Введите фио',
    input: (
      <DefaultInput
        fieldName={CardDayData.Doctor}
        setFormData={setFormData}
        inputValue={formData[CardDayData.Doctor]}
        inputWidth="900px"
      />
    ),
  },
];
