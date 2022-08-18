import { createContext, useState, useEffect } from 'react';

// @helpers 
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
    //return new array with modified cartItems + new cart Item
    return [ ...cartItems, {...productToAdd, quantity: 1} ];
};

const substractCartProduct = (cartItems, productToRemove) => {
    // it's an existing item?
    const existingItem = cartItems.find(
        (item) => item.id === productToRemove.id
    );
    // if it's an existing item with 1, then remove it
    if(existingItem.quantity === 1) {
        return cartItems.filter((item) =>  item.id !== productToRemove.id )
    }
    // otherwise, reduce by 1
    return cartItems.map( (item) => 
        item.id === productToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
    );
}

const removeCartItem = (cartItems, productToRemove) => {
    return cartItems.filter((item) =>  item.id !== productToRemove.id )
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => {},
    substractProductFromCart: () => {},
    clearItemFromCart: () => {},
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

    const substractProductFromCart = (productToRemove) => {
        setCartItems(substractCartProduct(cartItems, productToRemove));
    };

    const clearItemFromCart = (productToRemove) => { 
        setCartItems (removeCartItem(cartItems, productToRemove));
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);
    
    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, substractProductFromCart, clearItemFromCart, cartCount, cartTotal};
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}