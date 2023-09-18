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
}

export const FormTableConstructor: React.FC<FormTableConstructorProps> = ({
  columns,
  form,
  tableDataSource,
  add,
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
      type, name, rules, id, title, dictionaryName, optionType, options,
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
        />
      ),
    });
  });
  return (
    <div>
      <div className={cls.ButtonWrapper}>
        <Button type="text" onClick={addRow}><PlusOutlined /></Button>
      </div>
      <Table
        rowKey="id"
        columns={renderFormColumns}
        dataSource={tableDataSource}
        pagination={false}
      />
    </div>
  );
};
