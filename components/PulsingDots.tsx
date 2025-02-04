import type React from 'react';

type PulsingDotsProps = {
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
};

export const PulsingDots: React.FC<PulsingDotsProps> = ({
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
    <div className="flex space-x-2">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full animate-pulse ${colorClasses[color]}`}
          style={{ animationDelay: `${index * 0.15}s` }}
        ></div>
      ))}
    </div>
  );
};
