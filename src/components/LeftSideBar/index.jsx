import React from 'react';
import UploadSection from './UploadSection';
import DocumentList from './DocumentList';

const LeftSidebar = ({ documents, setDocuments }) => {
     const [documents, setDocuments] = useState([]);

  const handleDocumentUploaded = (newDocument) => {
    // Add the new document to the list
    setDocuments([newDocument, ...documents]);
  };

  return (
    <div className="w-1/3 bg-white border-r border-gray-200 overflow-hidden flex flex-col">
      <UploadSection onDocumentUploaded={handleDocumentUploaded} />
      <DocumentList documents={documents} />
    </div>
  );
};

export default LeftSidebar;