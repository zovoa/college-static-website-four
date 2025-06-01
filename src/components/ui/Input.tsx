import React, { InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
  icon?: ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  icon,
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-white mb-2 font-medium">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          className={`w-full px-4 ${icon ? 'pl-10' : 'px-4'} py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#75E6DA] text-white placeholder-white/50 transition-all duration-300 ${
            error ? 'border-red-500' : ''
          } ${className}`}
          {...props}
        />
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            {icon}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-red-400 text-sm">{error}</p>}
    </div>
  );
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-white mb-2 font-medium">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#75E6DA] text-white placeholder-white/50 transition-all duration-300 ${
          error ? 'border-red-500' : ''
        } ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-red-400 text-sm">{error}</p>}
    </div>
  );
};