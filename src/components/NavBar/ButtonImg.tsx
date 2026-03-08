import PFP3 from '../../assets/creds/pfp.webp';

const ButtonImg = () => {
  return (
    <div className='relative h-14 w-14 shrink-0'>
      <div
        className='absolute top-[2px] left-[2px] h-14 w-14 rounded-2xl'
        style={{ backgroundColor: 'var(--color-page-bg)' }}
      />
      <div className='relative z-10 h-14 w-14 overflow-hidden rounded-2xl'>
        <img
          src={PFP3}
          className='h-full w-full select-none object-cover grayscale transition duration-200 ease-in-out hover:grayscale-0'
          alt='Profile'
          draggable='false'
        />
      </div>
    </div>
  );
};

export default ButtonImg;
