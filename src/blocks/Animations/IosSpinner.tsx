interface IosSpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | '3xl';
  [key: string]: unknown;
}

const BLADES = Array.from({ length: 12 }, (_, index) => `blade-${index}`);

const IosSpinner = ({
  className = '',
  size = 'md',
  ...props
}: IosSpinnerProps) => {
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
      {BLADES.map((blade) => (
        <div key={blade} className='spinner-blade' />
      ))}
    </div>
  );
};

export default IosSpinner;
