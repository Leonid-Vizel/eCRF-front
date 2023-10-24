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
}

export const FormQuestionnaire: FC<FormQuestionaryProps> = (props) => {
  const {
    dataSource, rows, formListName, form, entities,
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
                            {nestedFields.map((key: FieldType) => {
                              const isDictionary = key.includes('dictionary');
                              return (
                                <div className={cls.colItem}>
                                  <Field
                                    key={key}
                                    name={isDictionary
                                      ? [listField.key, field.value, key, 'dictionaryValue']
                                      : [listField.key, field.value, key]}
                                    dictionaryName={testData[field.value][key]?.dictionaryName}
                                    form={form}
                                    type={key}
                                    entities={entities}
                                    formListName={formListName}
                                    confirmTitle={testData[field.label]}
                                  />
                                </div>
                              );
                            })}
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
