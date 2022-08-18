import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import ButtonControl from "../button-control/button-control.component";

import CartItem from '../card-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate('/checkout');
    };

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                { cartItems.map(item => <CartItem key={item.id} cartItem={item}/>) }
            </div>
            <ButtonControl onClick={goToCheckoutHandler}>
                Go to Checkout
            </ButtonControl>
        </div>
    )
}

export default CartDropdown;