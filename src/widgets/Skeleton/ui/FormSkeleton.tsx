import { Skeleton } from 'antd';
import { FC } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import cls from './FormSkeleton.module.scss';

interface FormSkeletonProps {
  rowCount?: number
}

export const FormSkeleton:FC<FormSkeletonProps> = ({ rowCount = 5 }) => (
  <div className={cls.skeleton}>
    {
     [...Array(rowCount)].map(() => <Skeleton key={nanoid()} active />)
    }
  </div>
);
