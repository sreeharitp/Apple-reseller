import React from 'react'
import Layout from '../../layout/Layout'
import HomeSection from '../../components/home/HomeSection'
import SellProduct from '../../components/home/SellProduct'

const HomePage = () => {
  return (
   <Layout>
    <HomeSection/>
    <SellProduct/>
   </Layout>
  )
}

export default HomePage