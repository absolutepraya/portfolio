const BotBorder = () => {
  return (
    <div className='absolute right-1/2 -bottom-px flex w-[80%] translate-x-1/2 flex-row border-opacity-100'>
      <div className='h-[2px] w-1/3 bg-linear-to-l from-customgray to-transparent' />
      <div className='h-[2px] w-1/3 bg-customgray' />
      <div className='h-[2px] w-1/3 bg-linear-to-r from-customgray to-transparent' />
    </div>
  );
};

export default BotBorder;
