const SepBorder = ({ bot, text }) => {
  return (
    <div className='my-6 flex w-full flex-row'>
      <div className='h-[2px] w-1/3 bg-gradient-to-l from-customgray to-transparent' />
      <div className='relative h-[2px] w-1/3 bg-customgray'>
        {text && (
          <div className='absolute -top-3 right-1/2 translate-x-1/2 bg-customblack px-4 text-customlightgray'>
            <p>{text}</p>
          </div>
        )}
      </div>
      <div className='h-[2px] w-1/3 bg-gradient-to-r from-customgray to-transparent' />
    </div>
  );
};

export default SepBorder;
