import { StationaryCardsTable } from 'features/stationaryCardsList';
import cls from './StationaryCardsPage.module.scss';

export const StationaryCardsPage = () => (
  <div className={cls.wrapper}>
    <StationaryCardsTable />
  </div>
);
