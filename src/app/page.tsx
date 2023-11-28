"use client"
import Image from 'next/image';
import Link from 'next/link';
import { title } from 'process';
import React, { useEffect, useState } from 'react';
import { json } from 'stream/consumers';
// import { json } from 'stream/consumers';

export default function Home() {


  const [product, setproducts] = useState({ products: [] })

  const productClick = async () => {
    try {
      const json = await fetch('https://dummyjson.com/products')
        .then(acceptRes => acceptRes.json())
      console.log(json)
      setproducts(json)
    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    productClick()
  }, []);


  return (
    <>
      {
        product.products.map((item:any) =>
          <>
            <Link  href={{ pathname: '/products',query:{id:item.id} }} className='text-black'>{item.title}</Link>   
          </>
        )}



    </>
  );
}



