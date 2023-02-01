import prisma from '.';

export async function getCizerges() {
  try {
    const cizerges = await prisma.cizerge.findMany();
    return { cizerges };
  } catch (error) {
    return { error };
  }
}
export async function getCizergeById(id) {
  try {
    const cizerge = await prisma.cizerge.findUnique({ where: { id } });
    return { cizerge };
  } catch (error) {
    return { error };
  }
}

export async function createCizerge(data) {
  try {
    const cizerge = await prisma.cizerge.create({ data });
    return { cizerge };
  } catch (error) {
    return { error };
  }
}

export async function deleteCizergeById(id) {
  try {
    const cizerge = await prisma.cizerge.delete({ where: { id } });
    return { cizerge };
  } catch (error) {
    return { error };
  }
}
export async function updateCizergeById(id, data) {
  try {
    const cizerge = await prisma.cizerge.update({ where: { id }, data });
    return { cizerge };
  } catch (error) {
    return { error };
  }
}
