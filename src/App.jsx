import React, { useState } from 'react'; 
import LeftSidebar from './components/LeftSideBar';
import MainContentArea from './components/MainContentArea/ndex';
import Header from './components/Header';

function App() {
  const [documents, setDocuments] = useState([
    
  ]);

  const [conversations, setConversations] = useState([
    
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header /> 
      <main className="flex-grow flex">
        <LeftSidebar documents={documents} setDocuments={setDocuments} />
        <MainContentArea 
        conversations={conversations} 
        setConversations={setConversations}
        documents={documents}  />
      </main>
    </div>
  );
}

export default App;