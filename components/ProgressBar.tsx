import type React from 'react';

type ProgressBarProps = {
  progress: number;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color = 'primary',
}) => {
  const colorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-green-500',
    danger: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
  };

  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`h-full transition-all duration-300 ease-in-out ${colorClasses[color]}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
