import { Title } from '@/components'
import Link from 'next/link'
import React from 'react'
import { initialData } from '@/seed/seed'
import Image from 'next/image'

const productsInCart = [initialData.products[0], initialData.products[1], initialData.products[2]]

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

            {productsInCart.map(product => (
              <div className="flex" key={product.slug}>
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  alt={product.title}
                  className="mr-5 rounded w-[100px] h-[100px]"
                />

                <div>
                  <p>{product.title}</p>
                  <p>{product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>

                  <button className="underline mt-3">Remover</button>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="bg-white rounded-xl p-7 shadow-xl h-fit">
            <h2 className="text-2xl mb-2">Direccion de entrega</h2>
            <div className="mb-10">
              <p>Matias Molina</p>
              <p>Av. siempre viva123</p>
              <p>Col. Centro</p>
              <p>Ciudad de Mexico</p>
              <p>CP 1231</p>
              <p>123.123.123</p>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

            <h2 className="text-2xl mb-2">Resumen de orden</h2>

            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 articulos</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>Impuestos (15%)</span>
              <span className="text-right">$ 100</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">$ 100</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <p className="mb-5">
                {/* Disclaimer */}
                <span className="text-xs">
                  Al hacer clic en "Colocar orden", aceptas nuestros{' '}
                  <a href="#" className="underline">
                    términos y condiciones
                  </a>{' '}
                  y{' '}
                  <a href="#" className="underline">
                    politica de privacidad
                  </a>
                </span>
              </p>

              <Link href="/orders/123" className="flex btn-primary justify-center">
                Colocar orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
