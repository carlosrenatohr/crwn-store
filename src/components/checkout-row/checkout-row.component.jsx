import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-row.styles.scss';

const CheckoutRow = ({item}) => {
    const {imageUrl, name, quantity, price } = item;
    const { addItemToCart, substractProductFromCart, clearItemFromCart } = useContext(CartContext);

    const addItemHandler = () => addItemToCart(item);
    const substractItemHandler = () => substractProductFromCart(item);
    const clearItemHandler = () => clearItemFromCart(item);

    return (
        <tr className="checkout-item-container">
            <td className="image-container">
                <img src={imageUrl} alt={`${name}`}></img>
            </td>
            <td className="name">
                {name}
            </td>
            <td className="quantity">
                <div className="arrow" onClick={substractItemHandler}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItemHandler}>&#10095;</div>
            </td>
            <td className="price">
                {price}
            </td>
            <td>
                <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
            </td>
            
        </tr>
    );
}

export default CheckoutRow;