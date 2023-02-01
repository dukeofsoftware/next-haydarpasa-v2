import AccordionLogo from './AccordionLogo';

interface AccordionButtonProps {
  setIsOpen: (state: boolean) => void;
  isOpen: boolean;
}
const AccordionButton = ({ setIsOpen, isOpen }: AccordionButtonProps) => {
  return (
    <button
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className={`flex h-[70px] w-[70px] items-center justify-center bg-primary-2 md:h-full md:w-auto`}
    >
      <div className={` duration-300 ${isOpen ? 'rotate-0 ' : 'rotate-180'}`}>
        <AccordionLogo size={24} classNames="md:hidden block" />
        <AccordionLogo size={36} classNames="hidden md:block" />
      </div>
    </button>
  );
};

export default AccordionButton;
