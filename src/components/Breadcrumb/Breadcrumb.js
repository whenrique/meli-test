import PropTypes from 'prop-types'

import './Breadcrumb.styles.scss'

const Breadcrumb = ({ path = [] }) => {
  if (!path.length) return null

  const addSign = (index) => {
    const position = index + 1
    const isLastPosition = position !== path.length ? true : false

    return isLastPosition
  }

  return (
    <ul role='navigation' data-testid='breadcrumb' className='breadcrumb'>
      {path.map(({ name, link }, index) => (
        <li key={index} className='breadcrumb-item'>
          <a href={link}>{name}</a>
          {addSign(index) && ('>')}
        </li>
      ))}
    </ul>
  )
}

Breadcrumb.propTypes = {
  path: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string
    })
  ).isRequired
}

export default Breadcrumb
