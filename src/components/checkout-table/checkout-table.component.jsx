import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutRow from '../checkout-row/checkout-row.component';

import './checkout-table.styles.scss'
const CheckoutTable = () => {

    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {cartItems.map((item) => <CheckoutRow item={item} key={item.id} />)}
            </tbody>
            <tfoot>
                <tr>
                    <td>TOTAL: <span>{`$ ${cartTotal}`}</span></td>
                </tr>
            </tfoot>
        </table>
    );
}

export default CheckoutTable;