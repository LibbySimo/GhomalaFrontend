import React, { useState } from 'react';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import MainContentArea from './components/MainContentArea';

function App() {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: 'Traditional Ghomala Marriage Customs.pdf',
      date: 'May 15, 2025',
      size: '2.4 MB',
      status: 'ready'
    },
    {
      id: 2,
      name: 'Ghomala Folklore Collection Vol. 1.pdf',
      date: 'May 12, 2025',
      size: '5.7 MB',
      status: 'ready'
    },
    {
      id: 3,
      name: 'Traditional Law and Governance.pdf',
      date: 'May 16, 2025',
      size: '3.8 MB',
      status: 'processing',
      progress: 65
    }
  ]);

  const [conversations, setConversations] = useState([
    {
      id: 1,
      question: 'What are the traditional marriage customs in Ghomala culture?',
      timestamp: '10:32 AM • May 16, 2025',
      answer: `<p>Traditional marriage in Ghomala culture is a complex process that involves several stages and significant community participation. Based on the document "Traditional Ghomala Marriage Customs," the process typically includes:</p>
              <ol class="mt-3 space-y-2">
                  <li><strong>Nkwete (Introduction):</strong> The groom's family formally visits the bride's family to express interest and present symbolic gifts.</li>
                  <li><strong>Ndap Nkap (Bride Price Negotiation):</strong> Elders from both families negotiate the bride price, which traditionally includes livestock, crops, and ceremonial items.</li>
                  <li><strong>Nda Nkap (Bride Price Payment):</strong> The agreed items are presented in a ceremonial gathering with community witnesses.</li>
                  <li><strong>Nkwala' (Marriage Ceremony):</strong> A celebration that involves traditional dances, songs, and rituals to unite the couple.</li>
              </ol>
              <p class="mt-3">The document emphasizes that marriage in Ghomala culture is not just a union between two individuals but between two families and communities. Elders play a crucial role in guiding the process and ensuring cultural protocols are followed.</p>
              <p class="mt-3">Modern adaptations have modified some aspects, but the core principles of family involvement, community witnessing, and ritual significance remain important in contemporary Ghomala marriages.</p>`,
      source: 'Traditional Ghomala Marriage Customs.pdf (pages 12-15)',
      confidence: 92
    },
    {
      id: 2,
      question: 'What is the significance of the "Nfo\' King" in Ghomala folklore?',
      timestamp: '10:15 AM • May 16, 2025',
      answer: `<p>According to the "Ghomala Folklore Collection Vol. 1," the Nfo' King (sometimes written as "Nfon") holds significant cultural and spiritual importance in Ghomala folklore and traditional governance structures.</p>
              <p class="mt-3">The Nfo' King is portrayed as:</p>
              <ul class="mt-3 space-y-2">
                  <li><strong>Divine Representative:</strong> The Nfo' King is believed to be a mediator between the community and ancestral spirits, with the ability to communicate with the spiritual realm.</li>
                  <li><strong>Guardian of Tradition:</strong> Responsible for preserving cultural practices, customs, and maintaining the moral fabric of society.</li>
                  <li><strong>Judicial Authority:</strong> In folklore narratives, the Nfo' King often serves as the ultimate judge in disputes, known for wisdom and fairness.</li>
                  <li><strong>Agricultural Prosperity:</strong> Many stories connect the Nfo' King's spiritual power with agricultural fertility and community wellbeing.</li>
              </ul>
              <p class="mt-3">The document contains several folktales that illustrate how the Nfo' King's decisions shaped community outcomes. For example, the tale of "The Nfo' King and the Seven Villages" demonstrates how the king's wisdom resolved a territorial dispute through peaceful means rather than conflict.</p>
              <p class="mt-3">The institution of the Nfo' King continues to be respected in contemporary Ghomala communities, though with modified roles that adapt to modern governance structures.</p>`,
      source: 'Ghomala Folklore Collection Vol. 1.pdf (pages 23-28, 42-45)',
      confidence: 88
    }
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex">
        <LeftSidebar documents={documents} setDocuments={setDocuments} />
        <MainContentArea conversations={conversations} setConversations={setConversations} />
      </main>
    </div>
  );
}

export default App;