import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutRow from '../checkout-row/checkout-row.component';

import './checkout-table.styles.scss'
const CheckoutTable = () => {

    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <table className="checkout-container">
            <thead className="checkout-header">
                {/* <tr> */}
                    <th className="header-block">Product</th>
                    <th className="header-block">Description</th>
                    <th className="header-block">Quantity</th>
                    <th className="header-block">Price</th>
                    <th className="header-block">Remove</th>
                {/* </tr> */}
            </thead>
            <tbody>
                {cartItems.map((item) => <CheckoutRow item={item} key={item.id} />)}
            </tbody>
            <tfoot>
                <tr>
                    <td className="total">
            <span className="total">
                TOTAL: {`$ ${cartTotal}`}
            </span>
                    </td>
                 </tr>
             </tfoot>
        </table>
    );
}

export default CheckoutTable;