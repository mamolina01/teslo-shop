'use client'
import { SizeSelector } from '../size-selector/SizeSelector'
import { QuantitySelector } from '../quantity-selector/QuantitySelector'
import { Product } from '@/interfaces'
import { useState } from 'react'
import { CartProduct, Size } from '../../../interfaces/product.interface'
import { useCartStore } from '@/store'

interface Props {
  product: Product
}

export const AddToCart = ({ product }: Props) => {
  const addProductToCart = useCartStore(state => state.addProductToCart)
  const [size, setSize] = useState<Size | null>(null)
  const [quantity, setQuantity] = useState<number>(1)
  const [error, setError] = useState<boolean>(false)

  const addToCart = () => {
    if (!size) {
      setError(true)
      return
    }
    setError(false)

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      size: size,
      image: product.images[0]
    }

    addProductToCart(cartProduct)
    setSize(null)
    setQuantity(1)
  }
  return (
    <>
      {error && <span className="text-red-500 fade-in">Debe seleccionar un talle *</span>}
      {/* size selector */}
      <SizeSelector selectedSize={size} availableSizes={product.sizes} onChangeSize={setSize} />

      {/* quantity selector */}
      <QuantitySelector quantity={quantity} onChangeQuantity={setQuantity} />

      {/* Button */}
      <button onClick={addToCart} className="btn-primary my-5">
        Agregar al carrito
      </button>
    </>
  )
}
