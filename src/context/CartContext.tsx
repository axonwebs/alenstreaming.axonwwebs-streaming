import React, { createContext, useContext, useState, useCallback } from "react";
import { Product } from "@/data/products";
import { showPromo } from "@/components/PromoToast";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeOneItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  discount: number;
  total: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }

      // Show promo toasts after adding a new product
      if (prev.length === 0) {
        // First product added: suggest a second one
        setTimeout(() => {
          showPromo({
            id: "promo-duo-" + Date.now(),
            text: "¡Excelente elección! Agrega cualquier otra plataforma con",
            highlight: "$2.000 de descuento 🔥",
            icon: "🎁",
          });
        }, 300);
      } else if (prev.length === 1) {
        // Second product added: suggest a third one
        setTimeout(() => {
          showPromo({
            id: "promo-trio-" + Date.now(),
            text: "¡Combo Dúo activo! Agrega una 3ra plataforma para un descuento total de",
            highlight: "$5.000 �",
            icon: "�",
          });
        }, 300);
      }

      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const removeOneItem = useCallback((productId: string) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === productId);
      if (!existing) return prev;
      if (existing.quantity === 1) {
        return prev.filter((i) => i.product.id !== productId);
      }
      return prev.map((i) =>
        i.product.id === productId ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  // Descuento escalonado: 2 plataformas = 2000, 3 plataformas = 5000, 4+ = 5000 + 2000 por cada adicional
  const discount = totalItems <= 1
    ? 0
    : totalItems === 2
      ? 2000
      : 5000 + (totalItems - 3) * 2000;
  const total = Math.max(0, subtotal - discount);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeOneItem, removeItem, clearCart, totalItems, subtotal, discount, total, isCartOpen, setIsCartOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
