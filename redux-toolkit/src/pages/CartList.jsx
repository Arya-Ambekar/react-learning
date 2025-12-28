import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllItems, removeItem } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const CartList = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector);
  const [cartItems, setCartItems] = useState(cartSelector);

  useEffect(() => {
    setCartItems(cartSelector);
  }, [cartSelector]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const manageQuantity = (id, q) => {
    let quantity = parseInt(q) > 1 ? parseInt(q) : 1;
    const cartTempItems = cartSelector.map((item) => {
      return item.id === id ? { ...item, quantity } : item;
    });
    setCartItems(cartTempItems);
  };

  const handlePlaceOrder = () => {
    localStorage.clear();
    dispatch(clearAllItems());
    alert("Order Placed!");
    navigate("/");
  };
  return (
    <>
      <div className="cart-container">
        <div className="cart-header">
          <h2>Your Cart Item List</h2>
          <span>{cartItems.length} items</span>
        </div>
        {cartItems.length > 0
          ? cartItems.map((item) => (
              <div key={item.id} className="cart-items">
                <div className="item-info">
                  <img src={item.thumbnail} />
                  <div className="item-details">
                    <h4>{item.title}</h4>
                    <p>{item.brand}</p>
                  </div>
                </div>
                <div className="item-actions">
                  <div style={{ display: "flex" }}>
                    <input
                      onChange={(e) => manageQuantity(item.id, e.target.value)}
                      style={{ margin: "15px" }}
                      type="number"
                      value={item.quantity ? item.quantity : 1}
                      placeholder="Enter Quantity"
                    />
                    <div>
                      <span className="price">
                        $
                        {(item.quantity
                          ? item.price * item.quantity
                          : item.price
                        ).toFixed(2)}
                      </span>
                      <button
                        onClick={() => dispatch(removeItem(item))}
                        className="remove-cart-button"
                      >
                        Remove From Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
        <div className="cart-footer">
          Total: $
          {cartItems
            .reduce(
              (sum, item) =>
                item.quantity
                  ? sum + item.price * item.quantity
                  : sum + item.price,
              0
            )
            .toFixed(2)}
        </div>
        <button className="cart-button" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </>
  );
};

export default CartList;
