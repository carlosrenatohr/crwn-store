import { useState, createContext } from 'react';
import PRODUCTS from '../shop-data.js';

export const ProductContext = createContext({
    categories: {},
});

export const ProductProvider = ({children}) => {
    const [ categories, setCategories ] = useState(PRODUCTS);
    const value = {categories};
    
    return (
        <ProductContext.Provider value={value} >{children}</ProductContext.Provider>
    );

}