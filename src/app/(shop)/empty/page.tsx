import Link from 'next/link'
import React from 'react'
import { IoCartOutline } from 'react-icons/io5'

const EmptyPage = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <IoCartOutline size={80} className="mx-5" />

      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold">tu carrito está vacio</h1>

        <Link href="/" className="text-blue-500 text-4xl">
          Regresar
        </Link>
      </div>
    </div>
  )
}

export default EmptyPage
