import fetch from 'node-fetch'
import express from 'express'

import AdapterCategories from '../../utils/adapter-categories'
import AdapterItems from '../../utils/adapter-items'
import AdapterItem from '../../utils/adapter-item'

const router = express.Router()

router.get('/items', async (req, res) => {
  const q = req.query.q || ''

  const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${q}`)
  const { filters, results } = await response.json()

  const result = {
    categories: AdapterCategories(filters),
    items: AdapterItems(results)
  }

  res.send(result)
})

router.get('/items/:id', async (req, res) => {
  const id = req.params.id

  const item = await fetch(`https://api.mercadolibre.com/items/${id}`)
  const description = await fetch(`https://api.mercadolibre.com/items/${id}/description`)

  const results = {
    item: await item.json(),
    description: await description.json()
  }

  res.send({
    item: await AdapterItem(results)
  })
})

export default router
