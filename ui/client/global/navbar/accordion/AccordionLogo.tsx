import { RiArrowUpSLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';

interface AccordionLogoProps {
  size: number;
  classNames?: string;
  color?: string;
}
const AccordionLogo = ({ size, classNames, color }: AccordionLogoProps) => {
  return (
    <IconContext.Provider
      value={{ color: color, className: 'global-class-name' }}
    >
      <div className={`${classNames}  h-full w-full `}>
        <RiArrowUpSLine size={size} />
      </div>
    </IconContext.Provider>
  );
};

export default AccordionLogo;
