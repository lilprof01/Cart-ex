import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Tile = () => {
  const [selected, setSelected] = useState(null);
  const [data, setData] = useState(null);
  const [count, setCount] = useState({});
  
  const totalCount = Object.values(count).reduce((acc, counts) => acc + counts, 0);

  const decrease = (id) => {
    if (count[id] > 0) {
      setCount(prevCount => ({ ...prevCount, [id]: prevCount[id] - 1 }));
    }
  };

  const increase = (id) => {
    setCount(prevCount => ({ ...prevCount, [id]: (prevCount[id] || 0) + 1 }));
  };

  const handleSelect = (id) => {
    setSelected(id === selected ? null : id);
  };

  useEffect(() => {
    fetch("/data.json")
      .then((Response) => Response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) {
    return <div className="text-5xl">Loading...</div>;
  }

  return (
    <div className="w-full flex flex-col gap-8">
      <h1 className="text-4xl font-semibold text-[#410f0f]">Deserts</h1>
      <div className="grid grid-row-3 grid-cols-3 w-full gap-5">
        {data.map((data) => (
          <div key={data.id} className="h-full w-full flex flex-col gap-6">
            <div
              style={{
                backgroundImage: `url(${data.image.desktop})`,
              }}
              className="relative h-44 bg-cover rounded-lg w-full"
            >
              <div
                onClick={() => handleSelect(data.id)}
                className={`absolute bottom-[-12px] left-1/2 -translate-x-1/2 text-sm text-[#410f0f] text-nowrap border border-[#410f0f] rounded-2xl h-6 px-4 py-3 bg-white flex gap-1 items-center align-middle hover:cursor-pointer hover:border-[brown] hover:text-[brown] transition-all ${
                  selected === data.id ? "hidden" : ""
                }`}
              >
                <FontAwesomeIcon icon={faCartShopping} />
                Add to Cart
              </div>
              {selected === data.id && (
                <div className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 text-white text-nowrap bg-[brown] rounded-2xl h-6 px-2 py-3.5 flex items-center align-middle hover:cursor-pointer hover:border-[brown] transition-all justify-between w-28">
                  <div
                    onClick={() => decrease(data.id)}
                    className="border border-white bg-[brown] hover:bg-white hover:text-[brown] rounded-[100%] h-5 w-5 flex items-center justify-center text-xs"
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </div>
                  <p className="text-white text-sm">
                    {count[data.id] || 0}
                  </p>
                  <div
                    onClick={() => increase(data.id)}
                    className="border border-white bg-[brown] hover:bg-white hover:text-[brown] rounded-[100%] h-5 w-5 flex items-center align-middle justify-center text-xs"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                </div>
              )}
            </div>
            <div className="text-nowrap text-sm">
              <p className="text-xs">{data.category}</p>
              <h1 className="font-medium text-[#410f0f]">{data.name}</h1>
              <p className="text-[brown]">${data.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tile;
