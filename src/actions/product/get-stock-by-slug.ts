'use server'

import prisma from '@/lib/prisma'

export const getStockBySlug = async (slug: string): Promise<number> => {
  try {
    const product = await prisma.product.findFirst({
      where: {
        slug: slug
      },
      select: { inStock: true }
    })

    if (!product) return 0

    const { inStock } = product
    return inStock
  } catch (error) {
    console.error(error)
    throw new Error('Error al obtener el producto por slug')
  }
}
