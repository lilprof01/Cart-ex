import React from 'react';
import { useState, useEffect } from 'react';
import Tile from './tile';
import Cart from './cart';

const Page = () => {
  const [data, setData] = useState(null);
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState({});
  const [selected, setSelected] = useState(null);
    
    const totalCount = Object.values(count).reduce((acc, counts) => acc + counts, 0);
  
    const handleSelect = (id) => {
      setSelected(id === selected ? null : id);
    };
  
    useEffect(() => {
      fetch("/data.json")
        .then((Response) => Response.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const removeFromCart = (data) => {
      const item = cart.find((item) => item.id === data.id);
      
      if (item) {
        // If it exists, update the quantity
        setCart(
          
          cart.map((item) =>
            item.id === data.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      } else {
        // If it doesn't exist, add it to the cart with a quantity of 1
        setCart([...cart, { ...data, quantity: 0 }]);
      }
  
      const decrease = (id) => {
        if (count[id] > 0) {
          setCount(prevCount => ({ ...prevCount, [id]: prevCount[id] - 1 }));
        } else{
          setCount(prevCount => ({ ...prevCount, [id]: 0 }));
        }
      };
  
      decrease(data.id);
  
      console.log(cart);
    }
  
    const addToCart = (data) => {
      const item = cart.find((item) => item.id === data.id);
      
      if (item) {
        // If it exists, update the quantity
        setCart(
          cart.map((item) =>
            item.id === data.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        // If it doesn't exist, add it to the cart with a quantity of 1
        setCart([...cart, { ...data, quantity: 1 }]);
      }
  
      const increase = (id) => {
        setCount(prevCount => ({ ...prevCount, [id]: (prevCount[id] || 0) + 1 }));
      };
  
      increase(data.id);
  
      console.log(cart);
    }

  return (
    <main className='flex justify-between items-start align-middle lg:px-20 lg:py-10 gap-10'>
      <Tile cart={cart} data={data} count={count} removeFromCart={removeFromCart} selected={selected} handleSelect={handleSelect} addToCart={addToCart} totalCount={totalCount} />
      
      <Cart cart={cart} data={data} handleSelect={handleSelect} addToCart={addToCart} setCart={setCart} count={count} totalCount={totalCount} />
    </main>
  )
}

export default Page
