import { useContext } from "react";
import { Link } from 'react-router-dom';
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
            <ButtonControl>
                <Link to='/checkout'>Go to Checkout</Link>
            </ButtonControl>
        </div>
    )
}

export default CartDropdown;