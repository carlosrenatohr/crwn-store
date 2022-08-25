import {useContext, useState, useEffect, Fragment} from 'react';
import {useParams} from 'react-router-dom';

import { ProductContext } from '../../contexts/product.context';
import ProductCard from '../../components/product-card/product-card.component';

import './category.styles.scss';

// const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const Category = () => {
    const { category } = useParams();
    const { categories } = useContext(ProductContext);
    const [products, setProducts] = useState(categories[category]);

    useEffect( () => {
        setProducts(categories[category]);
    }, [category, categories]);

    return (
    <Fragment>
        <h2 className="title">
            {category.toUpperCase()}
        </h2>
        <div className="category-container">
            {products && 
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            };
        </div>
    </Fragment>
    )
}

export default Category;