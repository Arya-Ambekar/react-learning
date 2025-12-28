import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  // console.log(cartSelector.length);
  return (
    <Link to="/cart">
      <div className="cart">
        🛒
        <span className="cart-count">{cartSelector.length}</span>
      </div>
    </Link>
  );
};

export default AddToCart;
