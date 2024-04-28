import { OrderSummary, ProductsInCart, Title } from '@/components'
import Link from 'next/link'

const CartPage = () => {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Cart */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar mas items</span>

            <Link href="/" className="underline mb-5">
              Continua comprando
            </Link>

            <ProductsInCart />
          </div>

          {/* Order summary */}
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}

export default CartPage
