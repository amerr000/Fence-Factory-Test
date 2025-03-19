
import SectionHeader from '@/components/ui/SectionHeader';
import IntersectionObserver from '@/components/ui/IntersectionObserver';

const partners = [
  {
    id: "1",
    name: "BuildTech Industries",
    logo: "https://placehold.co/300x150/f5f5f5/333333?text=BuildTech",
    description: "Leading provider of construction materials for over 30 years."
  },
  {
    id: "2",
    name: "Secure Solutions Inc.",
    logo: "https://placehold.co/300x150/f5f5f5/333333?text=SecureSolutions",
    description: "Specializing in advanced security systems for residential and commercial properties."
  },
  {
    id: "3",
    name: "MetalWorks Global",
    logo: "https://placehold.co/300x150/f5f5f5/333333?text=MetalWorks",
    description: "Premium metal fabrication and supply chain solutions."
  },
  {
    id: "4",
    name: "SafeHomes Network",
    logo: "https://placehold.co/300x150/f5f5f5/333333?text=SafeHomes",
    description: "Residential security consultants with nationwide coverage."
  },
  {
    id: "5",
    name: "Industrial Protectors",
    logo: "https://placehold.co/300x150/f5f5f5/333333?text=IndustrialProtectors",
    description: "Specialists in industrial-grade security and safety equipment."
  },
  {
    id: "6",
    name: "GateAutomation Pro",
    logo: "https://placehold.co/300x150/f5f5f5/333333?text=GateAutomation",
    description: "Leaders in automated gate technology and smart access solutions."
  },
  {
    id: "7",
    name: "Commercial Guards Ltd.",
    logo: "https://placehold.co/300x150/f5f5f5/333333?text=CommercialGuards",
    description: "Comprehensive commercial security systems and consultation."
  },
  {
    id: "8",
    name: "Property Protect Alliance",
    logo: "https://placehold.co/300x150/f5f5f5/333333?text=PropertyProtect",
    description: "Alliance of property security specialists serving multiple industries."
  }
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Our Partners"
            subtitle="We collaborate with industry-leading companies to provide comprehensive security solutions."
            centered
          />
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <IntersectionObserver key={partner.id} className={`delay-${index % 4 * 100}`}>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-4 w-full">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="h-20 w-auto mx-auto object-contain" 
                      />
                    </div>
                    <h3 className="text-lg font-medium mb-2">{partner.name}</h3>
                    <p className="text-muted-foreground text-sm">{partner.description}</p>
                  </div>
                </div>
              </IntersectionObserver>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <IntersectionObserver>
            <SectionHeader
              title="Partnership Benefits"
              subtitle="Join our network of trusted partners and enjoy exclusive advantages."
              centered
            />
          </IntersectionObserver>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <IntersectionObserver className="delay-100">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-medium mb-4">Collaborative Innovation</h3>
                <p className="text-muted-foreground">
                  Work together with our engineering team to develop customized security solutions that meet your specific requirements.
                </p>
              </div>
            </IntersectionObserver>
            
            <IntersectionObserver className="delay-200">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-medium mb-4">Preferred Pricing</h3>
                <p className="text-muted-foreground">
                  Access special partner rates and volume discounts on our complete range of fencing and gate products.
                </p>
              </div>
            </IntersectionObserver>
            
            <IntersectionObserver className="delay-300">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-medium mb-4">Technical Support</h3>
                <p className="text-muted-foreground">
                  Receive priority technical assistance and dedicated support for all your installation and maintenance needs.
                </p>
              </div>
            </IntersectionObserver>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-16 bg-primary/95 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <IntersectionObserver>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Become a Partner</h2>
              <p className="text-white/80 text-lg mb-8">
                Join our growing network of partners and gain access to exclusive benefits, resources, and collaborative opportunities.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                Contact Us to Learn More
              </a>
            </div>
          </IntersectionObserver>
        </div>
      </section>
    </div>
  );
}
