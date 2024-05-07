import { PlaceOrder, ProductsInCartCheckout, Title } from '@/components'
import Link from 'next/link'
import React from 'react'

const CheckoutPage = () => {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar orden" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Cart */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar elementos</span>

            <Link href="/cart" className="underline mb-5">
              Editar carrito
            </Link>

            <ProductsInCartCheckout />
          </div>

          {/* Order summary */}
          <PlaceOrder />
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
