'use server'

import prisma from '@/lib/prisma'

export const getCategories = async () => {
  try {
    // Obtener los productos
    const categories = await prisma.category.findMany({
      orderBy: {
        name: 'asc'
      }
    })

    return categories
  } catch (error) {
    console.log(error)
    throw new Error('No se pudo cargar las categorias')
  }
}
