'use client';
import type React from 'react';
import { useState, useEffect } from 'react';
import { Spinner } from './Spinner';
import { PulsingDots } from './PulsingDots';
import { SkeletonLoader } from './SkeletonLoader';
import { ProgressBar } from './ProgressBar';

const colors = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
] as const;

export const LoaderShowcase: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-12 p-8">
      <div>
        <h2 className="text-lg font-semibold mb-4">Spinners</h2>
        <div className="grid grid-cols-3 gap-8">
          {colors.map((color) => (
            <div key={color} className="flex flex-col items-center space-y-2">
              <Spinner size="md" color={color} />
              <span className="text-sm capitalize">{color}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Pulsing Dots</h2>
        <div className="grid grid-cols-3 gap-8">
          {colors.map((color) => (
            <div key={color} className="flex flex-col items-center space-y-2">
              <PulsingDots color={color} />
              <span className="text-sm capitalize">{color}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Progress Bars</h2>
        <div className="space-y-4">
          {colors.map((color) => (
            <div key={color} className="space-y-2">
              <ProgressBar progress={progress} color={color} />
              <div className="flex justify-between text-sm">
                <span className="capitalize">{color}</span>
                <span>{progress}% Complete</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Skeleton Loaders</h2>
        <div className="grid grid-cols-2 gap-8">
          {colors.map((color) => (
            <div key={color} className="space-y-2">
              <SkeletonLoader color={color} />
              <span className="text-sm capitalize">{color}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
