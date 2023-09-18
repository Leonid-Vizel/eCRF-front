import {
  FormInstance, Form, Row, Col,
} from 'antd';
import { FC } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Field } from '../Field';
import { FormTableConstructor } from '../FormTableConstructor/FormTableConstructor';

interface FormLayoutProps {
  form: FormInstance<any>
  rows: any
  fieldsLayout: string
  formListName: string
}

export const FormLayout:FC<FormLayoutProps> = ({
  form, rows, fieldsLayout, formListName,
}) => {
  console.log(rows);
  switch (fieldsLayout) {
    case 'table':
      return (
        <Form.List name={formListName}>
          {(data, { add, remove }) => (
            <FormTableConstructor
              columns={rows[0]}
              form={form}
              tableDataSource={data}
              add={add}
              remove={remove}
            />
          )}
        </Form.List>
      );
    default:
      return (
        <>
          {rows.map((row) => (
            <Form.List key={row.toString()} name={formListName}>
              {(listFields) => {
                const uniqueKey = nanoid();
                return (
                  <div key={uniqueKey}>
                    {listFields.map((listField) => {
                      const uniquelowKey = nanoid();
                      return (
                        <Row key={uniquelowKey} gutter={8}>
                          {row.map((field) => {
                            const {
                              id, title, name, rules, type, dictionaryName, optionType, options, initialValue,
                            } = field;
                            return (
                              <Col key={id}>
                                <Field
                                  type={type}
                                  form={form}
                                  name={[listField.name, name]}
                                  title={title}
                                  dictionaryName={dictionaryName}
                                  optionType={optionType}
                                  options={options}
                                  rules={rules}
                                  initialValue={initialValue}
                                />
                              </Col>
                            );
                          })}
                        </Row>
                      );
                    })}
                  </div>
                );
              }}
            </Form.List>
          ))}
        </>
      );
  }
};
