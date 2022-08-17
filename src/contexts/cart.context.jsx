import { createContext, useState, useEffect } from 'react';

// @helper check if the product to add already exists or not
const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems containts productToAdd
    const existingCartItem = cartItems.find( cartItem => cartItem.id === productToAdd.id);
    // if found, increment quantity
    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === productToAdd.id 
                ? { ...cartItem, quantity: cartItem.quantity + 1}
                : { ...cartItem}
        );
    }
    //return new array with modified cartItems / new cart Item
    return [ ...cartItems, {...productToAdd, quantity: 1} ];
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    cartTotal: 0,
});

export const CartProvider = ( {children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
        
        const newCartTotal = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, cartTotal};
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}