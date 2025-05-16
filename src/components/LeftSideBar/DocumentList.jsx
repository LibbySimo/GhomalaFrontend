import React from 'react';
import DocumentItem from './DocumentItem';

const DocumentList = ({ documents }) => {
  return (
    <div className="flex-grow overflow-y-auto custom-scrollbar">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-medium text-gray-900">Uploaded Documents</h3>
          <span className="text-xs text-gray-500">{documents.length} documents</span>
        </div>
        
        {documents.map(document => (
          <DocumentItem key={document.id} document={document} />
        ))}
      </div>
    </div>
  );
};

export default DocumentList;