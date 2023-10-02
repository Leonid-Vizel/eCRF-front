import { Form, Space } from 'antd';
import { Card } from 'shared/ui/Card/Card';
import chunk from 'lodash/chunk';
import { useForm } from 'antd/es/form/Form';
import React, { ReactNode, useCallback, useEffect } from 'react';
import { Title } from 'shared/ui/Typography/Typography';
import { RootState, useAppSelector } from 'app/providers/StoreProvider';
import { nanoid } from '@reduxjs/toolkit';
import { openErrorNotification } from 'shared/lib/notifications/notifications';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { FormConstructorModel } from '../../types/types';
import { FormLayout } from '../FormLayout/FormLayout';
import cls from './FormConstructor.module.scss';

interface FormConstructorProps {
  formCard: FormConstructorModel;
  onFinish: (values) => void;
  header?: ReactNode;
  footer?: ReactNode;
}

export const FormConstructor = (props:FormConstructorProps) => {
  const {
    formCard, onFinish, header, footer,
  } = props;
  const {
    rootEntityName, entityName, formEntityName, cards,
  } = formCard;

  const [form] = useForm();
  const formData = useAppSelector((state: RootState) => state?.[rootEntityName]?.[entityName]?.[formEntityName]);
  // todo порефакторить
  const editMode = useAppSelector((state: RootState) => state?.[rootEntityName]?.[entityName].tabPane.editMode);

  useEffect(() => {
    form.setFieldsValue(formData);
  }, [formData, form]);

  const onFinishFailed = useCallback((errorInfo:ValidateErrorEntity) => {
    const errors = errorInfo.errorFields.map((field) => field.errors).filter((error) => error[0]);

    const message = (
      <div className={cls.messageWrapper}>
        {errors.map((error, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={index}>{error}</span>
        )) }
      </div>
    );

    openErrorNotification(message);
  }, []);

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      initialValues={formData}
      disabled={!editMode}
      name={formEntityName}
      scrollToFirstError={{ behavior: 'smooth', block: 'center' }}
      onFinishFailed={onFinishFailed}
    >
      {header}
      <Space direction="vertical" style={{ display: 'flex' }}>
        {cards.map((card) => {
          const {
            fields, fieldsLayout, columnCount = 4, nestedFields, addRemoveButtons,
          } = card;
          const rows = fields ? chunk(fields, columnCount) : chunk(nestedFields, columnCount);
          const uniqueKey = nanoid();
          return (
            <Card key={uniqueKey}>
              <Title level={4}>
                {card.title}
              </Title>
              <FormLayout
                fieldsLayout={fieldsLayout}
                form={form}
                rows={rows}
                formListName={card.id}
                externalData={formData}
                addRemoveButtons={addRemoveButtons}
                columnCount={columnCount}
              />
            </Card>
          );
        })}
      </Space>
      <div className={cls.footerWrapper}>
        {footer}
      </div>
    </Form>
  );
};
