"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// 1. Define the shapes of the data we'll store during checkout
export interface DeliveryAddress {
  fullName: string;
  phone: string;
  address: string;
  wilaya: string;
  commune: string;
}

export interface DeliverySlot {
  date: string;
  time: string;
}

// 2. Define the shape of the context that components will consume
interface CheckoutContextType {
  address: DeliveryAddress | null;
  slot: DeliverySlot | null;
  setAddress: (address: DeliveryAddress | null) => void;
  setSlot: (slot: DeliverySlot | null) => void;
}

// 3. Create the React Context
const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

// 4. Create the Provider component that will wrap our checkout pages
interface CheckoutProviderProps {
  children: ReactNode;
}

export function CheckoutProvider({ children }: CheckoutProviderProps) {
  const [address, setAddressState] = useState<DeliveryAddress | null>(null);
  const [slot, setSlotState] = useState<DeliverySlot | null>(null);

  // On initial render, load state from sessionStorage.
  // sessionStorage is used because checkout data is temporary and should be cleared
  // when the user closes the browser tab.
  useEffect(() => {
    try {
      const storedAddress = sessionStorage.getItem('checkout_address');
      if (storedAddress) setAddressState(JSON.parse(storedAddress));

      const storedSlot = sessionStorage.getItem('checkout_slot');
      if (storedSlot) setSlotState(JSON.parse(storedSlot));
    } catch (error) {
      console.error("Failed to parse checkout state from sessionStorage", error);
    }
  }, []);

  // Function to update the address state and save it to sessionStorage
  const setAddress = (newAddress: DeliveryAddress | null) => {
    setAddressState(newAddress);
    if (newAddress === null) {
      sessionStorage.removeItem('checkout_address');
    } else {
      sessionStorage.setItem('checkout_address', JSON.stringify(newAddress));
    }
  };

  // Function to update the delivery slot state and save it to sessionStorage
  const setSlot = (newSlot: DeliverySlot | null) => {
    setSlotState(newSlot);
    if (newSlot === null) {
      sessionStorage.removeItem('checkout_slot');
    } else {
      sessionStorage.setItem('checkout_slot', JSON.stringify(newSlot));
    }
  };

  // The value provided to consuming components
  const value = { address, slot, setAddress, setSlot };

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
}

// 5. Create a custom hook for easy access to the context's values
export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (context === undefined) {
    throw new Error('useCheckout must be used within a CheckoutProvider');
  }
  return context;
}
