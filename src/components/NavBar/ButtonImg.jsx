import { useState } from 'react';
// import Arrow from '../../assets/elements/arrow.webp';
import Laptop from '../../assets/creds/laptop.webp';
// import Flag from '../../assets/creds/flag.webp';
// import Test from '../../assets/creds/test.webp';
// import PFP2 from '../../assets/creds/pfp.svg';
import PFP3 from '../../assets/creds/pfp.webp';

const ButtonImg = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <div className='relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#424242] shadow-xl hover:bg-blurple hover:bg-opacity-40 active:bg-blurple active:bg-opacity-85'>
        <img
          src={Laptop}
          className={`absolute -bottom-5 -right-6 z-20 ${hovered ? '-rotate-[4deg] scale-[50%]' : 'rotate-12 scale-[35%]'} transition duration-200 ease-in-out`}
          alt='Emoji'
          draggable='false'
        />
        <div
          className='clickable h-full w-full cursor-help overflow-hidden rounded-2xl bg-white'
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          aria-label='Profile picture'
          title='Profile picture'
        >
          <img
            src={PFP3}
            className={`scale-[100%] select-none grayscale filter transition duration-200 ease-in-out ${hovered ? 'filter-none' : ''}`}
            alt='Profile picture'
            draggable='false'
          />
        </div>
      </div>
    </div>
  );
};

export default ButtonImg;
