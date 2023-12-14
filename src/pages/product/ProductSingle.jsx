import React from 'react'
import Layout from '../../layout/Layout'
import Singleproduct from '../../components/product/Singleproduct'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'

const ProductSingle = () => {
  return (
    <Layout>
        <Breadcrumb page="iPhone 15 Pro"/>
        <Singleproduct/>
    </Layout>
  )
}

export default ProductSingle