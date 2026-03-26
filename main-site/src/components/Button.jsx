import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-2 transition-all cursor-pointer font-display inline-block text-center rounded-md";
  
  const variants = {
    primary: "silver-gradient text-black hover:opacity-90 active:opacity-100 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    secondary: "bg-white/10 text-white hover:bg-white/20 active:opacity-90",
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
