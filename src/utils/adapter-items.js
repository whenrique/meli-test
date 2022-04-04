const AdapterItems = (items) =>
  items
    .map(item => {
      const price = {
        currency: item.prices.prices[0].currency_id,
        amount: item.prices.prices[0].amount,
        decimals: 2
      }

      return ({
        id: item.id,
        title: item.title,
        price,
        picture: item.thumbnail,
        permalink: item.permalink,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        location: item.address.state_name
      })
    })

export default AdapterItems
