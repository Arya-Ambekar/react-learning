import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";
import { fetchProducts } from "../redux/productSlice";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productSelector = useSelector((state) => state.products.items);
  // console.log(productSelector);

  const cartSelector = useSelector((state) => state.cart.items);
  // console.log(cartSelector.length);

  return (
    <div className="grid">
      {productSelector.length &&
        productSelector.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.thumbnail} alt="" />
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="brand">{item.brand}</div>
              <div className="price">{item.price}</div>
              <div className="rating">{item.rating}</div>
            </div>
            {cartSelector.find((cartItem) => cartItem.id === item.id) ? (
              <button
                onClick={() => dispatch(removeItem(item))}
                className="cart-button remove-cart-button"
              >
                Remove From Cart
              </button>
            ) : (
              <button
                onClick={() => dispatch(addItem(item))}
                className="cart-button"
              >
                Add To Cart
              </button>
            )}
          </div>
        ))}
    </div>
  );
};

export default Product;
