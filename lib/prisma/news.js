import prisma from '.';

export async function getPosts() {
  try {
    const posts = await prisma.post.findMany();
    return { posts };
  } catch (error) {
    return { error };
  }
}
export async function createPost(data) {
  try {
    const post = await prisma.post.create({ data });
    return { post };
  } catch (error) {
    return { error };
  }
}
export async function getPostById(id) {
  try {
    const post = await prisma.post.findUnique({ where: { id } });
    return { post };
  } catch (error) {
    return { error };
  }
}
export async function deletePostById(id) {
  try {
    const post = await prisma.post.delete({ where: { id } });
    return { post };
  } catch (error) {
    return { error };
  }
}
export async function updatePostById(id, data) {
  try {
    const post = await prisma.post.update({ where: { id }, data });
    return { post };
  } catch (error) {
    return { error };
  }
}
