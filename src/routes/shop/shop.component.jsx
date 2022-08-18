import { useContext } from 'react';
import { ProductContext } from '../../contexts/product.context';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import './shop.styles.scss';

const Shop = () => {
    const {categories} = useContext(ProductContext);
    return (
        <div className='shop-container'>
            {Object.keys(categories).map((title) => {
                const products =  categories[title];
                return <CategoryPreview key={title} title={title} items={products} />
            })}
        </div>
    );

};

export default Shop;