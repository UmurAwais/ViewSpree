import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-2 transition-all cursor-pointer font-display inline-block text-center rounded-md";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-accent/80 active:opacity-90 rounded-xl",
    secondary: "bg-white text-black hover:bg-white/90 active:opacity-90",
    outline: "border border-white/20 hover:border-white/40 text-white active:bg-white/5",
    ghost: "text-white/60 hover:text-white bg-transparent p-0",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
