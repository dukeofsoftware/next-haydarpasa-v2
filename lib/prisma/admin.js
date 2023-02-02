
import prisma from '.';

export async function createAdmin(data) {
    try {
        const admin = await prisma.admin.create({ data });
        return { admin };
    } catch (error) {
        return { error };
    }
}
export async function getAdminByEmailAndPassword(email, password) {
    try {

        const admin = await prisma.admin.findFirst({ where: { email,password } });
        return { admin };
    } catch (error) {
        return { error };
    }
}
export async function deleteAdminByEmailAndPassword(email,password) {
    try {
        const admin = await prisma.admin.delete({ where: { email, password } });
        return { admin };
    } catch (error) {
        return { error };
    }
}
export async function updateAdminByEmailAndPassword(email,password, data) {
    try {
        const admin = await prisma.admin.update({ where: { email, password }, data });
        return { admin };
    } catch (error) {
        return { error };
    }
}
