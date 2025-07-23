import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    // Subscribe to the corect portion of the store.
    let cartItems = useSelector((store)=> store.cart.items);
    return (
        <div className="cart">
            <h1>Cart Items</h1>
            {/* <button onClick={()=>{handleClearCart()}}>Clear Cart</button> */}
            <button onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length===0 ? <h3>Cart is empty</h3> : cartItems.map(
                (cartItem) => {
                    const [key,value] = Object.entries(cartItem)[0];
                    console.log(key,value);
                    return <h3 key={key}>{value}</h3>
                }
            )}
            
            {/* You can add logic to display cart items here */}
        </div>
    );
}

export default Cart;