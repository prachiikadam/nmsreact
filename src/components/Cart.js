
import { useSelector } from "react-redux"


const Cart = () =>{
    const cartItems = useSelector((store)=>store.cart.fooditems)
    console.log('cartItems',cartItems)
    return(
        <div>
            {/* {cartItems} */}
        </div>
    )
}

export default Cart