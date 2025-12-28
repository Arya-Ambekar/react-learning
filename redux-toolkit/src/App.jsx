import Header from "./components/Header";
import Product from "./components/Product";
import { useDispatch } from "react-redux";
import { clearAllItems } from "./redux/cartSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartList from "./pages/CartList";

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/cart" element={<CartList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
