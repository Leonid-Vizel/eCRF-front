import { Skeleton as AntSkeleton, SkeletonProps as AntSkeletonProps } from 'antd';
import { FC } from 'react';

interface SkeletonProps extends AntSkeletonProps {}

export const Skeleton:FC<SkeletonProps> = (props) => <AntSkeleton {...props} />;
