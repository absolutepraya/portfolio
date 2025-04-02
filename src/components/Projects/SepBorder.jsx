const SepBorder = ({ bot, text }) => {
  return (
    <div className={`absolute ${bot ? '-bottom-[0px]' : '-top-[0px]'} right-1/2 flex w-[80%] translate-x-1/2 flex-row border-opacity-100`}>
      <div className='h-[2px] w-1/3 bg-gradient-to-l from-customgray to-transparent' />
      <div className='relative h-[2px] w-1/3 bg-customgray'>
        {text && (
          <div className='absolute -top-3 right-1/2 translate-x-1/2 text-customlightgray bg-customblack px-4'>
            <p>{text}</p>
          </div>
        )}
      </div>
      <div className='h-[2px] w-1/3 bg-gradient-to-r from-customgray to-transparent' />
    </div>
  );
};

export default SepBorder;
