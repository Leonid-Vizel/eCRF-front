import { FC } from 'react';
import { Title } from 'shared/ui/Typography/Typography';
import { StationaryCardTabs } from 'features/stationaryCard/ui/StationaryCardTabs/StationaryCardTabs';
import { useAppSelector } from 'app/providers/StoreProvider';
import { getCardId } from 'features/stationaryCard';

interface StationaryCardPageProps {
  className?: string;
}

export const StationaryCardPage:FC<StationaryCardPageProps> = () => {
  const cardId = useAppSelector(getCardId);
  return (
    <>
      <Title>{`Стационарная карта №${cardId}`}</Title>
      <StationaryCardTabs />
    </>
  );
};
