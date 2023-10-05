import { Title } from 'shared/ui/Typography/Typography';
import { OutpatientCardsListTabs } from 'features/outpatientCardsList';
import cls from './OutpatientCardsPage.module.scss';

const OutpatientCardsPage = () => (
  <div className={cls.Documents}>
    <Title className={cls.title} level={1}>Медицинские карты</Title>
    <OutpatientCardsListTabs />
  </div>

);
export default OutpatientCardsPage;
