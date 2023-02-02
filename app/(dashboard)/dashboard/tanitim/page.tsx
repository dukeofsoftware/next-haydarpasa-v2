import Tanıtım from "./Tanıtım";
import { getTanıtım } from 'lib/prisma/tanıtım';

async function page() {
  const { tanitims } = await getTanıtım();
  tanitims.map((tanitim:any) => {
    return tanitim.createdAt = tanitim?.createdAt.toISOString();
  });
  return <Tanıtım tanitims={tanitims}/>
}

export default page;
