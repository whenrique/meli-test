import React from "react"
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom"

import Home from "pages/Home"
import Items from "pages/Items/Items"
import Item from "pages/Item"

const App = () => {
  const navigate = useNavigate()
  const handleSubmit = (query) => {
    navigate(`/items?q=${query}`)

    return null
  }

  return (
    <Routes>
      <Route exact path="/" element={<Home onSubmit={handleSubmit} />} />
      <Route exact path="/items" element={<Items onSubmit={handleSubmit} />} />
      <Route exact path="/items/:id" element={<Item onSubmit={handleSubmit} />} />
    </Routes>
  )
}

export default App
