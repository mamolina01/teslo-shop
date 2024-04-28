import type { Size } from '@/interfaces'
import clsx from 'clsx'

interface Props {
  selectedSize: Size | null
  availableSizes: Size[]

  onChangeSize: (size: Size) => void
}

export const SizeSelector = ({ selectedSize, availableSizes, onChangeSize }: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>

      <div className="flex">
        {availableSizes.map(size => (
          <button
            key={size}
            onClick={() => onChangeSize(size)}
            className={clsx('mx-2 hover:underline text-lg', { underline: size === selectedSize })}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}
