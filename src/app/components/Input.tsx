import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  hideLabel?: boolean;
  error?: string;
  helperText?: string;
}

export function Input({
  id,
  label,
  hideLabel = false,
  error,
  helperText,
  className = '',
  ...rest
}: Readonly<InputProps>) {
  return (
    <div className="w-full space-y-1.5">
      <label
        htmlFor={id}
        className={`block text-xs font-semibold text-gray-700 ${hideLabel ? 'sr-only' : ''}`}
      >
        {label}
      </label>
      <input
        id={id}
        className={`w-full px-4 py-2.5 rounded-2xl bg-white border text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all ${
          error
            ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
            : 'border-stone-200 focus:border-brand-coral focus:ring-brand-coral/20'
        } ${className}`}
        {...rest}
      />
      {error && <p className="text-xs text-red-600 font-medium">{error}</p>}
      {!error && helperText && (
        <p className="text-xs text-stone-500">{helperText}</p>
      )}
    </div>
  );
}
