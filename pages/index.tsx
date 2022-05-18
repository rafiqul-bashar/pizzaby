import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Featured, ProductList } from '../components'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pizzaby - Pizza Restaurent in Town </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Best pizza shop in town" />
      </Head>
      <Featured />
      <ProductList />
    </>
  )
}

export default Home
