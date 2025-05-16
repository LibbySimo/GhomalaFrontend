import React from 'react';
import AnswerCard from './AnswerCard';

const AnswerSection = ({ conversations }) => {
  const handleClearHistory = () => {
    // Handle clearing history
  };

  const handleExport = () => {
    // Handle exporting conversations
  };

  return (
    <div className="flex-grow p-6 overflow-y-auto custom-scrollbar">
      <div className="mb-4 flex justify-between items-center">
        <h3 className="text-sm font-medium text-gray-700">Conversation History</h3>
        <div className="flex space-x-2">
          <button 
            className="text-xs text-gray-500 hover:text-primary flex items-center"
            onClick={handleClearHistory}
          >
            <div className="w-4 h-4 flex items-center justify-center mr-1">
              <i className="ri-delete-bin-line"></i>
            </div>
            Clear History
          </button>
          <button 
            className="text-xs text-gray-500 hover:text-primary flex items-center"
            onClick={handleExport}
          >
            <div className="w-4 h-4 flex items-center justify-center mr-1">
              <i className="ri-download-line"></i>
            </div>
            Export
          </button>
        </div>
      </div>

      {conversations.map(conversation => (
        <AnswerCard key={conversation.id} conversation={conversation} />
      ))}
    </div>
  );
};

export default AnswerSection;