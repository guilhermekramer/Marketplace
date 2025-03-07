import prisma from '../../config/prismaClient.js';

export const createUser = async (user) => {
    return await prisma.user.create({ data: user })
}

export const deleteUser = async (id) => {
    return await prisma.user.delete({ where: { id: Number(id) } })
}

export const getAllUsers = async () => {
    return await prisma.user.findMany()
}

export const getUserById = async (id) => {
    return await prisma.user.findUnique({ where: { id: Number(id) } })
}

export const loginUser = async (user) => {
    return await prisma.user.findUnique({ where: { email: user.email } })
}

export const updateUser = async (id, user) => {
    return await prisma.user.update({ where: { id: Number(id) }, data: user })
}