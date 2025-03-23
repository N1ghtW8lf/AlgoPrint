import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'

// Toast component props
interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  onClose?: () => void;
}

// Toast component
export const Toast: React.FC<ToastProps> = ({ message, type, duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  const toastStyles = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
  };

  return (
    <div className={`fixed top-4 right-4 p-4 text-white rounded-md ${toastStyles[type]}`}>
      {message}
    </div>
  );
};

// Toast show utility function
type ToastType = 'success' | 'error' | 'info' | 'warning';

let toastCount = 0;

export const toastShow = (message: string, type: ToastType, duration?: number) => {
  const toastId = `toast-${toastCount++}`;
  const toastContainer = document.getElementById('toast-container');

  if (toastContainer) {
    const toastElement = document.createElement('div');
    toastElement.id = toastId;
    toastContainer.appendChild(toastElement);

    const removeToast = () => {
      const toastToRemove = document.getElementById(toastId);
      if (toastToRemove) {
        toastContainer.removeChild(toastToRemove);
      }
    };

    // Use createRoot instead of render
    const root = ReactDOM.createRoot(toastElement);
    root.render(
      <Toast
        message={message}
        type={type}
        duration={duration}
        onClose={removeToast}
      />
    );

    setTimeout(() => {
      removeToast();
    }, duration || 3000);
  }
};