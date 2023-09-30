import { FC } from 'react';
import { Title } from 'shared/ui/Typography/Typography';
import { OutpatientCardTabs, getCardId } from 'features/outpatientCard';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';

interface OutpatientCardPageProps {
  className?: string;
}

export const OutpatientCardPage:FC<OutpatientCardPageProps> = () => {
  const cardId = useAppSelector(getCardId);
  return (
    <>
      <Title>{`Амбулаторная карта №${cardId}`}</Title>
      <OutpatientCardTabs />
    </>
  );
};
