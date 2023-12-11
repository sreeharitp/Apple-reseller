import React from 'react'
import Layout from '../../layout/Layout'
import HomeSection from '../../components/home/HomeSection'
import SellProduct from '../../components/home/SellProduct'
import Collection from '../../components/home/Collection'

const HomePage = () => {
  return (
    <Layout>
      <HomeSection />
      <Collection/>
      <SellProduct />
    </Layout>
  )
}

export default HomePage