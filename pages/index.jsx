
import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'


import { Featured, ProductList} from '../components'
export default function Home  ({products}) {
 
 const [allProducts,setAllProducts]=useState([])
 useEffect(() => {
  setAllProducts(products)
 }, [])
 
  
  return (
    <>
      <Head>
        <title>Pizzaby - Pizza Restaurent in Town </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Best pizza shop in town" />
      </Head>
      <Featured />
      <section id='products'>
      <ProductList products={allProducts}/>
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
