import React, { useState } from 'react';
import QuestionInput from './QuestionInput';
import AnswerSection from './AnswerSection';
import { useDocumentQuery } from '../../hooks/useDocumentQuery';
import Notification from '../common/Notification';

const MainContentArea = ({ conversations = [], setConversations, documents = [] }) => {
  const [selectedDocumentId, setSelectedDocumentId] = useState(documents.length > 0 ? 'all' : null);
  const [notification, setNotification] = useState(null);
  const { sendQuestion, isLoading, error } = useDocumentQuery();

  // If there's an error, show it in a notification
  React.useEffect(() => {
    if (error) {
      setNotification({
        type: 'error',
        title: 'Error',
        message: error,
        autoClose: true
      });
    }
  }, [error]);

  const handleAskQuestion = async (question, selectedDocId = selectedDocumentId) => {
    // Don't proceed if no documents are available
    if (documents.length === 0) {
      setNotification({
        type: 'error',
        title: 'No Documents Available',
        message: 'Please upload at least one document before asking questions.',
        autoClose: true
      });
      return;
    }

    try {
      // Create an array of documents to query
      let documentsToQuery = [];
      
      if (selectedDocId === 'all') {
        // Use all documents with "ready" status
        documentsToQuery = documents.filter(doc => doc.status === 'ready');
      } else {
        // Use the selected document
        const selectedDoc = documents.find(doc => doc.id === selectedDocId);
        if (selectedDoc && selectedDoc.status === 'ready') {
          documentsToQuery.push(selectedDoc);
        } else {
          throw new Error('Selected document is not ready for querying');
        }
      }

      if (documentsToQuery.length === 0) {
        throw new Error('No ready documents available for querying');
      }

      // For this example, we'll use the first document's file path
      // In a real app, you might want to query multiple documents and combine results
      const response = await sendQuestion(question, documentsToQuery[0].filePath);
      
      // Add the new conversation with the API response
      const newConversation = {
        id: Date.now(),
        question,
        timestamp: new Date().toLocaleString(),
        answer: response.answer,
        source: documentsToQuery.length === 1 
          ? `${documentsToQuery[0].name}`
          : `Multiple documents (${documentsToQuery.length})`,
        confidence: 90, // You might get this from the API in the future
        relevantSections: response.relevant_sections
      };
      
      setConversations(prev => [newConversation, ...prev]);
      
      // Show success notification
      setNotification({
        type: 'success',
        title: 'Question Answered',
        message: 'Your question has been processed successfully.',
        autoClose: true
      });
      
    } catch (err) {
      console.error('Error asking question:', err);
      setNotification({
        type: 'error',
        title: 'Question Processing Failed',
        message: err.message || 'Failed to process your question. Please try again.',
        autoClose: true
      });
    }
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <div className="w-2/3 flex flex-col bg-gray-50">
      <QuestionInput 
        onAskQuestion={handleAskQuestion} 
        isLoading={isLoading}
        documents={documents}
        selectedDocumentId={selectedDocumentId}
        setSelectedDocumentId={setSelectedDocumentId}
      />
      <AnswerSection conversations={conversations} />
      
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

export default MainContentArea;