
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/ui/SectionHeader';
import IntersectionObserver from '@/components/ui/IntersectionObserver';
import ProductCard from '@/components/ui/ProductCard';

// Sample featured products
const featuredProducts = [
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
  }
];

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519500099198-fd81846fc4c5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Security fencing" 
            className="object-cover w-full h-full hero-image-mask"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 z-10">
          <div className="max-w-3xl">
            <h1 
              className={`text-white text-5xl sm:text-6xl lg:text-7xl font-semibold mb-4 leading-tight transition-all duration-700 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              Securing Boundaries<br />
              <span className="text-fencing-300">With Precision</span>
            </h1>
            <p 
              className={`text-xl text-white/80 mb-8 max-w-2xl transition-all delay-300 duration-700 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              Premium fencing solutions and security gates crafted with the highest quality materials. Protecting what matters most, with uncompromising attention to detail.
            </p>
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all delay-500 duration-700 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/products">Browse Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <IntersectionObserver>
            <SectionHeader 
              title="Why Choose Us" 
              subtitle="For over 25 years, we've been delivering premium fencing solutions with an unwavering commitment to quality and security."
              centered
            />
          </IntersectionObserver>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <IntersectionObserver className="delay-100">
              <div className="glass-card p-8 rounded-xl text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Superior Security</h3>
                <p className="text-muted-foreground">
                  Our products are engineered to provide maximum security, with robust materials and innovative designs that deter intruders.
                </p>
              </div>
            </IntersectionObserver>
            
            <IntersectionObserver className="delay-200">
              <div className="glass-card p-8 rounded-xl text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Precision Engineering</h3>
                <p className="text-muted-foreground">
                  Every product is crafted with meticulous attention to detail, ensuring perfect fit, seamless operation, and long-lasting performance.
                </p>
              </div>
            </IntersectionObserver>
            
            <IntersectionObserver className="delay-300">
              <div className="glass-card p-8 rounded-xl text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
                <p className="text-muted-foreground">
                  We use only the highest quality materials, ensuring our fencing and gates withstand the elements and the test of time.
                </p>
              </div>
            </IntersectionObserver>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <IntersectionObserver>
            <SectionHeader 
              title="Featured Products" 
              subtitle="Discover our most popular security solutions, designed with excellence and built to last."
              centered
            />
          </IntersectionObserver>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredProducts.map((product, index) => (
              <IntersectionObserver key={product.id} className={`delay-${index * 100}`}>
                <ProductCard product={product} />
              </IntersectionObserver>
            ))}
          </div>
          
          <IntersectionObserver className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/products" className="flex items-center gap-2">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </IntersectionObserver>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-primary/95 py-20">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1573408301889-47323315fad1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Security fence pattern" 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <IntersectionObserver>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Ready to Secure Your Property?</h2>
              <p className="text-white/80 text-lg mb-8">
                Contact our expert team today for a personalized consultation and free quote. We'll help you find the perfect security solution for your needs.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </IntersectionObserver>
        </div>
      </section>
    </div>
  );
}
