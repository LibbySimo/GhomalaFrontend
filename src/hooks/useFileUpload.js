import { useState } from 'react';
import axios from 'axios';

export const useFileUpload = (fileInputRef, onUploadSuccess, onUploadError) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragActive(false);
    
    if (e.dataTransfer.files.length) {
      uploadFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files.length) {
      uploadFile(e.target.files[0]);
    }
  };

  const uploadFile = async (file) => {
    // Check file type (PDF only)
    if (!file.type.includes('pdf')) {
      onUploadError('Only PDF files are allowed');
      return;
    }
    
    setIsUploading(true);
    setUploadProgress(0);
    
    // Create form data to send to server
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      // Make the API request
      const response = await axios.post(' http://127.0.0.1:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 90) / progressEvent.total
          );
          setUploadProgress(percentCompleted); // Up to 90%, last 10% for processing
        }
      });
      
      // Handle success
      if (response.status === 201) {
        setUploadProgress(100);
        setTimeout(() => {
          setIsUploading(false);
          onUploadSuccess(response.data);
        }, 1000);
      }
    } catch (error) {
      // Handle error
      setIsUploading(false);
      const errorMessage = error.response?.data?.error || 'Failed to upload document';
      onUploadError(errorMessage);
    }
  };

  return {
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileChange,
    isDragActive,
    isUploading,
    uploadProgress
  };
};