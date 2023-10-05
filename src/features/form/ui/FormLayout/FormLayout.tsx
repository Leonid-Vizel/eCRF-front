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
  entities: {
    rootEntityName: string;
    entityName: string;
    formEntityName: string;
  }
}

const FormRow = (props:any) => {
  const {
    rows, formListName, columnCount, form, entities,
  } = props;
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
                            id,
                            title,
                            name,
                            rules,
                            type,
                            dictionaryName,
                            optionType,
                            options,
                            hidden,
                            columnStyle,
                            mask,
                            inputNumberProps,
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
                                inputNumberProps={inputNumberProps}
                                entities={entities}
                                formListName={formListName}
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
};

export const FormLayout:FC<FormLayoutProps> = ({
  form, rows, fieldsLayout, formListName, externalData, addRemoveButtons = true, columnCount, entities,
}) => {
  switch (fieldsLayout) {
    case 'questionnaire':
      return (
        <FormQuestionnaire entities={entities} formListName={formListName} form={form} rows={rows} dataSource={externalData} />
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
              entities={entities}
              formListName={formListName}
            />
          )}
        </Form.List>
      );
    }
    default:
      return <FormRow rows={rows} formListName={formListName} columnCount={columnCount} form={form} entities={entities} />;
  }
};
