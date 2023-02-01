import TanıtımFormu from "@/ui/global/tanıtım_formu";
import Landing from "@/ui/client/kesfet/kısaca/landing";
import SozSection from "@/ui/client/kesfet/kısaca/söz_bölümü";
import FotoSection from "@/ui/client/kesfet/kısaca/fotograflar";
import MezunlarSection from "@/ui/client/kesfet/kısaca/mezunlar";
function page() {
    return (

        <div className="px-[4%] md:px-[7%] xl:px-[10%] min-h-screen bg-white">
            <Landing />
            <SozSection />
            <FotoSection />


            <MezunlarSection />
            <TanıtımFormu />
        </div>

    );
}

export default page;
