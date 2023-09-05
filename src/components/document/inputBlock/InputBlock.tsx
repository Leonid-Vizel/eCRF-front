import { InputBlockItem } from '../../../utils/types/shared';
import './inputBlock.scss';

type InputBlockProps = {
  title: string;
  items?: InputBlockItem[];
};

const InputBlock = ({ title, items }: InputBlockProps) => (
  <div className="input-block">
    <div className="input-block-title">{title}</div>
    {items && (
    <div className="input-block-body">
      {items.map((item) => (
        <div className="input-block-body-item">
          <div className="input-block-body-item-title">
            {item.inputTitle}
          </div>
          {item.input}
        </div>
      ))}
    </div>
    )}
  </div>
);

export default InputBlock;
