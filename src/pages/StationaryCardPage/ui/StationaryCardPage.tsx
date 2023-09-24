import { FC } from 'react';
import { Title } from 'shared/ui/Typography/Typography';
import { StationaryCardTabs } from 'features/stationaryCard/ui/StationaryCardTabs/StationaryCardTabs';

interface StationaryCardPageProps {
  className?: string;
}

export const StationaryCardPage:FC<StationaryCardPageProps> = () => (
  <>
    <Title>Стационарная карта</Title>
    <StationaryCardTabs />
  </>
);
