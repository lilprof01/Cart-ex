import React from 'react';
import Tile from './tile';
import Cart from './cart';

const Page = () => {
  return (
    <main className='flex justify-between items-start align-middle lg:px-20 lg:py-10 gap-10'>
      <Tile />
      <Cart />
    </main>
  )
}

export default Page
