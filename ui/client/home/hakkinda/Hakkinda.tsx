import Counter from "./Counter";
import Link from "next/link";
import SectionTitle from "@/ui/client/global/SectionTitle";
function Hakkinda() {
  return (
    <section className="  px-[1%] md:px-[64px] xl:px-[128px] w-full flex flex-col bg-white  p-5  justify-center min-h-[700px] gap-5">
          <SectionTitle classNames="text-3xl sm:text-4xl xl:text-5xl font-bold text-center text-primary">
            Haydarpaşa Hakkında
          </SectionTitle>
          <p className=" text-lg sm:text-xl xl:text-2xl text-center">
            Akademik başarı elde edip sosyal becerilerini geliştirebileceğin bir ortam
          </p>
          <div className="flex justify-evenly w-full">
            <div className="flex flex-col gap-3 items-center justify-center">
              <p className="">Kuruldu</p>
              <Counter from={0} to={1934} styles="font-bold text-base md:text-xl text-primary" />
            </div>
            <div className="flex flex-col gap-3 items-center justify-center">
              <p className="">Öğrenci Sayısı</p>
              <Counter from={0} to={780} styles="font-bold text-xl text-primary" />
            </div>
            <div className="flex flex-col gap-3 items-center justify-center">
              <p className="">lorem</p>
              <Counter from={0} to={1934} styles="font-bold text-xl text-primary" />
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
              <Link
                href="kesfet/sayilarla"
                className="w-[300px] h-[40px] bg-primary-1 text-white text-center text-xl  rounded-md shadow-sm font-extrabold justify-center items-center inline-flex mt-5"
              >
                Sayılarla Haydarpaşa
              </Link>
          </div>
        </section>
  )
}

export default Hakkinda