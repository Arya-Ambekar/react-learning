import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">ShopEasy</div>

      <nav className="nav">
        <Link to="/">Home</Link>
      </nav>
      <AddToCart />
    </header>
  );
};

export default Header;
