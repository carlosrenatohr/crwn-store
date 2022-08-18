import { useContext, Fragment } from 'react';
import { ProductContext } from '../../contexts/product.context';

import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';

const Shop = () => {

    const {products} = useContext(ProductContext);
    console.log(products)
    return (
        <>
        {Object.keys(products).map((title) => (
            <>
            <h2>{title}</h2>
            <div className='products-container'>
                { products[title].map((product) => (
                    <ProductCard key={product.id}product={product}/>
                ) )}
            </div>
            </>
        ))}
        </>
    );

};

export default Shop;