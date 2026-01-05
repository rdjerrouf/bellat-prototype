"use client"; // This marks the component as a Client Component

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Product } from '@/types/product';
import { Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

// Define the props, which include the product to be added to the cart
interface AddToCartFormProps {
  product: Product;
}

export function AddToCartForm({ product }: AddToCartFormProps) {
  // State to manage the quantity of the product
  const [quantity, setQuantity] = useState(1);
  // Get the addToCart function from our custom hook
  const { addToCart } = useCart();

  // Function to decrease quantity, with a minimum of 1
  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  // Function to increase quantity
  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // This function is called when the user clicks the "Add to Cart" button
  const handleAddToCart = () => {
    // Call the addToCart function from the context to update the global cart state
    addToCart(product, quantity);
    // Show a success notification to the user
    toast.success(`${quantity} x ${product.name_fr} ajouté au panier!`);
  };

  const totalPrice = product.price * quantity;

  return (
    <div className="mt-6 space-y-6">
      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <h3 className="text-sm font-semibold">Quantité:</h3>
        <div className="flex items-center border border-gray-300 rounded-lg">
          <Button variant="icon" className="border-none rounded-r-none" onClick={decrementQuantity} aria-label="Decrement quantity">
            <Minus className="h-4 w-4" />
          </Button>
          <span className="px-6 font-semibold">{quantity}</span>
          <Button variant="icon" className="border-none rounded-l-none" onClick={incrementQuantity} aria-label="Increment quantity">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <Button
        variant="primary"
        className="w-full"
        onClick={handleAddToCart}
      >
        Ajouter au panier - {totalPrice} DZD
      </Button>
    </div>
  );
}
