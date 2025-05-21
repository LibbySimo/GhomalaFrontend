import React from 'react';

const DocumentItem = ({ document }) => {
  const { name, date, size, status, progress } = document;
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-3 overflow-hidden hover:shadow-sm transition-shadow">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-600 rounded-lg">
              <i className="ri-file-pdf-line"></i>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900 line-clamp-1">{name}</h4>
              <p className="text-xs text-gray-500 mt-1">{date} • {size}</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${status === 'ready' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
              {status === 'ready' ? 'Ready' : 'Processing'}
            </span>
          </div>
        </div>

        {status === 'processing' ? (
          <div className="mt-3">
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">Extracting text and analyzing content ({progress}%)</p>
          </div>
        ) : (
          <div className="flex justify-between mt-3">
            <div className="flex space-x-2">
              <button className="text-xs text-gray-500 hover:text-primary flex items-center">
                <div className="w-4 h-4 flex items-center justify-center mr-1">
                  <i className="ri-eye-line"></i>
                </div>
                Preview
              </button>
              <button className="text-xs text-gray-500 hover:text-primary flex items-center">
                <div className="w-4 h-4 flex items-center justify-center mr-1">
                  <i className="ri-information-line"></i>
                </div>
                Details
              </button>
            </div>
            <button className="text-xs text-red-500 hover:text-red-600 flex items-center">
              <div className="w-4 h-4 flex items-center justify-center mr-1">
                <i className="ri-delete-bin-line"></i>
              </div>
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentItem;