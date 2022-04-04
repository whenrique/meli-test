import { useRef, useState } from "react"
import { Link } from "react-router-dom"

import { ReactComponent as Logo } from './assets/logo.svg'
import { ReactComponent as SearchIcon } from './assets/search-icon.svg'
import './Header.styles.scss'

const Header = ({ onSubmit }) => {
  const [query, setQuery] = useState('')
  const ref = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!query) return

    onSubmit(query)

    return null
  }

  const handleQuery = (e) => {
    setQuery(e.target.value)

    return
  }

  const openSearch = () => {
    ref.current.classList.toggle('is-open')

    return null
  }

  return (
    <header role='heading' aria-level='1' className="header">
      <div className="container">
        <Link to={'/'}>
          <Logo className="header-logo" />
        </Link>
        <div className="header-menu mobile" onClick={openSearch}></div>
        <form role='search' onSubmit={handleSubmit} className='form' ref={ref}>
          <div className="form-input-control"><input type="text" data-testid='search-input' value={query} onChange={handleQuery} placeholder='Nunca dejes de buscar' className="form-input" /></div>
          <button type="submit" data-testid='search-button' className="form-button">
            <SearchIcon className="icon-search" />
          </button>
        </form>
      </div>
    </header>
  )
}

export default Header
