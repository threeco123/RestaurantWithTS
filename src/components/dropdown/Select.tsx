import React from 'react';
import { useDropdown } from './dropdown-context';

export interface ISelectProps {
  placeholder?: string;
  className?: string;
}

const Select: React.FC<ISelectProps> = ({
  placeholder = '',
  className = '',
}) => {
  const { toggle, show } = useDropdown();
  return (
    <div
      className={`flex items-center justify-between py-[15px] px-[25px] bg-white border border-grayf1 rounded-lg cursor-pointer font-medium ${className}`}
      onClick={toggle}
    >
      <span>{placeholder}</span>
      <span>
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </span>
    </div>
  );
};

export default Select;
