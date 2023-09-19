import { FC } from 'react';
import { RootState, useAppSelector } from 'app/providers/StoreProvider/index';
import { Card } from 'shared/ui/Card/Card';
import { Link } from 'react-router-dom';
import cls from './UserCard.module.scss';

export interface UserCardConntentTypes {
  id: string
  contentTitle: string;
  // todo должна быть только стринга, исправить после рефакторинга стора
  description: (state: RootState) => string | number,
  pathTo?: string
}

interface UserCardProps {
  title: string
  cardContent: UserCardConntentTypes[]
  className?: string;
}

export const UserCard:FC<UserCardProps> = (props) => {
  const { className, title, cardContent } = props;
  const storeData = useAppSelector((state) => state);
  return (
    <Card
      className={`${cls.UserCard} ${className}`}
      size="small"
      title={title}
    //   extra={<a href="#">More</a>}
      style={{ width: 300 }}
    >
      {cardContent.map(({
        id, description, contentTitle, pathTo,
      }) => (
        <p key={id}>
          <span className={cls.userCardContentTitle}>{`${contentTitle}: `}</span>
          {pathTo ? <Link to={pathTo}>{description(storeData)}</Link> : <span>{description(storeData)}</span>}

        </p>
      ))}
    </Card>
  );
};
