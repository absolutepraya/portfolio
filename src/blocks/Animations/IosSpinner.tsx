interface IosSpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | '3xl';
  [key: string]: unknown;
}

const IosSpinner = ({
  className = '',
  size = 'md',
  ...props
}: IosSpinnerProps) => {
  const blades = [
    'blade-0',
    'blade-1',
    'blade-2',
    'blade-3',
    'blade-4',
    'blade-5',
    'blade-6',
    'blade-7',
    'blade-8',
    'blade-9',
    'blade-10',
    'blade-11',
  ];

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
      {blades.map((blade) => (
        <div key={blade} className='spinner-blade' />
      ))}
    </div>
  );
};

export default IosSpinner;
