import { useState } from "react"
import PropTypes from 'prop-types'

import { ReactComponent as Logo } from './assets/logo.svg'
import { ReactComponent as SearchIcon } from './assets/search-icon.svg'
import './Header.styles.scss'

const Header = ({ onSubmit }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!query) return

    onSubmit()

    return
  }

  const handleQuery = (e) => {
    setQuery(e.target.value)

    return
  }

  return (
    <header role='heading' aria-level='1' className="header">
      <Logo className="header-logo" />
      <div className="header-menu"></div>
      <form role='search' onSubmit={handleSubmit} className='form'>
        <div className="form-input-control"><input type="text" data-testid='search-input' value={query} onChange={handleQuery} placeholder='Nunca dejes de buscar' className="form-input" /></div>
        <button type="submit" data-testid='search-button' className="form-button">
          <SearchIcon className="icon-search" />
        </button>
      </form>
    </header>
  )
}

Header.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Header
