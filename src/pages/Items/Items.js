import Header from "components/Header"
import Layout from "components/Layout"
import Products  from "components/Products"
import useItems from "./hooks/use-items"

const Items = ({ onSubmit }) => {
  const { data, ...props } = useItems()

  return (
    <>
      <Header onSubmit={onSubmit} />
      <Layout breadcrumb={data?.categories} >
        <Products products={data} {...props} />
      </Layout>
    </>
  )
}

export default Items
