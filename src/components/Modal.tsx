import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-6xl max-h-[95vh] overflow-hidden rounded-2xl bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 bg-gradient-to-r from-[#00847e] to-[#00847e]/80 px-6 py-4">
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-white hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          
          {/* Content */}
          <div className="max-h-[calc(95vh-120px)] overflow-y-auto p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal; 