import {
  FormInstance, Form, Row, Col,
} from 'antd';
import { FC } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Field } from '../Field/Field';
import { FormTableConstructor } from '../FormTableConstructor/FormTableConstructor';
import cls from './Formlayout.module.scss';
import { FormQuestionnaire } from '../FormQuestionary/FormQuestionnaire';

interface FormLayoutProps {
  form: FormInstance<unknown>
  // todo протипизировать
  rows: any
  fieldsLayout: string
  formListName: string
  externalData: unknown
  addRemoveButtons: boolean
  columnCount: number
}

export const FormLayout:FC<FormLayoutProps> = ({
  form, rows, fieldsLayout, formListName, externalData, addRemoveButtons = true, columnCount,
}) => {
  switch (fieldsLayout) {
    case 'questionnaire':
      return (
        <FormQuestionnaire formListName={formListName} form={form} rows={rows} dataSource={externalData} />
      );
    case 'table': {
      return (
        <Form.List name={formListName}>
          {(data, { add, remove }) => (
            <FormTableConstructor
              columns={rows[0]}
              form={form}
              tableDataSource={data}
              add={add}
              remove={remove}
              addRemoveButtons={addRemoveButtons}
            />
          )}
        </Form.List>
      );
    }
    default:
      return (
        <>
          {rows.map((row) => {
            const uniqueRowKey = nanoid();
            return (
              <Form.List key={uniqueRowKey} name={formListName}>
                {(listFields) => {
                  const uniqueListFieldsKey = nanoid();
                  return (
                    <div key={uniqueListFieldsKey}>
                      {listFields.map((listField) => {
                        const uniqueFieldKey = nanoid();
                        return (
                          <Row
                            key={uniqueFieldKey}
                            style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}
                            gutter={8}
                            className={cls.rowItem}
                          >
                            {row.map((field) => {
                              const {
                                id, title, name, rules, type, dictionaryName, optionType, options, hidden, columnStyle,
                              } = field;
                              return (
                                <Col style={columnStyle} key={id} className={cls.colItem}>
                                  <Field
                                    type={type}
                                    form={form}
                                    name={[listField.name, name]}
                                    title={title}
                                    dictionaryName={dictionaryName}
                                    optionType={optionType}
                                    options={options}
                                    rules={rules}
                                    hidden={hidden}
                                    mask={mask}
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
            );
          })}
        </>
      );
  }
};
