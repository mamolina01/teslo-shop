'use client'
import { getStockBySlug } from '@/actions/product/get-stock-by-slug'
import { titleFont } from '@/config/fonts'
import { useEffect, useState } from 'react'

interface Props {
  slug: string
}

export const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getStock = async () => {
      const stock = await getStockBySlug(slug)
      setStock(stock)
      setIsLoading(false)
    }

    getStock()
  }, [slug])

  return (
    <>
      {!isLoading ? (
        <p className={`${titleFont.className} antialiased text-sm`}>Unidades disponibles: {stock}</p>
      ) : (
        <p className={`${titleFont.className} antialiased text-sm bg-gray-200 animate-pulse`}>&nbsp;</p>
      )}
    </>
  )
}
