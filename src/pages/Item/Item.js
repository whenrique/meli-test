import Header from "components/Header"
import Layout from "components/Layout"
import Product from "components/Product/Product"
import useItem from "./use-item"

const Item = ({ onSubmit }) => {
  const { data, ...props } = useItem()

  return (
    <>
      <Header onSubmit={onSubmit} />
      <Layout breadcrumb={data?.item?.categories} >
        <Product product={data} {...props} />
      </Layout>
    </>
  )
}

export default Item
