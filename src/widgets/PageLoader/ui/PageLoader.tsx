import { FC } from 'react';
import { Spinner } from 'shared/ui/Spinner';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
}

export const PageLoader: FC<PageLoaderProps> = () => (
  <div className={cls.PageLoader}>
    <Spinner />
  </div>
);
