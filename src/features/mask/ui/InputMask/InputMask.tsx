import { FC } from 'react';
import ReactInputMask from 'react-input-mask';
import { Input } from 'shared/ui/Input';

interface InputMaskProps {
  mask: string | (string | RegExp)[]
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  className?: string
}

export const InputMask:FC<InputMaskProps> = (props) => {
  const { mask, onChange, className } = props;
  return (
    <ReactInputMask mask={mask} onChange={onChange}>
      <Input
        className={className}
      />
    </ReactInputMask>
  );
};
