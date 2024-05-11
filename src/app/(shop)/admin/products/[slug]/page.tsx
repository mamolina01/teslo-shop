import { getCategories, getProductByslug } from '@/actions'
import { ProductForm, Title } from '@/components'
import { redirect } from 'next/navigation'

interface Props {
  params: {
    slug: string
  }
}
const ProductPage = async ({ params }: Props) => {
  const { slug } = params

  const [product, categories] = await Promise.all([getProductByslug(slug), getCategories()])

  // Todo: new
  if (!product && slug !== 'new') {
    redirect('/admin/products')
  }

  const title = slug === 'new' ? 'Nuevo producto' : 'Editar producto'

  return (
    <>
      <Title title={title} />

      <ProductForm product={product ?? {}} categories={categories} />
    </>
  )
}
export default ProductPage
