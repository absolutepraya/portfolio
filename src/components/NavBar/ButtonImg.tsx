import PFP3 from '../../assets/creds/pfp.webp';

const ButtonImg = () => {
  return (
    <div className='h-14 w-14 shrink-0 overflow-hidden rounded-2xl'>
      <img
        src={PFP3}
        className='h-full w-full select-none object-cover grayscale transition duration-200 ease-in-out hover:grayscale-0'
        alt='Profile'
        draggable='false'
      />
    </div>
  );
};

export default ButtonImg;
