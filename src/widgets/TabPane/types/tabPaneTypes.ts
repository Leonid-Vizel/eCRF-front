import { RootState } from 'app/providers/StoreProvider';

export interface TabPaneButtons {
  id: string;
  name: string;
  icon: JSX.Element;
  onClick: ()=> void;
  disabled?: boolean;
}

export interface TabPaneItems {
  label: string;
  key: string;
  children: React.ReactElement
  editMode?: (state: RootState) => boolean;
}

export interface TabPaneModel {
  entityName: string
  items: TabPaneItems[]
  buttons?: TabPaneButtons[];
}
