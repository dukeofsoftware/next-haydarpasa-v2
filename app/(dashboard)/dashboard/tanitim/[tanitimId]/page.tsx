
import Tanitim from './Tanitim';
import { getTanıtımById } from 'lib/prisma/tanıtım';
async function page({params}:any) {
  const { tanitim } = await getTanıtımById(params.tanitimId);
  tanitim.createdAt = tanitim.createdAt.toISOString();
  return <Tanitim tanitim={tanitim}/>
 
}
export const revalidate = 5;
export default page