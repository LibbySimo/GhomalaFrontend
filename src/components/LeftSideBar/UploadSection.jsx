import React, { useState, useRef } from 'react';
import { useFileUpload } from '../../hooks/useFileUpload';
import Notification from '../common/Notification';

const UploadSection = ({ onDocumentUploaded }) => {
  const fileInputRef = useRef(null);
  const [isAdvancedSettingsEnabled, setIsAdvancedSettingsEnabled] = useState(true);
  const [contextSensitivity, setContextSensitivity] = useState(3);
  const [notification, setNotification] = useState(null);

 // In UploadSection.jsx, update the handleUploadSuccess function:

const handleUploadSuccess = (data, file) => {
  // Show success notification
  setNotification({
    type: 'success',
    title: 'Document Uploaded',
    message: 'Your document has been successfully uploaded and processed.',
    autoClose: true
  });
  
  // Notify parent component about the new document
  if (onDocumentUploaded) {
    onDocumentUploaded({
      id: data.document_id,
      name: file.name,
      date: new Date().toLocaleDateString(),
      size: formatFileSize(file.size),
      status: 'ready',
      textPreview: data.extracted_text,
      filePath: data.file_path  // Make sure this matches what the backend returns
    });
  }
};
  
  const handleUploadError = (errorMessage) => {
    setNotification({
      type: 'error',
      title: 'Upload Failed',
      message: errorMessage,
      autoClose: true
    });
  };

  const { 
    handleDragOver, 
    handleDragLeave, 
    handleDrop, 
    handleFileChange, 
    isDragActive,
    isUploading, 
    uploadProgress 
  } = useFileUpload(fileInputRef, handleUploadSuccess, handleUploadError);

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <div className="p-6 border-b border-gray-200">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Document Management</h2>
      <div 
        className={`custom-file-upload border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer transition-all ${isDragActive ? 'file-drop-active' : ''} ${isUploading ? 'pointer-events-none opacity-60' : ''}`}
        onClick={() => !isUploading && fileInputRef.current.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {isUploading ? (
          <>
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-primary/10 text-primary rounded-full">
              <i className="ri-loader-4-line animate-spin"></i>
            </div>
            <p className="text-sm font-medium text-gray-900 mb-1">Uploading Document...</p>
            <div className="w-3/4 mx-auto bg-gray-200 rounded-full h-1.5 mb-3">
              <div 
                className="bg-primary h-1.5 rounded-full transition-all duration-300" 
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500">{uploadProgress < 90 
              ? 'Uploading file...' 
              : 'Processing document...'}</p>
          </>
        ) : (
          <>
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-primary/10 text-primary rounded-full">
              <i className="ri-upload-cloud-line ri-xl"></i>
            </div>
            <p className="text-sm font-medium text-gray-900 mb-1">Upload Ghomala Document</p>
            <p className="text-xs text-gray-500 mb-3">Drag and drop or click to browse</p>
            <p className="text-xs text-gray-500">Supported formats: PDF</p>
          </>
        )}
        <input 
          type="file" 
          ref={fileInputRef}
          className="hidden" 
          accept=".pdf"
          onChange={handleFileChange}
          disabled={isUploading}
        />
      </div>

      {/* <div className="mt-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Processing Settings</span>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={isAdvancedSettingsEnabled}
              onChange={() => setIsAdvancedSettingsEnabled(!isAdvancedSettingsEnabled)}
            />
            <span className="slider"></span>
          </label>
        </div>
        {isAdvancedSettingsEnabled && (
          <div className="mt-3">
            <label className="block text-xs text-gray-500 mb-1">Context Sensitivity</label>
            <input 
              type="range" 
              min="1" 
              max="5" 
              value={contextSensitivity} 
              onChange={(e) => setContextSensitivity(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-full appearance-none"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Narrow</span>
              <span>Balanced</span>
              <span>Broad</span>
            </div>
          </div>
        )}
      </div> */}

      {notification && (
        <Notification 
          type={notification.type}
          title={notification.title}
          message={notification.message}
          onClose={closeNotification}
          autoClose={notification.autoClose}
        />
      )}
    </div>
  );
};

export default UploadSection;