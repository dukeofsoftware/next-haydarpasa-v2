import { RiArrowUpSLine } from 'react-icons/ri';

interface AccordionLogoProps {
  size: number;
  classNames?: string;
}
const AccordionLogo = ({ size, classNames }: AccordionLogoProps) => {
  return (
    <div className={`hidden h-full w-full ${classNames}`}>
      <RiArrowUpSLine size={size} />
    </div>
  );
};

export default AccordionLogo;
