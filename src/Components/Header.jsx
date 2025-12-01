import { Link } from "react-router";
import "../style.css";
import useShop from "../Context/ShopContext";


export const Header = () => {
  const {Products} = useShop()

  return (
    <div className="menu">
     <Link to="/" className="logo">Logo</Link>
      <div className="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/cart"}>Cart</Link>
      </div>
      <Link to={"/cart"}><span className="cart">{Products.length}</span></Link>
    </div>
  );
};
