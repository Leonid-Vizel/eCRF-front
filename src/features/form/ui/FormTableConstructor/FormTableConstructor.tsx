import {
  FormInstance,
  Table,
} from 'antd';
import { FormField } from 'features/form/types/types';
import { Button } from 'shared/ui/Button/Button';
import { PlusOutlined } from '@ant-design/icons';
import { Field } from '../Field/Field';
import cls from './FormTableConstructor.module.scss';

interface FormTableConstructorProps {
  columns: FormField[]
  form: FormInstance<any>
  tableDataSource: any[]
  add: () => void
  remove?: (index: number | number[]) => void
  tableWithButton?: boolean
}

export const FormTableConstructor: React.FC<FormTableConstructorProps> = ({
  columns,
  form,
  tableDataSource,
  add,
  tableWithButton,
//   remove,
}) => {
  const addRow = () => {
    add();
  };
  //   const removeRow = (index) => {
  //     remove(index);
  //   };

  const renderFormColumns = columns.map((item) => {
    const {
      type, name, rules, id, title, dictionaryName, optionType, options, hidden,
    } = item;
    return ({
      dataIndex: id,
      title,
      render: (value, row, index) => (
        <Field
          form={form}
          name={[index, name]}
          type={type}
          dictionaryName={dictionaryName}
          optionType={optionType}
          options={options}
          rules={rules}
          hidden={hidden}
        />
      ),
    });
  });
  return (
    <div>
      {tableWithButton ? (
        <div className={cls.ButtonWrapper}>
          <Button type="text" onClick={addRow}><PlusOutlined /></Button>
        </div>
      ) : null}
      <Table
        rowKey="id"
        columns={renderFormColumns}
        dataSource={tableDataSource}
        pagination={false}
      />
    </div>
  );
};
