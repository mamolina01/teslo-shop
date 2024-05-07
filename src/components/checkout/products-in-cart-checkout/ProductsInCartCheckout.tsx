'use client'
import { useCartStore } from '@/store'
import { currencyFormat } from '@/utils'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const ProductsInCartCheckout = () => {
  const productsInCart = useCartStore(state => state.cart)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) {
    return <p>Loading...</p>
  }

  return (
    <>
      {productsInCart.map(product => (
        <div className="flex mb-5" key={`${product.slug}-${product.size}`}>
          <Image
            src={`/products/${product.image}`}
            width={120}
            height={120}
            alt={product.title}
            className="mr-5 rounded w-[110px] h-[110px]"
          />

          <div>
            <span>
              {product.size} - {product.title} ({product.quantity})
            </span>
            <p className="font-bold"> {currencyFormat(product.price * product.quantity)}</p>
          </div>
        </div>
      ))}
    </>
  )
}
