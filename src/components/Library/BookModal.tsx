import React from 'react';
import '../../styles/library.scss'
import { ArrowBack } from '../ui/svgs';
interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function BookModal({ onClose, children }: ModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box">
        <div className='modal-content'>
          <button onClick={onClose} className="modal-close-button">
            <ArrowBack />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}