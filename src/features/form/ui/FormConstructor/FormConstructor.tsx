import { Form, Space } from 'antd';
import { Card } from 'shared/ui/Card/Card';
import chunk from 'lodash/chunk';
import { useForm } from 'antd/es/form/Form';
import { ReactNode, useEffect } from 'react';
import { Title } from 'shared/ui/Typography/Typography';
import { RootState, useAppSelector } from 'app/providers/StoreProvider';
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

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      initialValues={formData}
      disabled={!editMode}
      name={formEntityName}
    >
      {header}
      <Space direction="vertical" style={{ display: 'flex' }}>
        {cards.map((card) => {
          const {
            fields, fieldsLayout, columnCount = 4, nestedFields,
          } = card;
          const rows = fields ? chunk(fields, columnCount) : chunk(nestedFields, columnCount);
          return (
            <Card key={card.key}>
              <Title level={4}>
                {card.title}
              </Title>
              <FormLayout
                fieldsLayout={fieldsLayout}
                form={form}
                rows={rows}
                formListName={card.id}
                externalData={formData}
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
