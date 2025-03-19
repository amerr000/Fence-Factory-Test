
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useCart, CartItem } from '@/hooks/use-cart';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    slug: string;
  };
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      category: product.category
    };
    
    addItem(cartItem);
  };

  return (
    <div className={cn(
      "group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md",
      className
    )}>
      <div className="aspect-square w-full relative overflow-hidden">
        {!isImageLoaded && (
          <div className="absolute inset-0 image-loading" />
        )}
        <img
          src={product.image}
          alt={product.name}
          className={cn(
            "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
            isImageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsImageLoaded(true)}
        />
        <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            size="sm" 
            variant="secondary" 
            className="w-full bg-white/90 hover:bg-white text-black flex items-center gap-2"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </Button>
        </div>
      </div>
      <div className="flex flex-col p-4 flex-grow">
        <Link to={`/products/${product.slug}`}>
          <h3 className="font-medium text-lg mb-1 hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-2">{product.description}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-semibold text-lg">${product.price.toLocaleString()}</span>
          <Button 
            size="icon" 
            variant="outline" 
            className="h-8 w-8 rounded-full"
            onClick={handleAddToCart}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
