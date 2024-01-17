import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return <div>
    <div className="flex flex-row justify-between">
      <NavLink to="/"><img src="https://img.freepik.com/premium-vector/creative-abstract-modern-ecommerce-logo-design-colorful-gradient-online-shopping-logo-template_467913-976.jpg?w=740" loading="lazy" width="70px" /></NavLink>
      <div>
        <NavLink to="/"><p>Home</p></NavLink>
        <NavLink to="/cart"> <FaShoppingCart/> </NavLink>
      </div>
    </div>
  </div>;
};

export default Navbar;
