import React from 'react';
import './blockInfo.scss';

interface IText {
  text: string
}

const BlockInfo = ({ text }: IText) => (
  <div className="main-block">
    <span>{text}</span>
  </div>
);

export default BlockInfo;
