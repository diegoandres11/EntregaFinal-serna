import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const numero=cartItems.length

    const addToCart = (item) => {
        setCartItems(prevItems => [...prevItems, item])
    }

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.slice(1))
        const numero=cartItems.length
    }

    const getTotalItems = () => {
        const totalItems = cartItems.length;
        return totalItems;
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalItems, setCartItems,numero }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)