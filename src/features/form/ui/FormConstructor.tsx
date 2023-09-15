import {
  Col, Form, Row, Space, Typography,
} from 'antd';
import { Card } from 'shared/ui/Card/Card';
import chunk from 'lodash/chunk';
import { useForm } from 'antd/es/form/Form';
import { ReactNode } from 'react';
import { FormCard } from '../types/types';
import { Field } from './Field';

const { Title } = Typography;

interface FormConstructorProps {
  cards:FormCard[]
  onFinish:(values)=>void
  colCount?:number
  header?:ReactNode
  footer?:ReactNode
}

export const FormConstructor = (props:FormConstructorProps) => {
  const {
    cards, onFinish, colCount = 4, header, footer,
  } = props;
  const [form] = useForm();

  return (
    <Form
      form={form}
      onFinish={onFinish}
    >
      {header}
      <Space direction="vertical" style={{ display: 'flex' }}>
        {cards.map((card) => {
          const { fields } = card;
          const rows = chunk(fields, colCount);

          return (
            <Card key={card.id}>
              <Title level={2}>
                {card.title}
              </Title>
              {rows.map((row) => (
                <Row key={row.toString()} gutter={8}>
                  {row.map((field) => {
                    const {
                      id, title, name, rules, type, dictionaryName, optionType, options,
                    } = field;
                    return (
                      <Col key={id}>
                        <Form.Item label={title} name={name} rules={rules}>
                          <Field
                            type={type}
                            form={form}
                            fieldName={name}
                            dictionaryName={dictionaryName}
                            optionType={optionType}
                            options={options}
                          />
                        </Form.Item>
                      </Col>
                    );
                  })}
                </Row>
              ))}
            </Card>
          );
        })}
      </Space>
      {footer}
    </Form>
  );
};
