import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  disabled = false,
  type = 'button',
  href,
  to,
  onClick,
  className = '',
}: ButtonProps) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-700 focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-secondary-700 focus:ring-secondary',
    outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
    white: 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 focus:ring-gray-300',
  };
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Combined classes
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClasses} ${className}`;
  
  // Render appropriate element based on props
  if (to) {
    return (
      <Link to={to} className={classes}>
        {isLoading ? (
          <>
            <Spinner size="sm" color="currentColor" className="mr-2" />
            <span>Loading...</span>
          </>
        ) : (
          children
        )}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {isLoading ? (
          <>
            <Spinner size="sm" color="currentColor" className="mr-2" />
            <span>Loading...</span>
          </>
        ) : (
          children
        )}
      </a>
    );
  }
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <>
          <Spinner size="sm" color="currentColor" className="mr-2" />
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button; 