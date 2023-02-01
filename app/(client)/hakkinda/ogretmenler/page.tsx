import Ogretmen from "@/ui/client/hakkında/ogretmenler/Ogretmen"
import  ContainerComp  from '@/ui/global/Container';
import { ogretmenler } from '@/ui/client/hakkında/ogretmenler/constants';
function page() {
  
    return (
        <ContainerComp classNames="w-full flex flex-col sm:flex-row gap-1 sm:gap-0 sm:flex-wrap  min-h-screen justify-center pt-24  bg-red-200/30">

                {ogretmenler.map((ogretmen) => (
                    <Ogretmen key={ogretmen.isim} ogretmenSRC={ogretmen.ogretmenSRC} isim={ogretmen.isim} branş={ogretmen.branş} />
                ))}



        </ContainerComp>

    )
}

export default page