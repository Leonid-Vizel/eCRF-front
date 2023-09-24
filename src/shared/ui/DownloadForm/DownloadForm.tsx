import { Button } from 'shared/ui/Button';
import { ButtonProps } from '../Button/Button';

interface DownloadFormProps extends ButtonProps {
  action:string;
  inputValue?: string;
}

export const DownloadForm = ({
  action, inputValue, title, type = 'text', icon, size,
}:DownloadFormProps) => (
  <form
    action={action}
    method="POST"
  >
    <input
      type="hidden"
      name="Token"
      value={inputValue}
    />
    <Button size={size} icon={icon} htmlType="submit" type={type}>{title}</Button>
  </form>
);
