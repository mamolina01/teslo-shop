'use client'
import { useCartStore } from '@/store'
import { currencyFormat } from '@/utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const OrderSummary = () => {
  const { itemsInCart, subTotal, tax, total } = useCartStore(state => state.getSummaryInformation())
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) return

  return (
    <div className="bg-white rounded-xl p-7 shadow-xl h-fit">
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
        <Link href="/checkout/address" className="flex btn-primary justify-center">
          Checkout
        </Link>
      </div>
    </div>
  )
}
