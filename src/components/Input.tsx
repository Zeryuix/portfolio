import React from 'react';

type InputProps = {
  type: 'name' | 'email' | 'message';
  placeholder?: string;
};

export default function Input({ type, placeholder }: InputProps) {
  const getDefaultPlaceholder = () => {
    switch (type) {
      case 'name':
        return 'Name';
      case 'email':
        return 'Email';
      case 'message':
        return 'Message';
      default:
        return '';
    }
  };

  const inputClasses = "w-full bg-[#f2f2f7] p-4 rounded-none text-gray-700 focus:outline-none";

  return (
    <div className="w-full max-w-lg mb-4">
      {type === 'message' ? (
        <textarea
          placeholder={placeholder || getDefaultPlaceholder()}
          className={`${inputClasses} h-48 resize-none`}
        />
      ) : (
        <input
          type={type === 'email' ? 'email' : 'text'}
          placeholder={placeholder || getDefaultPlaceholder()}
          className={inputClasses}
        />
      )}
    </div>
  );
}
