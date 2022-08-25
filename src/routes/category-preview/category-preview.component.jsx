import { Fragment, useContext } from 'react';
import { ProductContext } from '../../contexts/product.context';

import CategoriesPreview from '../../components/categories-preview/categories-preview.component';

const CategoryPreview = () => {
    const {categories} = useContext(ProductContext);
    return (
        <Fragment>
            {Object.keys(categories).map((title) => {
                const products =  categories[title];
                return <CategoriesPreview key={title} title={title} items={products} />
            })}
        </Fragment>
    );

};

export default CategoryPreview;