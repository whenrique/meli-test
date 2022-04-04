import formatPrice from 'utils/format-price'
import './Product.styles.scss'

const Product = ({ product, loading }) => {
  const { item } = product || {}

  const price = formatPrice(item?.price)

  return loading ? (
    'Loading...'
  ) : (
  <div role='main' className="product">
    <figure className='photo'>
      <img src={item?.picture} alt={item?.title} />
    </figure>
    <div className="info">
      <p>{item?.condition} - {item?.sold_quantity} vendidos</p>
      <h2 className='title'>{item?.title}</h2>
      <p className='price'>
        {price?.map(val => (
          <span>{val}</span>
        ))}
      </p>
      <button className="button">Comprar</button>
    </div>
    <div className="description">
      <h2>Descripción del producto</h2>
      <p>{item?.description}</p>
    </div>
  </div>
)}

export default Product
