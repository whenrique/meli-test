import Breadcrumb from "components/Breadcrumb"
import './Layout.styles.scss'

const Layout = ({ breadcrumb, children }) => (
  <div className="container">
    <Breadcrumb path={breadcrumb} />
    <main role='main' className='main'>
      {children}
    </main>
  </div>
)

export default Layout
