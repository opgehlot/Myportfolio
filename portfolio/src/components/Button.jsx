const Button = ({ text, variant = 'primary', onClick, href, type = 'button', disabled = false }) => {
  const baseClasses = "px-6 py-3 border-none rounded-md text-base font-semibold transition-all duration-300 no-underline inline-block text-center md:px-5 md:py-2.5 md:text-sm";
  
  const variantClasses = variant === 'primary'
    ? disabled
      ? "bg-gray-400 text-white cursor-not-allowed opacity-60"
      : "bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(102,126,234,0.3)] active:translate-y-0 cursor-pointer"
    : disabled
      ? "bg-transparent text-gray-400 border-2 border-gray-400 cursor-not-allowed opacity-60"
      : "bg-transparent text-[#667eea] border-2 border-[#667eea] hover:bg-[#667eea] hover:text-white hover:-translate-y-0.5 active:translate-y-0 cursor-pointer";

  const className = `${baseClasses} ${variantClasses}`;

  if (href) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
