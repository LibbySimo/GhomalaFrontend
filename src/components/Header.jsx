import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-['Pacifico'] text-primary">logo</h1>
          <span className="ml-3 text-lg font-medium text-gray-900">Ghomala Historical Document Q&A</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm text-gray-500">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-signal-wifi-line text-green-500"></i>
            </div>
            <span className="ml-1">API Connected</span>
          </div>
          <button className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-button border border-gray-300 text-sm font-medium flex items-center whitespace-nowrap">
            <div className="w-5 h-5 flex items-center justify-center mr-2">
              <i className="ri-question-line"></i>
            </div>
            Help
          </button>
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-button text-sm font-medium flex items-center whitespace-nowrap">
            <div className="w-5 h-5 flex items-center justify-center mr-2">
              <i className="ri-user-line"></i>
            </div>
            Account
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;