import { AiOutlineClose } from 'react-icons/ai';
interface CloseButtonProps {
  setIsOpen: (isOpen: boolean) => void;
}

const CloseButton = ({ setIsOpen }: CloseButtonProps) => {
  return (
    <button
      onClick={() => {
        setIsOpen(false);
      }}
      className="relative flex h-[24] w-[24] items-center justify-center rounded-full border-none p-2 duration-300 ease-out hover:bg-black/25 active:bg-black/25"
    >
      <AiOutlineClose size={24} />
    </button>
  );
};

export default CloseButton;
