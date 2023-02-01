import { fotograflarSection } from "./constants"
import FotografComp from "./FotografComp"

const FotograflarSection = () => {
  return (
    <div className=" w-full flex flex-wrap gap-3  lg:gap-7  items-center justify-center">
      {fotograflarSection.map((item, idx) => (
        <FotografComp key={idx} src={item.src} alt={item.alt} />
      ))}

    </div>
  )
}

export default FotograflarSection