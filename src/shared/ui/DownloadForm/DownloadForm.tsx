import { Button } from 'shared/ui/Button';

interface DownloadFormProps {
  action:string
  inputValue: string
  title:string
}

export const DownloadForm = ({ action, inputValue, title }:DownloadFormProps) => (
  <form
    action={action}
    method="POST"
  >
    <input
      type="hidden"
      name="Token"
      value={inputValue}
    />
    <Button htmlType="submit" type="primary">{title}</Button>
  </form>
);
