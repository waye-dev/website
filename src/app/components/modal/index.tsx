"use client";

import React, { useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  ariaLabel?: string;
  className?: string;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children, ariaLabel = "Dialog", className }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center' role='dialog' aria-modal='true' aria-label={ariaLabel}>
      <div className='absolute inset-0 bg-black/60' onClick={onClose} />

      <div
        className={`relative max-h-[90vh] w-[92vw] max-w-[900px] overflow-y-auto rounded-2xl border border-gray-custom-300 bg-white p-6 shadow-xl md:p-8 ${
          className ?? ""
        }`}
      >
        {/* Close button */}
        <button
          type='button'
          onClick={onClose}
          aria-label='Close'
          className='absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 focus:outline-none'
        >
          <span className='text-lg'>×</span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
