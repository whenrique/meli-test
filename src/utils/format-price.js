const formatPrice = (price) => {
  if (!price) return null
  const { amount, currency } = price

  const newPrice = amount.toLocaleString('es-AR', {
    currency: currency,
    style: 'currency'
  })

  return newPrice.split(',')
}

export default formatPrice
