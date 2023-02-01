import prisma from '.';

export async function getTanıtım() {
  try {
    const tanitims = await prisma.tanitim.findMany();
    return { tanitims };
  } catch (error) {
    return { error };
  }
}
export async function createTanıtım(data) {
  try {
    const tanitim = await prisma.tanitim.create({ data });
    return { tanitim };
  } catch (error) {
    return { error };
  }
}
export async function getTanıtımById(id) {
  try {
    const tanitim = await prisma.tanitim.findUnique({ where: { id } });
    return { tanitim };
  } catch (error) {
    return { error };
  }
}
export async function deleteTanıtımById(id) {
  try {
    const tanitim = await prisma.tanitim.delete({ where: { id } });
    return { tanitim };
  } catch (error) {
    return { error };
  }
}
