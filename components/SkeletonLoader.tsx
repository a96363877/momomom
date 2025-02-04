import type React from 'react';

type SkeletonLoaderProps = {
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
};

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  color = 'primary',
}) => {
  const colorClasses = {
    primary: 'bg-primary/30',
    secondary: 'bg-secondary/30',
    success: 'bg-green-500/30',
    danger: 'bg-red-500/30',
    warning: 'bg-yellow-500/30',
    info: 'bg-blue-500/30',
  };

  return (
    <div className="space-y-4 w-full max-w-sm">
      <div className={`h-4 rounded animate-pulse ${colorClasses[color]}`}></div>
      <div
        className={`h-4 rounded animate-pulse w-5/6 ${colorClasses[color]}`}
      ></div>
      <div className={`h-4 rounded animate-pulse ${colorClasses[color]}`}></div>
      <div
        className={`h-4 rounded animate-pulse w-4/6 ${colorClasses[color]}`}
      ></div>
    </div>
  );
};
