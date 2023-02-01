import Marş from "./Marş";
import { hakkindaSection } from '@/ui/client/hakkında/hakkında_section/constants';
import HakkindaSection from '@/ui/client/hakkında/hakkında_section/index';
import ContainerComp  from '@/ui/global/Container';
function page() {
  return (
    
      <ContainerComp classNames="bg-red-900 	  flex flex-col items-center justify-center gap-9 z-20">
         {hakkindaSection.map((item) => (
          <HakkindaSection key={item.title} title={item.title} images={item.images} content={item.content}/>
         ))}
        
          <Marş />
        
      </ContainerComp>
    
  );
}

export default page;
