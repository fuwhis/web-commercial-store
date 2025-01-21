"use client";
import { ProductImage } from "@/components/ProductImage";
import { MouseEvent, useState } from "react";

interface IInitStates {
  counter: number;
  isFavourite: boolean;
}

const initStates: IInitStates = {
  counter: 0,
  isFavourite: false,
};

export default function ProductDetails() {
  const [states, setStates] = useState<IInitStates>(initStates);

  const incrementProduct = () => {
    states.counter++;
  };

  const decreaseProduct = () => {
    states.counter--;
  };

  const handleAddToCart = (ev: MouseEvent) => {
    ev.preventDefault();
    setStates(states);
    alert("add product to your shopping cart");
  };

  return (
    <div className="min-h-screen left p-4">
      <h1 className="text-xl">Product Details</h1>

      <div id="prod-detail-wrapper" className="flex justify-item-center gap-4">
        <div id="border shadow">
          <ProductImage source="/img" alt="detail-img" />
        </div>

        <div className="row">
          <h4 className="text-xl font-semibold text-gray-800">Product title</h4>
          <span>description</span>
          Price: <span className="text-green-500">$prices</span>
          <hr />
          <div className="flex justify-item-center">
            <input type="number" name="quantity" id="product-quantity" />
            <button className="border" onClick={() => incrementProduct()}>
              +
            </button>
            <button className="border" onClick={() => decreaseProduct()}>
              -
            </button>
          </div>
          <div>
            <button
              className=""
              type="submit"
              onClick={(e) => handleAddToCart(e)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
