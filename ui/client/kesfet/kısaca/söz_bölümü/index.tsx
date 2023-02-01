import { sözSection } from "./constants"

const SozSection = () => {
  return (
    <section className="w-full min-h-48 flex flex-col  justify-center  border-[4px] md:border-[10px] border-primary-1 gap-5 my-[2rem] md:my-[64px] p-4 md:p-9 relative ">
    <p className="text-red-700 text-base md:text-xl font-bold">
      {sözSection.söz}
    </p>
    <span className="font-bold md:font-extrabold  text-xl md:text-3xl text-primary">
      {sözSection.isim}
    </span>
  </section>  )
}

export default SozSection