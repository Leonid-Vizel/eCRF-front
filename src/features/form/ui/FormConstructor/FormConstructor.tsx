import { Form, Modal, Space } from 'antd';
import { Card } from 'shared/ui/Card/Card';
import chunk from 'lodash/chunk';
import { useForm } from 'antd/es/form/Form';
import React, {
  ReactNode, useCallback, useEffect, useState,
} from 'react';
import { Title } from 'shared/ui/Typography/Typography';
import { RootState, useAppSelector } from 'app/providers/StoreProvider';
import { nanoid } from '@reduxjs/toolkit';
import { openErrorNotification } from 'shared/lib/notifications/notifications';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import get from 'lodash/get';
import { FormConstructorModel } from '../../types/types';
import { FormLayout } from '../FormLayout/FormLayout';
import cls from './FormConstructor.module.scss';

const { confirm } = Modal;

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
    rootEntityName, entityName, formEntityName, cards, disabledCondition,
  } = formCard;

  const [form] = useForm();
  const formData = useAppSelector((state: RootState) => state?.[rootEntityName]?.[entityName]?.[formEntityName]);
  // todo порефакторить
  const editMode = useAppSelector((state: RootState) => state?.[rootEntityName]?.[entityName].tabPane.editMode);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    form.setFieldsValue(formData);
    if (disabledCondition) {
      setDisabled(get(formData, disabledCondition.name) === disabledCondition.value);
    }
  }, [formData, form]);

  const onFinishFailed = useCallback((errorInfo:ValidateErrorEntity) => {
    const errors = [].concat(...errorInfo.errorFields.map((field) => field.errors).filter((error) => error[0]));
    const filtredErrors = errors.filter((message) => message.includes('Пожалуйста, введите')).length
      ? errors.filter((message) => message.includes('Пожалуйста, введите'))
      : [...new Set(errors.filter((message) => !message.includes('Пожалуйста, введите')))];

    const message = (
      <div className={cls.messageWrapper}>
        {filtredErrors.map((error) => {
          const uniqueKey = nanoid();
          return (
            <span key={uniqueKey}>{error}</span>
          );
        }) }
      </div>
    );

    if (filtredErrors[0].includes('Пожалуйста, введите')) {
      openErrorNotification(message);
    } else {
      confirm({
        title: 'Не заполнены следующие поля. Вы уверены, что хотите продолжить?',
        content: message,
        onOk() {
          onFinish(form.getFieldsValue());
        },
        className: cls.modal,
      });
    }
  }, []);

  return (

    <Form
      onValuesChange={(values) => {
        if (disabledCondition && get(values, disabledCondition.name) !== undefined) {
          setDisabled(get(values, disabledCondition.name) === disabledCondition.value);
        }
      }}
      id={formEntityName}
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
            fields, fieldsLayout, columnCount = 4, nestedFields, addRemoveButtons, isDisabledCondition,
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
                entities={{
                  rootEntityName,
                  entityName,
                  formEntityName,
                }}
                disabled={(disabled && isDisabledCondition) || !editMode}
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
