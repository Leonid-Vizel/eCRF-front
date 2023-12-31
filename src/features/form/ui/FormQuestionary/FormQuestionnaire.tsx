import { FC } from 'react';
import { FieldType } from 'features/form/types/types';
import {
  Col, Form, FormInstance, Row,
} from 'antd';
import { nanoid } from '@reduxjs/toolkit';
import { Paragraph } from 'shared/ui/Typography/Typography';
import cls from './FormQuestionnaire.module.scss';
import { Field } from '../Field/Field';

interface FormQuestionaryProps {
  form: FormInstance<any>;
  formListName: string;
  dataSource: unknown;
  rows: any;
  entities: {
    rootEntityName: string;
    entityName: string;
    formEntityName: string;
  }
  disabled: boolean
}

export const FormQuestionnaire: FC<FormQuestionaryProps> = (props) => {
  const {
    dataSource, rows, formListName, form, entities, disabled,
  } = props;

  return (
    <>
      {rows.map((row) => (
        <Form.List key={formListName} name={formListName}>
          {(listFields) => {
            const uniqueKey = nanoid();
            return (
              <div key={uniqueKey}>
                {listFields.map((listField) => {
                  const uniquelowKey = nanoid();
                  const testData = dataSource[formListName][listField.key];
                  return (
                    <Row key={uniquelowKey} gutter={8}>
                      {row.map((field) => {
                        const nestedFields = Object?.keys(testData[field.value]);
                        return (
                          <Col
                            className={cls.colWrapper}
                            style={{ gridTemplateColumns: `70% repeat(${nestedFields?.length}, auto)` }}
                          >
                            <Paragraph className={cls.colLabel}>{testData[field.label]}</Paragraph>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                              {nestedFields.map((key: FieldType) => {
                                const isDictionary = key.includes('dictionary');
                                const name = (isDictionary
                                && [listField.key, field.value, key, 'dictionaryValue'])
                                 || (key === 'select'
                                  && [listField.key, field.value, key, 'value'])
                                  || [listField.key, field.value, key];

                                return (
                                  <div className={cls.colItem}>
                                    <Field
                                      key={key}
                                      name={name}
                                      dictionaryName={testData[field.value][key]?.dictionaryName}
                                      form={form}
                                      type={key}
                                      entities={entities}
                                      formListName={formListName}
                                      confirmTitle={testData[field.label]}
                                      uploadAction={testData[field.value][key]?.uploadAction}
                                      uploadAccept={testData[field.value][key]?.uploadAccept}
                                      downloadAction={testData[field.value][key]?.downloadAction}
                                      fileLoaded={testData[field.value][key]?.fileLoaded}
                                      disabled={disabled}
                                      maxFileCount={testData[field.value][key]?.maxFileCount}
                                      options={testData[field.value][key]?.options}
                                      listAction={testData[field.value][key]?.listAction}
                                      deleteAction={testData[field.value][key]?.deleteAction}
                                    />
                                  </div>
                                );
                              })}
                            </div>
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
};
