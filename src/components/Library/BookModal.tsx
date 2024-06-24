import React from 'react';
import '../../styles/BookModal.scss'

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function BookModal({ onClose, children }: ModalProps) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">X</button>
        {children}
      </div>
    </div>
  );
}