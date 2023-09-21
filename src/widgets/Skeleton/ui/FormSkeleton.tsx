import { Skeleton } from 'antd';
import cls from './FormSkeleton.module.scss';

export const FormSkeleton = () => (
  <div className={cls.skeleton}>
    <Skeleton active />
    <Skeleton active />
    <Skeleton active />
    <Skeleton active />
    <Skeleton active />
  </div>
);
