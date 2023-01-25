import React from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query: { id } } = useRouter()

  return (
    <section>
      <h1>Página producto: {id}</h1>
    </section>
  )
}

export default ProductPage
