
import React, { createContext, useState, ReactNode, useCallback } from 'react';

type ToastType = 'success' | 'error' | 'info';

interface ToastState {
  message: string;
  type: ToastType;
  isVisible: boolean;
}

interface ToastContextType {
  showToast: (message: string, type: ToastType) => void;
  hideToast: () => void;
  toast: ToastState;
}

export const ToastContext = createContext<ToastContextType>(null!);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<ToastState>({
    message: '',
    type: 'info',
    isVisible: false,
  });
  const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null);

  const hideToast = useCallback(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setToast((prev) => ({ ...prev, isVisible: false }));
  }, [timeoutId]);

  const showToast = useCallback((message: string, type: ToastType) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setToast({ message, type, isVisible: true });
    const newTimeoutId = setTimeout(() => {
      hideToast();
    }, 3000);
    setTimeoutId(newTimeoutId);
  }, [hideToast, timeoutId]);


  return (
    <ToastContext.Provider value={{ showToast, hideToast, toast }}>
      {children}
    </ToastContext.Provider>
  );
};
