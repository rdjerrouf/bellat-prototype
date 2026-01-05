"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem } from '@/types/cart';
import { Product } from '@/types/product';

// 1. Define the shape of the context data
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
  clearCart: () => void;
  itemCount: number;
}

// 2. Create the context with a default undefined value
const CartContext = createContext<CartContextType | undefined>(undefined);

// 3. Define the props for the provider component
interface CartProviderProps {
  children: ReactNode;
}

// 4. Create the CartProvider component
export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // On initial load, try to get the cart from localStorage
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('bellat_cart');
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
      setCartItems([]);
    }
  }, []);

  // Whenever the cartItems state changes, save it to localStorage
  useEffect(() => {
    localStorage.setItem('bellat_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add a product to the cart
  const addToCart = (product: Product, quantity: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // If item exists, update its quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // If item doesn't exist, add it to the cart
        const newItem: CartItem = {
          id: product.id,
          name: product.name_fr, // Assuming 'fr' for now
          image: product.image,
          price: product.price,
          quantity: quantity,
        };
        return [...prevItems, newItem];
      }
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Function to update the quantity of a specific item
  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      // If new quantity is 0 or less, remove the item
      removeFromCart(productId);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate the total number of items in the cart
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // 5. Provide the state and functions to children
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    itemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// 6. Create a custom hook for easy access to the context
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
