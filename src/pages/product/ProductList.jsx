import React from 'react'
import Layout from '../../layout/Layout'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import Productlist from '../../components/product/Productlist'

const ProductList = () => {
  return (
    <Layout>
        <Breadcrumb page="iPhones"/>
        <Productlist/>
    </Layout>
  )
}

export default ProductList