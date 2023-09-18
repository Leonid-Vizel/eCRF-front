import { Form, Space } from 'antd';
import { Card } from 'shared/ui/Card/Card';
import chunk from 'lodash/chunk';
import { useForm } from 'antd/es/form/Form';
import { ReactNode } from 'react';
import { Title } from 'shared/ui/Typography/Typography';
import { useAppSelector } from 'app/providers/StoreProvider';
import { FormConstructorModel } from '../types/types';
import { FormLayout } from './FormLayout/FormLayout';

interface FormConstructorProps {
  formCard: FormConstructorModel
  onFinish: (values)=>void
  header?:ReactNode
  footer?:ReactNode
}

export const FormConstructor = (props:FormConstructorProps) => {
  const {
    formCard, onFinish, header, footer,
  } = props;
  const { entityName, formEntityName, cards } = formCard;

  const [form] = useForm();
  const tableData = useAppSelector((state) => state?.[entityName]?.[formEntityName]);

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      initialValues={tableData}
    >
      {header}
      <Space direction="vertical" style={{ display: 'flex' }}>
        {cards.map((card) => {
          const { fields, fieldsLayout, columnCount = 5 } = card;
          const rows = chunk(fields, columnCount);
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
              />
            </Card>
          );
        })}
      </Space>
      {footer}
    </Form>
  );
};
