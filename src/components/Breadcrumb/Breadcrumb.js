import PropTypes from 'prop-types'

const Breadcrumb = ({ path = {} }) => {
  if (!Object.keys(path).length) return null

  return (
    <ul role='navigation' data-testid='breadcrumb'>
      {path.map(({ name, link }, index) => (
        <li key={index}>
          <a href={link}>{name}</a>
          {'/'}
        </li>
      ))}
    </ul>
  )
}

Breadcrumb.propTypes = {
  path: PropTypes.array.isRequired
}

export default Breadcrumb
