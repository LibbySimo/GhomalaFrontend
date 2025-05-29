import { useState } from 'react';
import axios from 'axios';

const API_URL =  'https://ghomalabackendv2-production.up.railway.app/api';

export const useDocumentQuery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendQuestion = async (question, filePath, selectedLanguage = 'en') => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${API_URL}/query`, {
        file_path: filePath,
        question: question,
        language: selectedLanguage // Optional parameter if you want to add language support
      });

      setIsLoading(false);
      return response.data;
    } catch (err) {
      setIsLoading(false);
      const errorMessage = err.response?.data?.error || 'Failed to process question';
      setError(errorMessage);
      throw err;
    }
  };

  const clearError = () => setError(null);

  return {
    sendQuestion,
    isLoading,
    error,
    clearError
  };
};