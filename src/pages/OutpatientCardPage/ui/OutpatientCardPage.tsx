import { FC } from 'react';
import { Title } from 'shared/ui/Typography/Typography';
import { OutpatientCardTabs } from 'features/outpatientCard';

interface OutpatientCardPageProps {
  className?: string;
}

export const OutpatientCardPage:FC<OutpatientCardPageProps> = () => (
  <>
    <Title>Амбулаторная карта</Title>
    <OutpatientCardTabs />
  </>
);
