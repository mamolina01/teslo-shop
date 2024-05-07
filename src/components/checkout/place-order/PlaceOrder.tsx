'use client'

import { placeOrder } from '@/actions'
import { useCartStore } from '@/store'
import { useAddressStore } from '@/store/address/address-store'
import { currencyFormat } from '@/utils'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const PlaceOrder = () => {
  const router = useRouter()
  const [loaded, setLoaded] = useState(false)
  const [isPlacingOrder, setIsPlacingOrder] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const address = useAddressStore(state => state.address)
  const { itemsInCart, subTotal, tax, total, } = useCartStore(state => state.getSummaryInformation())

  useEffect(() => {
    setLoaded(true)
  }, [])

  const { cart, clearCart } = useCartStore(state => state)

  const onPlaceOrder = async () => {
    setIsPlacingOrder(true)

    const productsToOrder = cart.map(product => ({
      productId: product.id,
      quantity: product.quantity,
      size: product.size
    }))

    const resp = await placeOrder(productsToOrder, address)
    if (!resp.ok) {
      setIsPlacingOrder(false)
      setErrorMessage(resp.message)
      return
    }
    setIsPlacingOrder(false)
    clearCart()
    router.replace(`/orders/${resp.order?.id}`)
  }

  if (!loaded) {
    return <p>Cargando...</p>
  }

  return (
    <div className="bg-white rounded-xl p-7 shadow-xl h-fit">
      <h2 className="text-2xl mb-2">Direccion de entrega</h2>
      <div className="mb-10">
        <p>
          {address.firstName} {address.lastName}
        </p>
        <p>{address.address}</p>
        <p>{address.address2}</p>
        <p>CP {address.postalCode}</p>
        <p>
          {address.city}, {address.country}
        </p>
        <p>{address.phone}</p>
      </div>

      {/* Divider */}
      <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

      <h2 className="text-2xl mb-2">Resumen de orden</h2>

      <div className="grid grid-cols-2">
        <span>No. Productos</span>
        <span className="text-right">{itemsInCart} articulos</span>

        <span>Subtotal</span>
        <span className="text-right">{currencyFormat(subTotal)}</span>

        <span>Impuestos (15%)</span>
        <span className="text-right">{currencyFormat(tax)}</span>

        <span className="mt-5 text-2xl">Total:</span>
        <span className="mt-5 text-2xl text-right">{currencyFormat(total)}</span>
      </div>

      <div className="mt-5 mb-2 w-full">
        <p className="mb-5">
          {/* Disclaimer */}
          <span className="text-xs">
            Al hacer clic en {'"'}Colocar orden{'"'}, aceptas nuestros{' '}
            <a href="#" className="underline">
              términos y condiciones
            </a>{' '}
            y{' '}
            <a href="#" className="underline">
              politica de privacidad
            </a>
          </span>
        </p>

        <p className="text-red-500">{errorMessage}</p>

        <button disabled={isPlacingOrder} onClick={onPlaceOrder} className="btn-primary">
          Colocar orden
        </button>
      </div>
    </div>
  )
}
