const Button = ({ 
  children, 
  variant = "primary", 
  size = "medium",
  className = "",
  onClick,
  href,
  ...props 
}) => {
  const baseClasses = "font-bold rounded-md transition duration-300 inline-block text-center";
  
  const variants = {
    primary: "bg-primary-500 text-white hover:bg-primary-600",
    secondary: "bg-white text-secondary-800 hover:bg-primary-500 hover:text-white",
    outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white"
  };

  const sizes = {
    small: "py-2 px-4 text-sm",
    medium: "py-3 px-8 text-base",
    large: "py-4 px-10 text-lg"
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
