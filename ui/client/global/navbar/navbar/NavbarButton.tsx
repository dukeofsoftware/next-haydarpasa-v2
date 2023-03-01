import Image from 'next/image';
import menu from '@/public/icons/menu2.png';
import { AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons';
interface NavbarButtonProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const NavbarButton = ({ isOpen, setIsOpen }: NavbarButtonProps) => {
  console.log("render oldum navbarButton")
  return (
    <div className=" ml-auto flex h-full w-full   items-center justify-end ">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className=" in-ease-out flex max-w-[150px] items-center justify-center rounded-full bg-red-700	 p-3  duration-500 hover:bg-red-800 active:bg-red-800 md:w-full md:gap-2 md:py-3 "
      >
        <h1 className="text-md hidden font-extrabold uppercase text-white md:block">
          Menu
        </h1>
        <div
          className={`z-30 relative h-[26px] w-[26px] duration-300  ${isOpen ? '  rotate-180  ' : 'rotate-0 opacity-100'
            }`}
        >
          {isOpen ?
          <IconContext.Provider value={{color:"white"}}>
            <AiOutlineClose size={24} />

          </IconContext.Provider>

            :
            <Image src={menu} alt="Menu aç" fill />

          }
        </div>
      </button>
    </div>
  );
};

export default NavbarButton;
