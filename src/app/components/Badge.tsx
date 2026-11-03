import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'coral' | 'yellow' | 'blue' | 'pink' | 'green' | 'neutral';
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

export function Badge({
  variant = 'coral',
  size = 'md',
  className = '',
  children,
  ...rest
}: Readonly<BadgeProps>) {
  const baseClasses =
    'inline-flex items-center font-medium rounded-full';

  const sizeClasses = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-xs px-3 py-1 font-semibold',
  }[size];

  const variantClasses = {
    coral: 'bg-brand-coral/10 text-brand-coral border border-brand-coral/20',
    yellow: 'bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20',
    blue: 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20',
    pink: 'bg-brand-pink/20 text-brand-coral-deep border border-brand-pink/30',
    green: 'bg-brand-green/15 text-green-800 border border-brand-green/30',
    neutral: 'bg-stone-100 text-stone-700 border border-stone-200',
  }[variant];

  return (
    <span
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}
