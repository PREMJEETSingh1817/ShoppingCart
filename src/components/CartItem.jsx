import {DiBitbucket} from "react-icons/di"
import { useDispatch } from "react-redux";
import {toast} from "react-hot-toast";
import {remove} from "../redux/Slices/cartSlice"
import { useEffect } from "react";

const CartItem = ({item,itemIndex}) => {
  const dispatch= useDispatch();
  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.success("Item removed from Cart");
  }
  return <div>
    <div>
      <div>
        <img src={item.image} alt="" />
      </div>
      <div>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
        <div><p>{item.price}</p>
        
          <div>
          <button onClick={removeFromCart}><DiBitbucket/></button>
        
          </div>

        </div>
      </div>
    </div>
  </div>;
};

export default CartItem;
