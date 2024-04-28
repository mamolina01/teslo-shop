'use client'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'

interface Props {
  quantity: number

  onChangeQuantity: (quantity: number) => void
}

export const QuantitySelector = ({ quantity, onChangeQuantity }: Props) => {
  const onQuantityChanged = (value: number) => {
    if (quantity + value >= 1) {
      onChangeQuantity(quantity + value)
    }
  }

  return (
    <div className="flex">
      <button>
        <IoRemoveCircleOutline size={30} onClick={() => onQuantityChanged(-1)} />
      </button>

      <span className="w-20 mx-3 px-5 bg-gray-100 text-center">{quantity}</span>

      <button>
        <IoAddCircleOutline size={30} onClick={() => onQuantityChanged(1)} />
      </button>
    </div>
  )
}
