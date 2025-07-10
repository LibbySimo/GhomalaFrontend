import React from 'react';

const AnswerCard = ({ conversation }) => {
  const { question, timestamp, answer, source, confidence } = conversation;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6 overflow-hidden">
      <div className="p-4 border-b border-gray-100 bg-gray-50">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-900">{question}</p>
            <p className="text-xs text-gray-500 mt-1">{timestamp}</p>
          </div>
          <div className="flex space-x-2">
            <button className="text-gray-400 hover:text-gray-600">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-edit-line"></i>
              </div>
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-more-2-fill"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div 
          className="prose prose-sm max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
        
        <div className="mt-5 pt-4 border-t border-gray-100">
          <div className="flex justify-between">
            <div>
              <div className="flex items-center">
                <span className="text-xs font-medium text-gray-700">Source:</span>
                <span className="ml-2 text-xs text-gray-500">{source}</span>
              </div>
              <div className="flex items-center mt-1">
                <span className="text-xs font-medium text-gray-700">Confidence:</span>
                <div className="ml-2 w-24 h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-green-500 rounded-full" 
                    style={{ width: `${confidence}%` }}
                  ></div>
                </div>
                <span className="ml-2 text-xs text-gray-500">High ({confidence}%)</span>
              </div>
            </div>
            <div className="flex space-x-2">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;