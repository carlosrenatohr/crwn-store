import { useContext } from "react";
import ButtonControl from "../button-control/button-control.component";

import CartItem from '../card-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                { cartItems.map(item => <CartItem key={item.id} cartItem={item}/>) }
            </div>
            <ButtonControl>Go to Checkout</ButtonControl>
        </div>
    )
}

export default CartDropdown;