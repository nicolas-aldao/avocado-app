import React from 'react'
import { Segment, Card } from 'semantic-ui-react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './cardItem.module.css';

type ProductListProps = {
  products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Segment
    basic
    vertical
    as="div"
    style={{
      margin: '0 1rem 1rem 1rem',
    }}
  >
    <Link key={id} href={`/product/${id}`} passHref prefetch={false}>
      <Card
        as="div"
        header={name}
        image={<Image src={image} height={290} width={290} alt='an avocado'/>}
        meta={<Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>}
        className={styles.cardItem}
      />
    </Link>
    </Segment>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group itemsPerRow={2} centered>
    {mapProductsToCards(products)}
  </Card.Group>
)

export default ProductList
