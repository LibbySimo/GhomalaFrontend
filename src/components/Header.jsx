import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-['Pacifico'] text-primary">Ghomala</h1>
          <span className="ml-3 text-lg font-medium text-gray-900"> Historical Document Q&A</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm text-gray-500">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-signal-wifi-line text-green-500"></i>
            </div>
            <span className="ml-1">API Connected</span>
          </div>
       
   
        </div>
      </div>
    </header>
  );
};

export default Header;