import {
  FormInstance,
} from 'antd';
import { Button } from 'shared/ui/Button/Button';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Table } from 'shared/ui/Table/Table';
import { useCallback } from 'react';
import { Field } from '../Field/Field';
import cls from './FormTableConstructor.module.scss';

interface FormTableConstructorProps {
  columns: any
  form: FormInstance<any>
  tableDataSource: any[]
  add: () => void
  remove?: (index: number | number[]) => void
  addRemoveButtons?: boolean
}

export const FormTableConstructor: React.FC<FormTableConstructorProps> = ({
  columns,
  form,
  tableDataSource,
  addRemoveButtons,
  add,
  remove,
}) => {
  const addRow = () => {
    add();
  };
  const removeRow = useCallback((index) => {
    remove(index);
  }, []);

  const renderFormColumns = columns.map((item) => {
    const {
      type, name, rules, id, title, dictionaryName, optionType, options, hidden, columnButton, mask
    } = item;
    if (columnButton === 'remove') {
      return ({
        dataIndex: id,
        title,
        // todo: для строки таблицы нужен id с бэка
        render: (value, row, index) => (
          <Button
            key={`${index}`}
            icon={<DeleteOutlined />}
            onClick={() => removeRow(index)}
          />
        ),
      });
    }
    return ({
      dataIndex: id,
      title,
      // todo: для строки таблицы нужен id с бэка
      render: (value, row, index) => (
        <Field
          key={`${index}-${name}`}
          form={form}
          name={[index, name]}
          type={type}
          dictionaryName={dictionaryName}
          optionType={optionType}
          options={options}
          rules={rules}
          hidden={hidden}
          mask={mask}
        />
      ),
    });
  });
  return (
    <div>
      {addRemoveButtons
        && (
        <div className={cls.ButtonWrapper}>
          <Button type="text" onClick={addRow}><PlusOutlined /></Button>
        </div>
        )}
      <Table
        rowKey="id"
        columns={renderFormColumns}
        dataSource={tableDataSource}
        pagination={false}
      />
    </div>
  );
};
