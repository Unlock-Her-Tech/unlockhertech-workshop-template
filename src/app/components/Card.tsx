import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean;
}

export function Card({
  interactive = false,
  className = '',
  children,
  ...rest
}: Readonly<CardProps>) {
  const baseClasses =
    'bg-white rounded-3xl border border-stone-200/80 p-6 shadow-xs';
  const interactiveClasses = interactive
    ? 'transition-all duration-200 hover:shadow-md hover:border-brand-coral/30'
    : '';

  return (
    <div
      className={`${baseClasses} ${interactiveClasses} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
