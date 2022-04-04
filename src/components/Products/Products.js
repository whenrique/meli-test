import PropTypes from 'prop-types'

import './Products.styles.scss'
import { LIMIT } from './constants'

const Products = ({ products, loading }) => {
  const { items } = products || {}

  return loading ? (
    'Loading...'
  ) : (
    <div role='rowgroup' className='products'>
      <>
        {items?.slice(0, LIMIT).map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </>
    </div>
  )
}

const Product = ({ product }) => {
  const { picture, title, price, location, id } = product

  return (
    <a href={`/items/${id}`} role='row' className='product'>
      <figure>
        <img src={picture} alt={title} />
      </figure>
      <div className="info">
        <p>
          {price.amount.toLocaleString('es-AR', {
            currency: price.currency,
            style: 'currency'
          })}
      </p>
        <h2>{title}</h2>
      </div>
      <p className='location'>{location}</p>
    </a>
  )
}

Products.propTypes = {
  products: PropTypes.object,
  loading: PropTypes.bool
}

Product.propTypes = {
  product: PropTypes.object
}

export default Products
