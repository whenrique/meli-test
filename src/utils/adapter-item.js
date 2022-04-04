import fetch from 'node-fetch'

const AdapterItem = async ({ item, description }) => {
  const { path_from_root } = await (await fetch(`https://api.mercadolibre.com/categories/${item.category_id}`)).json()

  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: 2
    },
    picture: item.pictures[0].url,
    condition: item.condition,
    free_shipping: !!item.shipping.free_methods.length,
    sold_quantity: item.sold_quantity,
    description: description.plain_text,
    categories: [{ name:  path_from_root[0].name, link: '#' }]
  }
}

export default AdapterItem
