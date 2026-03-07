import Laptop from '../../assets/creds/laptop.webp';
import PFP3 from '../../assets/creds/pfp.webp';

const ButtonImg = () => {
  return (
    <div>
      <div
        className='group relative flex h-14 w-14 items-center justify-center rounded-2xl shadow-md hover:bg-blurple hover:bg-opacity-40 active:bg-blurple active:bg-opacity-85'
        style={{ border: '1px solid var(--color-nav-border)' }}
      >
        <img
          src={Laptop}
          className='absolute -right-6 -bottom-5 z-20 rotate-12 scale-[35%] transition duration-200 ease-in-out group-hover:-rotate-[4deg] group-hover:scale-[50%]'
          alt='Laptop'
          draggable='false'
        />
        <div className='h-full w-full cursor-help overflow-hidden rounded-2xl bg-white'>
          <img
            src={PFP3}
            className='scale-[100%] select-none grayscale transition duration-200 ease-in-out group-hover:grayscale-0'
            alt='Profile'
            draggable='false'
          />
        </div>
      </div>
    </div>
  );
};

export default ButtonImg;
