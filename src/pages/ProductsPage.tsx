
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import SectionHeader from '@/components/ui/SectionHeader';
import ProductCard from '@/components/ui/ProductCard';
import IntersectionObserver from '@/components/ui/IntersectionObserver';
import { Search, FilterX } from 'lucide-react';

// Sample product data
const products = [
  {
    id: "1",
    name: "Premium Security Spikes",
    description: "High-quality galvanized steel security spikes for perimeter protection. Designed for commercial and residential applications.",
    price: 199,
    image: "https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Security Spikes",
    slug: "premium-security-spikes"
  },
  {
    id: "2",
    name: "Electrowelded Security Gate",
    description: "Custom-sized electrowelded gates providing maximum security and durability. Perfect for industrial facilities.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1573488389155-6a8ff5e2c162?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Electrowelded Gates",
    slug: "electrowelded-security-gate"
  },
  {
    id: "3",
    name: "Shark Net Gate System",
    description: "Advanced shark net gate system with corrosion-resistant materials. Ideal for coastal properties and security-conscious homeowners.",
    price: 899,
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Shark Net Gates",
    slug: "shark-net-gate-system"
  },
  {
    id: "4",
    name: "Residential Boundary Fence",
    description: "Elegant and secure boundary fencing for residential properties. Available in various heights and finishes.",
    price: 149,
    image: "https://images.unsplash.com/photo-1566996533071-2c578080abf9?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Fencing Solutions",
    slug: "residential-boundary-fence"
  },
  {
    id: "5",
    name: "Industrial Security Fence",
    description: "Heavy-duty security fencing for industrial sites and facilities requiring high-level protection.",
    price: 299,
    image: "https://images.unsplash.com/photo-1527869826842-b5c2ac9c6d4e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Fencing Solutions",
    slug: "industrial-security-fence"
  },
  {
    id: "6",
    name: "Automatic Sliding Gate",
    description: "Motorized sliding gate with remote control and safety features. Custom sizes available for residential and commercial use.",
    price: 2499,
    image: "https://images.unsplash.com/photo-1433324168539-154835572766?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Automated Gates",
    slug: "automatic-sliding-gate"
  },
  {
    id: "7",
    name: "Commercial Swing Gates",
    description: "Durable swing gates for commercial entrances. Available in single or double configurations with various access control options.",
    price: 1899,
    image: "https://images.unsplash.com/photo-1529148012963-8e049a7ff8f9?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Automated Gates",
    slug: "commercial-swing-gates"
  },
  {
    id: "8",
    name: "Perimeter Security Bollards",
    description: "Heavy-duty security bollards designed to prevent vehicle intrusions and protect property perimeters.",
    price: 399,
    image: "https://images.unsplash.com/photo-1586760128072-71e1b84b9032?q=80&w=2615&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Security Accessories",
    slug: "perimeter-security-bollards"
  }
];

// Get unique categories
const categories = ["All", ...new Set(products.map(product => product.category))];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("featured");

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "price-asc") {
      return a.price - b.price;
    } else if (sortOrder === "price-desc") {
      return b.price - a.price;
    } else if (sortOrder === "name-asc") {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === "name-desc") {
      return b.name.localeCompare(a.name);
    }
    // Default to featured (original order)
    return 0;
  });

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSortOrder("featured");
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Our Products"
            subtitle="Browse our comprehensive range of high-quality security fencing and gate solutions."
            centered
          />
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filters and Search */}
          <div className="mb-10 p-6 rounded-xl bg-white shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select
                value={sortOrder}
                onValueChange={setSortOrder}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="name-asc">Name: A to Z</SelectItem>
                  <SelectItem value="name-desc">Name: Z to A</SelectItem>
                </SelectContent>
              </Select>
              
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={resetFilters}
              >
                <FilterX className="h-4 w-4" />
                Reset Filters
              </Button>
            </div>
          </div>
          
          {/* Products Grid */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sortedProducts.map((product, index) => (
                <IntersectionObserver key={product.id} className={`delay-${index % 4 * 100}`}>
                  <ProductCard product={product} />
                </IntersectionObserver>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
              <Button onClick={resetFilters}>View All Products</Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
