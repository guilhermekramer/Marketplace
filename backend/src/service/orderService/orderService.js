import prisma from '../../config/prismaClient.js';

export const createOrder = async (order) => {
    return await prisma.order.create({ data: order })
}

export const deleteOrder = async (id) => {
    return await prisma.order.delete({ where: { id: Number(id) } })
}

export const getAllOrders = async () => {
   return await prisma.order.findMany()
}

export const getOrderById = async (id) => {
    return await prisma.order.findUnique({ where: { id: Number(id) } })
}

export const updateOrder = async (id, order) => {
   return await prisma.order.update({ where: {id: Number(id)}, data: order })
}

export const getOrdersByUserId = async (userId) => {
    return await prisma.order.findMany({ where: { userId: Number(userId) } })
}

