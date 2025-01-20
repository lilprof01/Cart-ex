import React from "react";

const Cart = () => {
  return (
    <div className="flex flex-col justify-between align-middle lg:h-[80vh] w-4/6 bg-white rounded-lg p-5 shadow-md">
      <h2 className="font-semibold text-3xl text-[brown]">Your Cart(7)</h2>
      <div>
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <div>
            <h3>Name</h3>
            <p className="text-[brown]">Price</p>
          </div>
          <div className="text-[brown]">x</div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <div>
            <h3>Name</h3>
            <p className="text-[brown]">Price</p>
          </div>
          <div className="text-[brown]">x</div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <div>
            <h3>Name</h3>
            <p className="text-[brown]">Price</p>
          </div>
          <div className="text-[brown]">x</div>
        </div>
      </div>
      <div className="flex justify-between">
        <p>Order Total</p>
        <p className="text-2xl font-semibold">Total Price</p>
      </div>
      <div className="bg-[#fcf9f7] px-5 py-2 rounded-lg text-center w-full">This is a carbon-neutral delivery</div>
      <button className="bg-[brown] hover:bg-[#401f0f] text-white w-full px-5 py-2 rounded-full">Confirm Order</button>
    </div>
  );
};

export default Cart;
