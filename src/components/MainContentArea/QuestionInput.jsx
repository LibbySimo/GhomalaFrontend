import React, { useState } from 'react';
import Dropdown from '../common/Dropdown';

const QuestionInput = ({ 
  onAskQuestion, 
  isLoading,
  documents = [],
  selectedDocumentId,
  setSelectedDocumentId
}) => {
  const [question, setQuestion] = useState('');
  
  const languageOptions = [
    { id: 'en', label: 'English', selected: true },
    { id: 'fr', label: 'French', selected: false },
    { id: 'gh', label: 'Ghomala', selected: false }
  ];

  // Generate document options dynamically from props
  const documentOptions = [
    { id: 'all', label: 'All Documents', selected: selectedDocumentId === 'all' },
    ...documents.map(doc => ({
      id: doc.id,
      label: doc.name,
      selected: selectedDocumentId === doc.id,
      disabled: doc.status !== 'ready'
    }))
  ];

  const handleSubmit = () => {
    if (question.trim() === '') return;
    onAskQuestion(question.trim());
    setQuestion('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleDocumentSelect = (docId) => {
    setSelectedDocumentId(docId);
  };

  return (
    <div className="p-6 bg-white border-b border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-900">Ask a Question</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">Language:</span>
            <Dropdown 
              id="languageSelector"
              icon="ri-translate-2-line"
              options={languageOptions}
              onSelect={(id) => console.log("Selected language:", id)}
            />
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">Document:</span>
            <Dropdown 
              id="documentSelector"
              icon="ri-file-list-line"
              options={documentOptions}
              width="w-64"
              onSelect={handleDocumentSelect}
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <textarea 
          id="questionInput"
          rows="3"
          className="w-full border-none rounded-lg bg-gray-50 p-4 text-gray-900 focus:ring-2 focus:ring-primary/20 focus:outline-none resize-none"
          placeholder="Type your question about Ghomala historical documents..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          maxLength={500}
        ></textarea>
        <div className="absolute bottom-3 right-3 flex items-center space-x-3">
          <span className={`text-xs ${question.length > 450 ? (question.length > 500 ? 'text-red-500' : 'text-amber-500') : 'text-gray-500'}`}>
            {question.length}/500
          </span>
          <button 
            id="askButton"
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-button text-sm font-medium flex items-center whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
            onClick={handleSubmit}
            disabled={isLoading || question.trim() === '' || documents.length === 0}
          >
            <div className="w-5 h-5 flex items-center justify-center mr-2">
              {isLoading ? (
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <i className="ri-send-plane-line"></i>
              )}
            </div>
            {isLoading ? 'Processing...' : 'Ask Question'}
          </button>
        </div>
      </div>
      <div className="mt-3 flex items-center text-xs text-gray-500">
        <div className="w-4 h-4 flex items-center justify-center mr-1">
          <i className="ri-information-line"></i>
        </div>
        {documents.length === 0 ? (
          <span className="text-amber-500">Please upload at least one document before asking questions</span>
        ) : (
          <span>For best results, ask specific questions about Ghomala historical customs, traditions, or laws</span>
        )}
      </div>
    </div>
  );
};

export default QuestionInput;