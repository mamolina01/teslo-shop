import { notFound } from "next/navigation"

interface Props {
  params: {
    id: string
  }
}

const CategoryPage = ({ params }: Props) => {
  const { id } = params

  if (id === "kids") {
    notFound()
  }

  return (
    <div>CategoryPage {id}</div>
  )
}

export default CategoryPage