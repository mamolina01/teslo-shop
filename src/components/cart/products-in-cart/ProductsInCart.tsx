'use client'
import { QuantitySelector } from '@/components'
import { useCartStore } from '@/store'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const ProductsInCart = () => {
  const { updateProductQuantity, removeProduct } = useCartStore(state => state)
  const productsInCart = useCartStore(state => state.cart)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) {
    return <p>Loading...</p>
  }

  const updateQuantity = () => {}

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
            <Link href={`/product/${product.slug}`}>
              <p className="font-semibold hover:underline">
                {product.size} - {product.title}
              </p>
            </Link>
            <p>${product.price}</p>
            <QuantitySelector
              quantity={product.quantity}
              onChangeQuantity={quantity => updateProductQuantity(product, quantity)}
            />

            <button onClick={() => removeProduct(product)} className="underline">
              Remover
            </button>
          </div>
        </div>
      ))}
    </>
  )
}
