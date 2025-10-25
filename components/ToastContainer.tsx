
import React, { useContext } from 'react';
import { ToastContext } from '../context/ToastContext';
import Toast from './Toast';

const ToastContainer: React.FC = () => {
  const { toast, hideToast } = useContext(ToastContext);

  return (
    <div
      aria-live="assertive"
      className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-[100]"
    >
      <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
        {/* Animate enter/leave based on isVisible state */}
        <div 
          className="transition-all duration-300 ease-in-out"
          style={{ 
            transform: toast.isVisible ? 'translateY(0)' : 'translateY(-20px)', 
            opacity: toast.isVisible ? 1 : 0,
            visibility: toast.isVisible ? 'visible' : 'hidden',
          }}
        >
          <Toast message={toast.message} type={toast.type} onClose={hideToast} />
        </div>
      </div>
    </div>
  );
};

export default ToastContainer;
