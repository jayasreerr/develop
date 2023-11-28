"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { title } from 'process';
import React, { useEffect, useState } from 'react';
import { json } from 'stream/consumers';
// import { json } from 'stream/consumers';

export default function Home() {


  const [product, setproducts] = useState({ products: [] })
  console.log(product)

 
  const searchParams = useSearchParams()
 
  const search = searchParams.get('id')
console.log(search)

const productClick = async () => {
    try {
      const json = await fetch(`https://dummyjson.com/products/${search}`)
        .then(acceptRes => acceptRes.json())
    //   console.log(json)
      setproducts(json)
    //   console.log(json)

    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    productClick()
  }, []);

  return (
    <>


    </>
  );
}



