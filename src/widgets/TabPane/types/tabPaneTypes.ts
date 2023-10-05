import { ButtonHTMLType } from 'antd/es/button';
import { RootState } from 'app/providers/StoreProvider';
import { ButtonProps } from 'shared/ui/Button/Button';

export interface TabPaneButtons extends ButtonProps {
  title?: string
  form?: string
  htmlType?: ButtonHTMLType
  id: string;
  name: string;
  icon: JSX.Element;
  onClick?: ()=> void;
  disabled?: boolean;
}

export interface TabPaneItems {
  label: string;
  key: string;
  children: React.ReactElement
  editMode?: (state: RootState) => boolean;
  itemDisabled?: boolean;
}

export interface TabPaneModel {
  onChange?: (key: string) => void
  entityName: string
  items: TabPaneItems[]
  buttons?: TabPaneButtons[];
}
