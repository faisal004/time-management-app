"use client"
import * as React from 'react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number;
    max?: number;
    showPercentage?: boolean;
    indicatorClassName?: string;
    className?: string;
    tooltipText?: string; // New prop for custom tooltip text
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
    ({
        value,
        max = 100,
        showPercentage = false,
        className,
        indicatorClassName,
        tooltipText,
        ...props
    }, ref) => {
        const percentage = Math.min(100, Math.max(0, (value / max) * 100));
        const [showTooltip, setShowTooltip] = React.useState(false);

        return (
            <div className="space-y-1 w-full">
                {showPercentage && (
                    <div className="text-xs text-gray-500 text-right">
                        {Math.round(percentage)}%
                    </div>
                )}
                <div className="relative">
                    <div
                        ref={ref}
                        className={cn(
                            'h-2 w-full overflow-hidden rounded-full bg-gray-200',
                            className
                        )}
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                        {...props}
                    >
                        <div
                            className={cn(
                                'h-full transition-all duration-300 ease-in-out',
                                'bg-primary',
                                indicatorClassName || (percentage >= 100 ? 'bg-green-500' : 'bg-blue-500'),
                                {
                                    'rounded-r-none': percentage < 100,
                                    'rounded-full': percentage >= 100
                                }
                            )}
                            style={{ width: `${percentage}%` }}
                        />
                    </div>
                    {showTooltip && (
                        <div className="absolute -top-8 right-0 bg-white text-black text-xs px-2 py-1 rounded shadow border border-gray-50">
                            {tooltipText || `${value} of ${max} (${Math.round(percentage)}%)`}
                            <div className="absolute -bottom-1 right-1/2 w-2 h-2 bg-white transform rotate-45 border border-gray-50"></div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
);

Progress.displayName = 'Progress';

export { Progress };