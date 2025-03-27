const BotBorder = () => {
  return (
    <div className='absolute -bottom-[1px] right-1/2 flex w-[80%] translate-x-1/2 flex-row border-opacity-100'>
      <div className='h-[2px] w-1/3 bg-gradient-to-l from-customgray to-transparent' />
      <div className='h-[2px] w-1/3 bg-customgray' />
      <div className='h-[2px] w-1/3 bg-gradient-to-r from-customgray to-transparent' />
    </div>
  );
};

export default BotBorder;
