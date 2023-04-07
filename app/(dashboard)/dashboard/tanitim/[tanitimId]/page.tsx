import Tanitim from './Tanitim';
import { getTanıtımById } from 'lib/prisma/tanıtım';
async function page({ params }: any) {
  const { tanitim } = await getTanıtımById(params.tanitimId);
  tanitim.createdAt = tanitim.createdAt.toISOString();
  tanitim.createdAt = tanitim.createdAt.toISOString();

  return <Tanitim tanitim={tanitim} data-superjson />;
}
export const revalidate = 5;
export default page;
