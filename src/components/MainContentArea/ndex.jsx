import React from 'react';
import QuestionInput from './QuestionInput';
import AnswerSection from './AnswerSection';

const MainContentArea = ({ conversations, setConversations }) => {
  const handleAskQuestion = (question) => {
    // In a real app, this would call an API and update the conversations state
    console.log("Question asked:", question);
    // Simulating adding a new conversation after API response
  };

  return (
    <div className="w-2/3 flex flex-col bg-gray-50">
      <QuestionInput onAskQuestion={handleAskQuestion} />
      <AnswerSection conversations={conversations} />
    </div>
  );
};

export default MainContentArea;