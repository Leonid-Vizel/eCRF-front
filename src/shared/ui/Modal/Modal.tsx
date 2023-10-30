/* eslint-disable react/jsx-props-no-spreading */
import { Modal as AntModal, ModalProps as AntModalProps } from 'antd';
import { FC } from 'react';

interface ModalProps extends AntModalProps {}

export const Modal:FC<ModalProps> = ({ children, ...props }) => (
  <AntModal {...props}>
    {children}
  </AntModal>
);
