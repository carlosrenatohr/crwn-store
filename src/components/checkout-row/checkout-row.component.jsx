import './checkout-row.styles.scss';

const CheckoutRow = ({item}) => {

    const {imageUrl, name, quantity, price } = item;
    return (
        <tr>
            <td>
                <img src={imageUrl} alt={`${name}`}></img>
            </td>
            <td>
                {name}
            </td>
            <td>
                {quantity}
            </td>
            <td>
                {price}
            </td>
            <td>
                <label >X</label>
            </td>
            
        </tr>
    );
}

export default CheckoutRow;