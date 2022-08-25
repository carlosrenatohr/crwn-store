import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import ButtonControl, {BUTTON_TYPE_CLASSES} from '../button-control/button-control.component';
const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);
    
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <div className="name">{name}</div>
                <div className="price">{price}</div>
            </div>
            <ButtonControl buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart} >Add to Cart</ButtonControl>
        </div>
    );
}

export default ProductCard;