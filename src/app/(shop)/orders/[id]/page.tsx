import { IsPaidButton, Title } from '@/components'
import React from 'react'
import { initialData } from '@/seed/seed'
import Image from 'next/image'
import { getOrderById } from '@/actions/order/get-order-by-id'
import { redirect } from 'next/navigation'
import { currencyFormat } from '@/utils'

interface Props {
  params: {
    id: string
  }
}

const CheckoutPage = async ({ params }: Props) => {
  const { id } = params
  const { ok, order } = await getOrderById(id)

  if (!ok) {
    redirect("/")
  }

  const address = order!.OrderAddress

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden #${id.split("-").at(-1)}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Cart */}
          <div className="flex flex-col mt-5">
            <IsPaidButton isPaid={order!.isPaid} />

            {order!.OrderItem.map(item => (
              <div className="flex" key={`${item.product.slug} - ${item.size}`}>
                <Image
                  src={`/products/${item.product.ProductImage[0].url}`}
                  width={100}
                  height={100}
                  alt={item.product.title}
                  className="mr-5 rounded w-[100px] h-[100px]"
                />

                <div>
                  <p>{item.product.title}</p>
                  <p>{item.price} x {item.quantity}</p>
                  <p className="font-bold">Subtotal: {currencyFormat(item.price * item.quantity)}</p>

                  <button className="underline mt-3">Remover</button>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="bg-white rounded-xl p-7 shadow-xl h-fit">
            <h2 className="text-2xl mb-2">Direccion de entrega</h2>
            <div className="mb-10">
              <p className='text-xl'>{address!.firstName} {address!.lastName}</p>
              <p>{address!.address}</p>
              <p>{address!.address2}</p>
              <p>{address!.postalCode}</p>
              <p>{address!.city} {address!.countryId}</p>
              <p>{address!.phone}</p>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

            <h2 className="text-2xl mb-2">Resumen de orden</h2>

            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">{order?.itemsInOrder} articulos</span>

              <span>Subtotal</span>
              <span className="text-right">{currencyFormat(order!.subTotal)}</span>

              <span>Impuestos (15%)</span>
              <span className="text-right">{currencyFormat(order!.tax)}</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">{currencyFormat(order!.total)}</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <IsPaidButton isPaid={order!.isPaid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
