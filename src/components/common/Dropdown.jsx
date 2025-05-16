import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ id, icon, options, width = "w-48" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedOption = options.find(option => option.selected) || options[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        id={id}
        className="bg-white border border-gray-300 rounded-button px-3 py-1.5 text-sm font-medium text-gray-700 flex items-center whitespace-nowrap"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-5 h-5 flex items-center justify-center mr-2">
          <i className={icon}></i>
        </div>
        {selectedOption.label}
        <div className="w-5 h-5 flex items-center justify-center ml-2">
          <i className="ri-arrow-down-s-line"></i>
        </div>
      </button>
      {isOpen && (
        <div className={`absolute right-0 mt-1 ${width} bg-white rounded-lg shadow-lg border border-gray-200 z-10`}>
          <ul className="py-1">
            {options.map(option => (
              <li 
                key={option.id}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center"
              >
                <div className={`w-5 h-5 flex items-center justify-center mr-2 ${option.selected ? '' : 'opacity-0'}`}>
                  <i className={`ri-check-line ${option.selected ? 'text-primary' : ''}`}></i>
                </div>
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;