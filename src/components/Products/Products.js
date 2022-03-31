import './Products.styles.scss'

const Products = ({ products }) => {
  const { items } = products

  return (
    <div role='rowgroup' className='products'>
      {!items.length ? (
        <NotFound />
      ) : (
        <>
          {items.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </>
      )}
    </div>
  )
}

const Product = ({ product }) => {
  const { picture, title, price, location } = product

  return (
    <div role='row' className='product'>
      <figure>
        <img src={picture} alt={title} />
      </figure>
      <div className="info">
        <p>{price.currency}</p>
        <h2>{title}</h2>
      </div>
      <p className='location'>{location}</p>
    </div>
  )
}

const NotFound = () => (
  <div>
    <p>Produto não encontrado!</p>
  </div>
)

export default Products
