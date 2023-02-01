import prisma from '.';

export async function getEvents() {
  try {
    const events = await prisma.event.findMany();
    return { events };
  } catch (error) {
    return { error };
  }
}
export async function createEvent(data) {
  try {
    const event = await prisma.event.create({ data });
    return { event };
  } catch (error) {
    return { error };
  }
}
export async function getEventById(id) {
  try {
    const event = await prisma.event.findUnique({ where: { id } });
    return { event };
  } catch (error) {
    return { error };
  }
}
export async function deleteEventById(id) {
  try {
    const event = await prisma.event.delete({ where: { id } });
    return { event };
  } catch (error) {
    return { error };
  }
}
export async function updateEventById(id, data) {
  try {
    const event = await prisma.event.update({ where: { id }, data });
    return { event };
  } catch (error) {
    return { error };
  }
}
