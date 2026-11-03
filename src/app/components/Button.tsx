import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  className = '',
  children,
  ...rest
}: Readonly<ButtonProps>) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2';

  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 rounded-xl gap-1.5',
    md: 'text-sm px-4 py-2.5 rounded-2xl gap-2',
    lg: 'text-base px-6 py-3 rounded-2xl gap-2.5 font-semibold',
  }[size];

  const variantClasses = {
    primary:
      'bg-brand-coral text-white hover:bg-brand-coral-deep shadow-sm hover:shadow focus:ring-brand-coral',
    secondary:
      'bg-brand-yellow text-white hover:opacity-90 shadow-sm focus:ring-brand-yellow',
    outline:
      'border-2 border-stone-200 text-gray-800 bg-white hover:bg-stone-50 hover:border-brand-coral focus:ring-brand-coral',
    ghost:
      'text-gray-600 hover:text-brand-coral hover:bg-brand-coral/5 focus:ring-brand-coral',
    danger:
      'bg-red-600 text-white hover:bg-red-700 shadow-sm focus:ring-red-500',
  }[variant];

  return (
    <button
      type={type}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
