import prisma from '../../config/prismaClient.js'

export const createProduct = async (product) => {
    return await prisma.product.create({ data: product })
}
export const deleteProduct = async (id) => {
    return await prisma.product.delete({ where: { id: Number(id) } })
}

export const getAllProducts = async () => {
    return await prisma.product.findMany()
}

export const updateProduct = async (id, product) => {
    return await prisma.product.update({ where: { id: Number(id) }, data: product })
}





