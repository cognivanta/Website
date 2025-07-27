import React from 'react';
export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-gray-800 rounded-2xl p-8 relative max-w-lg w-full">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">×</button>
        {children}
      </div>
    </div>
  );
}