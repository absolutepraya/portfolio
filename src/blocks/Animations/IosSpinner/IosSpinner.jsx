const IosSpinner = ({ className = '', size = 'md', ...props }) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'h-3 w-3';
      case 'lg':
        return 'h-6 w-6';
      case '3xl':
        return 'h-10 w-10';
      default:
        return 'h-4 w-4';
    }
  };

  return (
    <div
      className={`relative inline-block ${getSizeClasses()} ${className}`}
      {...props}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="spinner-blade" />
      ))}
    </div>
  );
};

export default IosSpinner;
