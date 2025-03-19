
import { create } from 'zustand';
import { toast } from '@/hooks/use-toast';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (data: CartItem) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  updateQuantity: (id: string, quantity: number) => void;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  addItem: (data: CartItem) => {
    const currentItems = get().items;
    const existingItem = currentItems.find((item) => item.id === data.id);
    
    if (existingItem) {
      const updatedItems = currentItems.map((item) => {
        if (item.id === existingItem.id) {
          return { 
            ...item, 
            quantity: item.quantity + 1 
          };
        }
        return item;
      });
      
      set({ items: updatedItems });
      toast({
        title: "Item quantity updated",
        description: `${data.name} quantity increased to ${existingItem.quantity + 1}.`
      });
    } else {
      set({ items: [...currentItems, data] });
      toast({
        title: "Item added to cart",
        description: `${data.name} has been added to your cart.`
      });
    }
  },
  removeItem: (id: string) => {
    const currentItems = get().items;
    const itemToRemove = currentItems.find((item) => item.id === id);
    
    set({ items: [...currentItems.filter((item) => item.id !== id)] });
    
    if (itemToRemove) {
      toast({
        title: "Item removed",
        description: `${itemToRemove.name} has been removed from your cart.`
      });
    }
  },
  removeAll: () => {
    set({ items: [] });
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart."
    });
  },
  updateQuantity: (id: string, quantity: number) => {
    const currentItems = get().items;
    
    if (quantity < 1) {
      get().removeItem(id);
      return;
    }
    
    const updatedItems = currentItems.map((item) => {
      if (item.id === id) {
        return { 
          ...item, 
          quantity 
        };
      }
      return item;
    });
    
    set({ items: updatedItems });
  }
}));
