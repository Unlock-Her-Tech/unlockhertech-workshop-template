import React, { useEffect } from 'react';
import { HiXMark } from 'react-icons/hi2';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  titleId?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Modal({
  isOpen,
  onClose,
  title,
  titleId = 'modal-dialog-title',
  children,
  maxWidth = 'md',
}: Readonly<ModalProps>) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  }[maxWidth];

  return (
    <dialog
      className="fixed inset-0 z-50 flex items-center justify-center bg-transparent border-none w-full h-full p-4 overflow-y-auto"
      open
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="fixed inset-0 bg-black/50 backdrop-blur-xs cursor-pointer border-none w-full h-full"
        onClick={onClose}
        aria-label="Close modal backdrop"
      />
      <div
        className={`relative z-10 bg-white rounded-3xl p-6 sm:p-8 w-full ${maxWidthClasses} shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200`}
      >
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-100">
          <h2 id={titleId} className="text-xl sm:text-2xl font-bold text-gray-900">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-700 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <HiXMark className="w-5 h-5" />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </dialog>
  );
}
