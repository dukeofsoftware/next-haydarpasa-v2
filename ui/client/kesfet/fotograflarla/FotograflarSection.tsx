import { fotograflarSection } from './constants';
import FotografComp from './FotografComp';

const FotograflarSection = () => {
  return (
    <div className=" flex w-full flex-wrap items-center  justify-center  gap-3 lg:gap-7">
      {fotograflarSection.map((item, idx) => (
        <FotografComp key={idx} src={item.src} alt={item.alt} />
      ))}
    </div>
  );
};

export default FotograflarSection;
