import React from 'react';
import '../documentDataInput.scss';

const DocumentDateInput = ({
  inputWidth, name, value, func, valueOfMonth, valueOfYear,
}) => {
  const monthNames = {
    Январь: 1,
    Февраль: 2,
    Март: 3,
    Апрель: 4,
    Май: 5,
    Июнь: 6,
    Июль: 7,
    Август: 8,
    Сентябрь: 9,
    Октябрь: 10,
    Ноябрь: 11,
    Декабрь: 12,
  };

  const handleInputChange = (e) => {
    let inputValue = e.target.value;

    // Удаление символов, которые не являются цифрами
    inputValue = inputValue.replace(/\D/g, '');

    // Проверка длины введенного значения
    if (inputValue.length > 2) {
      return;
    }

    // Проверка корректности числа даты
    const day = inputValue === '' ? '' : parseInt(inputValue, 10);

    // Проверка корректности числа дней в зависимости от месяца и года
    const month = monthNames[valueOfMonth] || 0;
    const year = parseInt(valueOfYear, 10);
    const daysInMonth = getDaysInMonth(month, year);

    if (day !== '' && (day < 1 || day > daysInMonth)) {
      return;
    }

    func({ target: { name, value: inputValue } });
  };

  const handleKeyPress = (e) => {
    const enteredKey = e.key;
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    if (!allowedKeys.includes(enteredKey) && enteredKey !== 'Backspace') {
      e.preventDefault();
    }
  };

  const getDaysInMonth = (month, year) => {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    const daysInMonth = {
      1: 31, // Январь
      2: isLeapYear ? 29 : 28, // Февраль
      3: 31, // Март
      4: 30, // Апрель
      5: 31, // Май
      6: 30, // Июнь
      7: 31, // Июль
      8: 31, // Август
      9: 30, // Сентябрь
      10: 31, // Октябрь
      11: 30, // Ноябрь
      12: 31, // Декабрь
    };

    return daysInMonth[month] || 0;
  };

  console.log(value);
  return (
    <input
      className="custom-data-input"
      style={{ width: `${inputWidth}px` }}
      type="text"
      name={name}
      value={value}
      onChange={handleInputChange}
      onKeyDown={handleKeyPress}
      disabled={!valueOfMonth || !valueOfYear}
      maxLength={2}
    />
  );
};

export default DocumentDateInput;
