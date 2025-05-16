import React, { useEffect } from 'react';

const Notification = ({ type, title, message, onClose, autoClose = true, autoCloseTime = 5000 }) => {
  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseTime);
      
      return () => clearTimeout(timer);
    }
  }, [autoClose, autoCloseTime, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <div className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full mr-3">
            <i className="ri-check-line"></i>
          </div>
        );
      case 'error':
        return (
          <div className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-600 rounded-full mr-3">
            <i className="ri-error-warning-line"></i>
          </div>
        );
      case 'upload':
      case 'info':
      default:
        return (
          <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-3">
            <i className={type === 'upload' ? 'ri-file-upload-line' : 'ri-information-line'}></i>
          </div>
        );
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 flex items-start max-w-sm border border-gray-200 z-50 animate-fade-in">
      {getIcon()}
      <div className="flex-1">
        <h4 className="text-sm font-medium text-gray-900">{title}</h4>
        <p className="text-xs text-gray-500 mt-1">{message}</p>
      </div>
      <button className="ml-3 text-gray-400 hover:text-gray-600" onClick={onClose}>
        <div className="w-5 h-5 flex items-center justify-center">
          <i className="ri-close-line"></i>
        </div>
      </button>
    </div>
  );
};

export default Notification;