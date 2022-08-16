import ButtonControl from "../button-control/button-control.component";
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" />
            <ButtonControl>Go to Checkout</ButtonControl>
        </div>
    )
}

export default CartDropdown;