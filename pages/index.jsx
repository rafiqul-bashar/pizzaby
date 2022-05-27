
import axios from 'axios'
import Head from 'next/head'
import { useState } from 'react'


import { Featured, ProductList,AddProduct, AddBtn } from '../components'
export default function Home  ({products}) {
 
  // const user = useSelector((state) => state.user);
  
  return (
    <>
      <Head>
        <title>Pizzaby - Pizza Restaurent in Town </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Best pizza shop in town" />
      </Head>
      <Featured />
      <section id='products'>
      <ProductList products={products}/>
      </section>
    </>
  )
}


export  const getServerSideProps=async()=>{

  const res=await axios.get("http://localhost:3000/api/products")
  return {
    props:{
      products:res.data,
    }
  }
}
