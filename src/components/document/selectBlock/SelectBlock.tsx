import React, { ReactNode } from 'react';
import './selectBlock.scss';

type SelectBlockProps = {
  title: string;
  items: { input: ReactNode }[];
  isLongInput?: boolean;
};

const SelectBlock = ({ title, items, isLongInput }: SelectBlockProps) => (
  <div className="select-block">
    <div className={`select-block-title ${isLongInput ? 'long' : ''}`}>
      {title}
    </div>
    <div className="select-block-body">
      {items.map((item) => (
        <div
          className={`select-block-body-item ${
            isLongInput ? 'long-input' : ''
          }`}
        >
          {item.input}
        </div>
      ))}
    </div>
  </div>
);

export default SelectBlock;
