import React from "react";

const CartItem = (props) => {
  return (
    <div>
      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <div>
          <h3>{props.name}</h3>
          <p className="text-[grey]">
            <span className="text-[brown]">{props.count}x</span> @$
            {props.price.toFixed(2)} ${(props.count * props.price).toFixed(2)}
          </p>
        </div>
        <div
          onClick={props.removeItem}
          className="text-[brown] rounded-full border border-[#CAAFA7] p-1 remove"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
          >
            <path
              fill="#CAAFA7"
              d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
